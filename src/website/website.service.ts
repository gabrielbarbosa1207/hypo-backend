import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Proposal } from './schemas/proposal.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ProposalDto } from './dto/proposal.dto';
import { MailerService } from 'src/mailer/mailer.service';
import teamMail from 'src/mailer/mails/page';
import clientMail from 'src/mailer/mails/clientMail';


@Injectable()
export class WebsiteService {

    constructor(@InjectModel(Proposal.name) private proposalSchema:Model<Proposal>, private mailerService: MailerService
){}

    async newProposal(proposalDto:ProposalDto){
        const { modal, cpf, bornDate, fullname, email, state, amountRequested, propertyPrice, corrective, index, amortization, paymentPeriod, gracePeriod  } = proposalDto
        const clientSubject = "A sua oportunidade de crédito chegou!"
        const teamSubject = "Nova Proposta Recebida!"
        try{ 
            const res = await this.proposalSchema.create(proposalDto)

            // await this.mailerService.sendClientEmail(email, clientSubject, clientMail(modal, cpf, bornDate, fullname, email, state, amountRequested, propertyPrice, corrective, index, amortization, paymentPeriod, gracePeriod))

            const teamEmail = await this.mailerService.sendInternalTeamEmail("gustavo@hypocredito.com.br", teamSubject, teamMail(modal, cpf, bornDate, fullname, email, state, amountRequested, propertyPrice, corrective, index, amortization, paymentPeriod, gracePeriod))

            console.log(teamEmail)


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
