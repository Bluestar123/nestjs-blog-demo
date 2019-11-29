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
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import {Post as PostSchema} from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';
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
  constructor(@InjectModel(PostSchema) private readonly postModel:ModelType<PostSchema>){}
  @Get()
  @ApiOperation({
    title: '显示博客列表',
  })
  async index(@Query() query) {
    return await this.postModel.find();
  }

  @Post()
  @ApiOperation({ title: '创建帖子' })
  async create(@Body() createPostDto: CreatePostsDto) {
    await this.postModel.create(createPostDto);
    return {
      code: 0,
      msg: '创建成功',
    };
  }

  @Get(':id')
  @ApiOperation({ title: '博客详情' })
  async detail(@Param() param) {
    return await this.postModel.findById(param.id);
  }

  @Put(':id')
  @ApiOperation({ title: '编辑帖子' })
  async update(@Param('id') id: string, @Body() body: CreatePostsDto) {
    await this.postModel.findByIdAndUpdate(id, body);
    return {
      code: 0,
      id,
      msg: '编辑成功',
    };
  }

  @Delete(':id')
  @ApiOperation({ title: '删除帖子' })
  async remove(@Param('id') id: string) {
    await this.postModel.findByIdAndRemove(id);
    return {
      id,
      msg: '删除成功',
    };
  }
}
