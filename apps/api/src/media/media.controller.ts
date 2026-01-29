import { Body, Controller, Post } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('presign')
  async presign(@Body() body: { filename: string; contentType: string }) {
    const userId = 'demo-user'; // depois trocamos para JWT
    return this.mediaService.createPresignedUpload({
      userId,
      filename: body.filename,
      contentType: body.contentType,
    });
  }
}
