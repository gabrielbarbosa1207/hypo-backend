import { Body, Controller, Get, Post } from '@nestjs/common';
import { WebsiteService } from './website.service';
import { ProposalDto } from './dto/proposal.dto';

@Controller('api/website')
export class WebsiteController {

    constructor(private readonly websiteService:WebsiteService){
    }

    @Post("proposal")
    async newProposal(@Body() proposalDto:ProposalDto){
            const res = await this.websiteService.newProposal(proposalDto)
       return res
    }

    @Get("proposal")
    async getProposal(){
        const res = await this.websiteService.getProposal()
        return res
    }

    @Get("delete")
    async deleteMany(){
        const res = await this.websiteService.deleteMany()
        return res
    }


}
