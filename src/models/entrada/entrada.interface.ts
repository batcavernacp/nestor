import { IBaseModel } from "../base.interface";
import { IJumbo } from "../jumbo/jumbo.interface";

export interface IEntrada extends IBaseModel {
  jumbo: IJumbo;
  quantidade: number;
}
