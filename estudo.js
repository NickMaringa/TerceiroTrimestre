//console.log("Console: Alô Mundo...");
//alert ("alertaÇ: alo mundo...")
var TABUADA = 2;

function escreva(){
document.write("tabuada do" + TABUADA + "<br>")
document.write( TABUADA+ "x 1 = " + (TABUADA*1) + "<br>"  );
document.write( TABUADA+ "x 2 = " + (TABUADA*2) + "<br>"  );
document.write( TABUADA+ "x 3 = " + (TABUADA*3) + "<br>"  );
document.write( TABUADA+ "x 4 = " + (TABUADA*4) + "<br>"  );
document.write( TABUADA+ "x 5 = " + (TABUADA*5) + "<br>"  );
document.write( TABUADA+ "x 6 = " + (TABUADA*6) + "<br>"  );
document.write( TABUADA+ "x 7 = " + (TABUADA*7) + "<br>"  );
document.write( TABUADA+ "x 8 = " + (TABUADA*8) + "<br>"  );
document.write( TABUADA+ "x 9 = " + (TABUADA*9) + "<br>"  );
document.write( TABUADA+ "x 10 = " + (TABUADA*10) + "<br>"  );
}
function escreva(){ 
  for (var i =1 ;i < 11; i++ ){

document.write( TABUADA + "x " + i + " = " +(TABUADA*i) + "<br>"  );

}
}
function quadrado (){
  for(var i = 2; i < 21; i++){
   document.write("O quadrado de " + i + "é" + (i*i) )

  }
}
function total (){
  let valor = document.getElementById("val").value;
  let juros = document.getElementById("ju").value;
  let mes = document.getElementById("mes").value;
  let resultado = 0;
  for(let i = 1 <= mes; i++) {
    resultado += valor * (1+(juros/100));

  }
   document.write("O Resultado é" + resultado);

}
function soma () {
  let n1 = document.getElementById("n1").value;
  let n1 = document.getElementById("n2").value;
  let n1 = document.getElementById("n3").value;
  let r = Number(n1) + Number(n2) + Number(n3);
  document.getElementById("resultado").innerHTML = r ;
}
function Media () {
  let n1 = document.getElementById("n1").value;
  let n1 = document.getElementById("n2").value;
  let n1 = document.getElementById("n3").value;
  let r = Number(n1) + Number(n2) + Number(n3) / Number (3);
  document.getElementById("resultado").innerHTML = r ;
}
function falta() {
  let n1 = document.getElementById("n1").value;
  let n1 = document.getElementById("n2").value;
  let n1 = document.getElementById("n3").value;
  let r = Number (180)-Number(n1) + Number(n2) + Number(n3);
  document.getElementById("resultado").innerHTML = r ;
}


