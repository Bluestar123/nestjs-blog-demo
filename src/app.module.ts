import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import {TypegooseModule} from 'nestjs-typegoose'
import { NewsController } from './news/news.controller';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/nest-blog-api", {
      useNewUrlParser: true
    }),
    PostsModule,
    NewsModule],
  controllers: [AppController, NewsController],
  providers: [AppService],
})
export class AppModule {}
