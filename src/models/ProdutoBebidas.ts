import { Produto } from "./Produto";

export class ProdutoBebidas extends Produto{
  private _litros: number;


  constructor(litros:number,id:number,quantidade:number,valor:number,nomeProduto:string,tipo:number){
    super(id,quantidade,valor,nomeProduto,tipo);
    this._litros = litros  
  }

  public get litros(){
    return this._litros
  }

  public set litros(litros:number){
    this._litros = litros;
  }

  public visualizar(): void {
    super.visualizar()
    console.log(`Litros da Bebida :  ${this._litros}`)
  }

}