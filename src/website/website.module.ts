import { Module } from '@nestjs/common';
import { WebsiteController } from './website.controller';
import { WebsiteService } from './website.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Proposal, ProposalSchema } from './schemas/proposal.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:Proposal.name, schema:ProposalSchema
  }])],
  controllers: [WebsiteController],
  providers: [WebsiteService]
})
export class WebsiteModule {}
