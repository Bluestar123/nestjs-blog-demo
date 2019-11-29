import { getModelForClass, prop } from '@typegoose/typegoose';
import { ApiOperation, ApiModelProperty } from '@nestjs/swagger';
// 数据库 表结构
export class News {
  @ApiModelProperty({description:'新闻标题'})
  @prop()
  title: string;
  @ApiModelProperty({description:'新闻内容'})
  @prop()
  content: string;
}

// export const PostModel = getModelForClass(Post);
