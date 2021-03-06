import { getModelForClass, prop } from '@typegoose/typegoose';
import { ApiOperation, ApiModelProperty } from '@nestjs/swagger';
// 数据库 表结构
export class Post {
  @ApiModelProperty({description:'帖子标题'})
  @prop()
  title: string;
  @ApiModelProperty({description:'帖子内容'})
  @prop()
  content: string;
}

// export const PostModel = getModelForClass(Post);
