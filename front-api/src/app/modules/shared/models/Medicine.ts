import { ETherapeutic } from "./enum/ETherapeutic";
import { Laboratory } from "./Laboratory";

export interface Medicine{
    id:number,
    name:string,
    laboratory:Laboratory,
    therapeutic:ETherapeutic
}
