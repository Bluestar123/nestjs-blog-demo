import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { News } from './news.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Crud({
    model: News
})
@Controller('news')
export class NewsController {
    constructor(
        @InjectModel(News) private readonly model:ModelType<News>
    ){}
}
