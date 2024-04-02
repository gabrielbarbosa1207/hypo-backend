import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Proposal } from './schemas/proposal.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ProposalDto } from './dto/proposal.dto';

@Injectable()
export class WebsiteService {

    constructor(@InjectModel(Proposal.name) private proposalSchema:Model<Proposal>){}

    async newProposal(proposalDto:ProposalDto){

        try{
            const res = await this.proposalSchema.create(proposalDto)
            return { res }
        } catch(err){
            console.log("Error to post new proposal", err)
        }
    }

    async getProposal(){
        try{
            const res = await this.proposalSchema.find()
            return res
        } catch(err){
            console.error("Error to get all proposals", err)
        }
    }

    async deleteMany(){
        try{
            const res = await this.proposalSchema.deleteMany()
            return "All proposals deleted successfully"
        } catch(err){
            console.error("Error to delete many", err)
        }
    }
}
