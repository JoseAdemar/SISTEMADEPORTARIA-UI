import { VisitanteModel } from "./visitante.model";

export class VisitaModel {
    public id: number;
    public setor: string;
    public observacao: string;
    public visitante = new VisitanteModel();
    public dataDaVisita: string;

}