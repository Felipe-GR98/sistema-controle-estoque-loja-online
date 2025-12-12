import { Produto } from "../models/Produto";
import { ProdutosRepository } from "../repository/ProdutosRepository";
import { colors } from "../util/Colors";

export class ProdutosContoller implements ProdutosRepository{

  private listarTodosProdutos : Array<Produto> = new Array<Produto>();
 
  id : number = 0
  public gerarId():number{
    return ++ this.id
  }

  listarProdutos(): void {
    this.listarTodosProdutos.forEach(protutos => {
      protutos.visualizar()
    });   
  }

  cadastrarProdutos(produto: Produto): void {
    this.listarTodosProdutos.push(produto)
      console.log(`${colors.fg.green} O Seu Produto: ${produto.nomeProduto} Foi Cadastrado com Sucesso ! ${colors.reset}`)
  }

  atualizarProduto(produto: Produto): void {
    let buscarPorduto = this.bucarNoArray(produto.id);

    if(buscarPorduto != null){
      this.listarTodosProdutos[this.listarTodosProdutos.indexOf(buscarPorduto)] = produto;
      console.log(`${colors.fg.green} O Seu Produto: ${produto.nomeProduto} Foi atualizado com sucesso! ${colors.reset}`)
    }else{
      console.log("Produto Invalido")
    }
  }

  deletarProduto(produto: number): void {
      let buscarPorduto = this.bucarNoArray(produto)

      if(buscarPorduto != null){
        this.listarTodosProdutos.slice(this.listarTodosProdutos.indexOf(buscarPorduto),1)
        console.log(`${colors.fg.green} O Seu Produto: ${produto} Foi atualizado com sucesso! ${colors.reset}`)
      }else{
      console.log("Produto Invalido")
    }
  }


   public bucarNoArray(numero: number): Produto | null{
        this.listarTodosProdutos.forEach(produtos => {
          if(produtos.id === numero){
          return produtos;
        }
      });{
      }
      return null;
    }
}