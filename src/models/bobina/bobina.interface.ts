import { IBaseModel } from "../base.interface";
import { IJumbo } from "../jumbo/jumbo.interface";

export interface IBobina extends IBaseModel {
  largura: number;
  comprimento: number;
  codigoBarra: string;
  jumbo: IJumbo;
}
