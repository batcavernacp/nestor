import { BobinaEntity } from '../bobina/bobina.entity';
import { calculateCheckDigitForGTIN } from 'gtin-validator';
import { JumboEntity } from '../jumbo/jumbo.entity';

export const gerarCodigoBarrasBobina = (bobina: BobinaEntity): string => {
  /*
  A Composição do Código de Barras depente de alguns critérios, a base dele seria inicialmente:
    111 + TT + LLL + CCCC + X onde:
    - 111 é um preenchimento do Código
  - T significa TIPO da bobina, encontrado no arquivo Referências
  - L a Largura da bobina
  - C o Comprimento
  - X o Código de verificação criado pelo EAN13
  Porém, temos algumas variações devido ao tipo de produto que desenvolvemos e nossas matérias primas.
    Para Matérias-prima, a Largura possui 4 digitos (LLLL) e comprimento Pode ter 3 (CCC) ou 4 (CCCC) dígitos,
    assim precisando ser alterado para adequar as necessidades, e também foi alterada os numeros iniciais pra indicar
  que é um jumbo. Sendo assim, o Código das Bobinas são compostos da seguinte forma:
  3 dígitos (CCC, menores que 1000m) e 4 dígitos (CCCC).
  - BOBINAS COM Largura de 3dig e Comprimento 4 Dígitos (Maiores de 1000m):
  111 + TT + LLL + CCCC    + X
  - BOBINAS COM Largura de 3dig e Comprimento 3 Dígitos (Menores de 1000m):
  111 + TT + LLL + CCC + 1 + X
  - BOBINAS COM Largura de 3dig e Comprimento 2 Dígitos (Menores de 100m):
  111 + TT + LLL + CC + 11 + X
  */

  const codigo =
    '111' +
    bobina.jumbo.referencia.toString().padStart(2, '0') +
    bobina.largura.toString().padStart(3, '0') +
    bobina.comprimento.toString().padEnd(4, '1');

  return codigo + calculateCheckDigitForGTIN(codigo);
};

export const gerarCodigoBarrasJumbo = (jumbo: JumboEntity): string => {
  /*
      - JUMBO COM MENOS DE 1000 METROS DE COMPRIMENTO:
    99 + TT + LLLL + CCC + 9 + X
    - JUMBO COM MAIS DE 1000 METROS DE COMPRIMENTO:
    99 + TT + LLLL + CCCC    + X
   */

  const codigo =
    '99' +
    jumbo.referencia.toString().padStart(2, '0') +
    jumbo.largura.toString().padStart(4, '0') +
    jumbo.comprimento.toString().padEnd(4, '9');

  return codigo + calculateCheckDigitForGTIN(codigo);
};

export const readCodigoBarras = (codigoBarras: string): string => {
  if (codigoBarras.startsWith('111')) {
    const referencia = codigoBarras.substring(3, 2);
    const largura = codigoBarras.substring(5, 3);
    let comprimento = codigoBarras.substring(8, 4);
    if (comprimento.endsWith('1')) {
      comprimento = comprimento.substring(0, 3);
    }
    return 'Bobina';
  }

  const referencia = codigoBarras.substring(2, 2);
  const largura = codigoBarras.substring(4, 4);
  let comprimento = codigoBarras.substring(8, 4);

  if (comprimento.endsWith('9')) {
    comprimento = comprimento.substring(0, 3);
  }

  return 'Jumbo';
};
