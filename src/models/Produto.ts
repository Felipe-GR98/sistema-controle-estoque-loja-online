export class Produto{
  // atributos da Classe
  private _id : number;
  private _quantidade : number;
  private _valor : number;
  private _nomeProduto :string;

  constructor(id: number,quantidade: number,valor: number,nomeProduto : string){
    this._id = id;
    this._quantidade = quantidade;
    this._valor = valor;
    this._nomeProduto = nomeProduto;
  }

  //metodos Get e Set
  public get id(){
    return this._id;
  }
  
  public set id(numero:number){
    this._id = numero
  }
  public get quantidade(){
    return this._quantidade;
  }

  public set quantidade(numero:number){
    this._quantidade = numero
  }
  public get valor(){
    return this._valor;
  }

  public set valor(numero:number){
    this._valor = numero
  }
  public get nomeProduto(){
    return this._nomeProduto;
  }

  public set nomeProduto(nome:string){
    this._nomeProduto = nome
  }

  //metodos especificos

  public visualizar(){
        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("id: " + this._id);
        console.log("Nome Produto: " + this._nomeProduto);
        console.log("Quantidade De Produtos: " + this._quantidade);
        console.log("Valor do produto: " + this._valor.toFixed(2));
  }

}