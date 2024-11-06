import axios from 'axios';

const calcularFrete = async (cepOrigem, cepDestino, peso) => {
  try {
    const response = await axios.get('http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx', {
      params: {
        nCdEmpresa: '',
        sDsSenha: '',
        nCdServico: '04014', // Exemplo: SEDEX
        sCepOrigem: cepOrigem,
        sCepDestino: cepDestino,
        nVlPeso: peso,
        nCdFormato: '1', // 1 para caixa/pacote
        nVlComprimento: 20,
        nVlAltura: 10,
        nVlLargura: 15,
        nVlDiametro: 0,
        sCdMaoPropria: 'N',
        nVlValorDeclarado: 0,
        sCdAvisoRecebimento: 'N',
        StrRetorno: 'xml'
      }
    });

    console.log('Cálculo de frete:', response.data);
  } catch (error) {
    console.error('Erro ao calcular frete:', error);
  }
};