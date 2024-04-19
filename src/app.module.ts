import { Module } from '@nestjs/common';
import { WebsiteModule } from './website/website.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from './mailer/mailer.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://hypocredito:hypocreditoImobiliario@cluster0.dhdcji4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
    WebsiteModule,
    MailerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
