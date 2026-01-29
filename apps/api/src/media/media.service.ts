import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';

@Injectable()
export class MediaService {
  private s3: S3Client;
  private bucket: string;
  private publicBase: string;

  constructor(private readonly config: ConfigService) {
    const region = this.config.get<string>('S3_REGION')!;
    const endpoint = this.config.get<string>('S3_ENDPOINT')!;
    const accessKeyId = this.config.get<string>('S3_ACCESS_KEY')!;
    const secretAccessKey = this.config.get<string>('S3_SECRET_KEY')!;

    this.bucket = this.config.get<string>('S3_BUCKET')!;
    this.publicBase = this.config.get<string>('S3_PUBLIC_BASE') || endpoint;

    this.s3 = new S3Client({
      region,
      endpoint,
      credentials: { accessKeyId, secretAccessKey },
      forcePathStyle: false,
    });
  }

  async createPresignedUpload(input: {
    userId: string;
    filename: string;
    contentType: string;
  }) {
    const cleanName = input.filename.replace(/[^\w.\-]/g, '_');
    const id = crypto.randomUUID();
    const key = `uploads/${input.userId}/${id}-${cleanName}`;

    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      ContentType: input.contentType,
      ACL: 'private',
    });

    const uploadUrl = await getSignedUrl(this.s3, command, { expiresIn: 60 });
    const publicUrl = `${this.publicBase}/${key}`;

    return { key, uploadUrl, publicUrl, expiresIn: 60 };
  }
}
