import { Produto } from "./Produto";

export class ProdutoFutasELegumes extends Produto{
  private _peso: number;


  constructor(peso:number,id:number,quantidade:number,valor:number,nomeProduto:string,tipo:number){
    super(id,quantidade,valor,nomeProduto,tipo);
    this._peso = peso  
  }

  public get peso(){
    return this._peso
  }

  public set peso(peso:number){
    this._peso = peso;
  }

  public visualizar(): void {
    super.visualizar()
    console.log(`Peso Do Produto :  ${this._peso}`)
  }
}