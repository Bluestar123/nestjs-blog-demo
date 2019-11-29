import { getModelForClass, prop } from '@hasezoey/typegoose';
// 数据库 表结构
export class Post {
  @prop()
  title: string;
  @prop()
  content: string;
}

export const PostModel = getModelForClass(Post);
