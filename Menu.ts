import read  = require("readline-sync")
import { colors } from "./src/util/Colors";

export function main(){

  let opcao: number

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
            console.log("Cadastrar Produto: ")
          keyPress()
          break
          case 2:
            console.log("Listar todos produtos:")
          keyPress()
          break
          case 3:
            console.log("Atualizar Produto")
          keyPress()  
          break
          case 4:
            console.log(" Apagar Produto")
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