import { Injectable } from '@nestjs/common';
import * as nodemailer from "nodemailer";
import { Transporter } from 'nodemailer';

@Injectable()
export class MailerService {
    private transporter: Transporter;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host:'email-smtp.us-east-1.amazonaws.com',
            port: 465,
            secure:true,
            auth:{
                user: 'AKIA6ODU3HLX6JRHW5N6',
                pass : 'BAnAJEr280OCnD3PF1+MdN+DXHnEdvpYO8/UrcqY9RM1'
            },
            tls: {
                rejectUnauthorized: false
            }
        })
    }

    async sendClientEmail(to: string, subject: string, text:string){
        return this.sendEmail(to, subject, text)
    }

    async sendInternalTeamEmail(to: string, subject: string, text:string){
        return this.sendEmail(to, subject, text)
    }

    private async sendEmail(to: string, subject: string, text:string){
        try{
            const info = await this.transporter.sendMail({
                from: 'gustavo@hypocredito.com.br',
                to,
                subject,
                text
            })
            console.log('Email sent', info.response)
            return info.response
        } catch(err){
            console.error('Error sending email: ', err)
            throw err
        }
    }

}
