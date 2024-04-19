export default function clientMail(
    model: string,
    cpf: string,
    bornDate: string,
    fullName: string,
    email: string,
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
      Novo Pedido de Proposta Recebido:
  
      Detalhes do Cliente:
      - Modelo: ${model}
      - CPF: ${cpf}
      - Data de Nascimento: ${bornDate}
      - Nome Completo: ${fullName}
      - Email: ${email}
      - Estado: ${state}
      
      Detalhes da Proposta:
      - Valor Solicitado: ${amountRequested}
      - Preço do Imóvel: ${propertyPrice}
      - Corretiva: ${corrective}
      - Índice: ${index}
      - Amortização: ${amortization}
      - Período de Pagamento: ${paymentPeriod}
      - Período de Carência: ${gracePeriod}
    `;
  }
  