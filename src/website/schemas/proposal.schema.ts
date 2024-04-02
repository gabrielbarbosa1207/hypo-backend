import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export enum Corporate{
    pf="Pessoa Física",
    pj="Pessoa Jurídica"
}

export enum Interest{
    post="Pós-fixado",
    pre="Prefixado"
}

export enum Index{
    cdi="CDI",
    ipca="IPCA"
}

export enum Amortization{
    sac="SAC",
    price="Price"
}


@Schema()
export class Proposal extends Document{
    @Prop()
    modal:Corporate

    @Prop()
    cpf:string

    @Prop()
    bornDate:string

    @Prop()
    fullName:string

    @Prop()
    email:string

    @Prop()
    state:string

    @Prop()
    amountRequested:string

    @Prop()
    propertyPrice:string

    @Prop()
    corrective:Interest

    @Prop()
    index:Index

    @Prop()
    amortization:Amortization

    @Prop()
    paymentPeriod:Number

    @Prop()
    gracePeriod:Number

    @Prop({ default:Date.now() })
    createdAt:Date
}

export const ProposalSchema = SchemaFactory.createForClass(Proposal)