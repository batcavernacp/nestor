import { BobinaEntity } from '../bobina/bobina.entity';

export const gerarCodigoBarras = (bobina: BobinaEntity): string => {
  console.log(bobina);
  return 'codigo-barras';
};
