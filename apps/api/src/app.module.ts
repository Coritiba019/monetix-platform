import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    // Lê o .env e deixa disponível em toda a aplicação
    ConfigModule.forRoot({ isGlobal: true }),

    // Módulo de mídia (presign upload no Spaces)
    MediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
