import { Controller, Post } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  upload() {
    // Handle file upload
    // Image handling strategy: large files expected, must be resized & compressed, recommend using "sharp"
    return { success: true };
  }
}