import { Produto } from "../models/Produto";

export interface ProdutosRepository{
  listarProdutos():void
  cadastrarProdutos(produto:Produto):void
  atualizarProduto(produto:Produto):void
  deletarProduto(numero:number):void
}