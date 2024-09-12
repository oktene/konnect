import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttachmentService } from './attachment.service';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Attachment')
@Controller('attachment')
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}

  @Post()
  async create(@Body() createAttachmentDto: CreateAttachmentDto) {
    return await this.attachmentService.create(createAttachmentDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attachmentService.getFilesByOpportunities(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttachmentDto: UpdateAttachmentDto) {
    return this.attachmentService.update(id, updateAttachmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attachmentService.remove(id);
  }
}
