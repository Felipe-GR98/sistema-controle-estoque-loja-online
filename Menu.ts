import read  = require("readline-sync")
import { colors } from "./src/util/Colors";
import { ProdutosContoller } from "./src/controller/ProdutosController";
import { Produto } from "./src/models/Produto";
import { ProdutoBebidas } from "./src/models/ProdutoBebidas";
import { ProdutoFutasELegumes } from "./src/models/ProdutoFrutasELegumes";

export function main(){

  const tiposProduto = ["Bebidas", "Frutas e Legumes"]
  let opcao,valor,quantidade,id,litros,peso,tipo:number;
  let nomeProduto : string
  let produtos : ProdutosContoller = new ProdutosContoller();

  while(true){
    console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("               Mercado da esquina                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos Produtos                ");
        console.log("            3 - Atualizar Dados do Produto           ");
        console.log("            4 - Apagar Produto                       ");
        console.log("            5 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = read.questionInt("");

        if(opcao == 5){
          console.log(colors.fg.green, "\n Mercado da esquina")
          sobre();
          console.log(colors.reset,"")
          process.exit(0)
        }
        switch(opcao){
          case 1:
            console.log(colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", colors.reset);
            
            console.log("\nDigite o Nome do Produto (Primeira letra Maiuscula):");
            nomeProduto = read.question("");

            console.log("\n Digite a quantidade do Produto:");
            quantidade = read.questionInt("");

            console.log("\nDigite o valor do seu Produto (R$):");
             valor = read.questionInt("");

            console.log("\nDigite o tipo do seu produto:");
            tipo = read.keyInSelect(tiposProduto,"",{cancel:false})+1;

             switch(tipo){
                    case 1:
                        console.log("Digite os Litros da Bebida:")
                        litros = read.questionInt("");
                        produtos.cadastrarProdutos(new ProdutoBebidas(litros,produtos.gerarId(),quantidade,valor,nomeProduto,tipo))
                        break
                  case 2:
                    console.log("Digite o Peso do Alimento:")
                        peso = read.questionInt("");
                       produtos.cadastrarProdutos(new ProdutoFutasELegumes(peso,produtos.gerarId(),quantidade,valor,nomeProduto,tipo))
                        break;
                }
                
          keyPress()
          break
          case 2:

            console.log("Listar todos produtos:\n")
            produtos.listarProdutos()

          keyPress()
          break
          case 3:
            console.log("Atualizar Produto")

            console.log("Digite o Numero do produto: ")
             id = read.questionInt("")

            let produto = produtos.bucarNoArray(id);
            if(produto != null){
                console.log("\nDigite o Nome do Produto (Primeira letra Maiuscula):");
                nomeProduto = read.question("");

                console.log("\n Digite a quantidade do Produto:");
                quantidade = read.questionInt("");

                console.log("\nDigite o valor do seu Produto (R$):");
                valor = read.questionInt("");

                console.log("\nDigite o tipo do seu produto:");
                tipo = read.keyInSelect(tiposProduto,"",{cancel:false})+1;
              switch(tipo){
                    case 1:
                        console.log("Digite os Litros da Bebida:")
                        litros = read.questionInt("");
                        produtos.cadastrarProdutos(new ProdutoBebidas(litros,id,quantidade,valor,nomeProduto,tipo))
                        break
                  case 2:
                    console.log("Digite o Peso do Alimento:")
                        peso = read.questionInt("");
                       produtos.cadastrarProdutos(new ProdutoFutasELegumes(peso,id,quantidade,valor,nomeProduto,tipo))
                        break;
                }
            }else{
                console.log("Produto invalido")
            }


          keyPress()  
          break
          case 4:
            console.log(" Apagar Produto")
             console.log("Digite o numero do Produto: ")
                id = read.questionInt("")
                produtos.deletarProduto(id);
          keyPress()         
          break
          default:
            console.log("Digite um opção Valida")
          keyPress()
          break
        }
  }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Felipe Gonçalves Rodrigues ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/Felipe-GR98");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    read.prompt();
}
main();
