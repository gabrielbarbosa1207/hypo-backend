import { Module } from '@nestjs/common';
import { WebsiteModule } from './website/website.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://gabrielbarbosasa2:Webdevgabriel123@cluster0.z8gf81f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
    WebsiteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
