
let monto = parseFloat(prompt("Ingrese un monto"))
let cuotas = parseFloat(prompt("Ingrese número de cuotas  máximo 5 cuotas"))

  
 for(let i = 1; i<=5; i++){
 if(cuotas <=5){
  resultado = monto / cuotas
        alert(`Monto a pagar por cuotas es: ${resultado}`)
 
}else{
  alert(`Debe ingresar solo hasta 5 cuotas`)
cuotas = parseFloat(prompt("Ingrese número de cuotas  máximo 5 cuotas"))
}
}

