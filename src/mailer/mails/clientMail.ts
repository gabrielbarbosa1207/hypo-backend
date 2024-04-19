export default function clientMail(
    fullName: string,
    email: string,
    model: string,
    cpf: string,
    bornDate: string,
    state: string,
    amountRequested: string,
    propertyPrice: string,
    corrective: string,
    index: string,
    amortization: string,
    paymentPeriod: Number,
    gracePeriod: Number
  ) {
    return `
      Olá ${fullName},
  
      Obrigado por enviar sua proposta!
  
      Seguem os detalhes que você forneceu:
  
      Detalhes da Proposta:
      - Modelo: ${model}
      - CPF: ${cpf}
      - Data de Nascimento: ${bornDate}
      - Estado: ${state}
      - Valor Solicitado: ${amountRequested}
      - Preço do Imóvel: ${propertyPrice}
      - Corretiva: ${corrective}
      - Índice: ${index}
      - Amortização: ${amortization}
      - Período de Pagamento: ${paymentPeriod}
      - Período de Carência: ${gracePeriod}
  
      Entraremos em contato em breve para discutir os próximos passos.
  
      Atenciosamente,
      Gustavo Elias
    `;
  }
  