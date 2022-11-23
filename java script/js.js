//let day= "54"

//switch(day){
   // case 1:
     //   console.log("hoje é segunda-feira")
      //  break;
       // case 2:
        //    console.log("hoje é terça-feira")
          //  break;
         //   case 3:
           //     console.log("hoje é quarta-feira")
             //   break;
            //    case 4:
              //      console.log("hoje é quinta-feira")
               //     case 5:
               //         console.log("hoje é sexta-feira")
//}
 
//let fruta = prompt("digite a cor da sua fruta favorita")

//switch (fruta){
   // case "amarelo":
     //   console.log("a fruta é banana");
      //  break;

       // case "verde":
        //    console.log("a fruta é melancia");
         //   break;

          //  case "vermelho":
              //  console.log("a fruta é morango");
              //  break;

              //  case "laranja":
               //     console.log("a fruta é laranja");
               //     break;

                 //   case "roxa":
                  //      console.log("pitaya");
                     //   break;

                     //   case "preto":
                     //       console.log("nao é uma fruta");
                     //       break;
//}

//let a= 4500;
//let b= 2000;
//let c= 7000;

//viagem = a+b;

//if (viagem >= c){
   // console.log("tenho dinheiro suficiente para a viagem");
//}
//else{
   // console.log("nao tenho dinheiro pra viagem");
//}

function criaCarro(marca, modelo, ano){

  return{marca, modelo, ano
  };
}
const carro1=criaCarro("fiat", "uno", 2018);
const carro2=criaCarro("toyota", "corolla", 2022);
const carro3=criaCarro("ford", "ka", 2019);

console.log(carro1.modelo, carro1.marca, carro1.ano);
console.log(carro2.modelo, carro2.marca, carro2.ano);
console.log(carro3.modelo, carro3.marca, carro3.ano)