import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';
import { IsNotEmpty } from 'class-validator';
// 传入的数据格式
class CreatePostsDto {
  @ApiModelProperty({ description: '帖子标题', example: '标题1' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string;
  @ApiModelProperty({ description: '帖子内容', example: '内容' })
  content: string;
}

@Controller('posts')
@ApiUseTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({
    title: '显示博客列表',
  })
  async index(@Query() query) {
    return await PostModel.find();
  }

  @Post()
  @ApiOperation({ title: '创建帖子' })
  async create(@Body() createPostDto: CreatePostsDto) {
    await PostModel.create(createPostDto);
    return {
      code: 0,
      msg: '创建成功',
    };
  }

  @Get(':id')
  @ApiOperation({ title: '博客详情' })
  async detail(@Param() param) {
    return await PostModel.findById(param.id);
  }

  @Put(':id')
  @ApiOperation({ title: '编辑帖子' })
  async update(@Param('id') id: string, @Body() body: CreatePostsDto) {
    await PostModel.findByIdAndUpdate(id, body);
    return {
      code: 0,
      id,
      msg: '编辑成功',
    };
  }

  @Delete(':id')
  @ApiOperation({ title: '删除帖子' })
  async remove(@Param('id') id: string) {
    await PostModel.findByIdAndRemove(id);
    return {
      id,
      msg: '删除成功',
    };
  }
}
