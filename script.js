function cambiar(){
    const tasa = 1.03;
    let reais = Number(prompt("Cuantos R$ desea cambiar"))
    let bolivares;

    bolivares = tasa * reais;
    alert(`${reais} R$ son ${bolivares} Bs`)
}

cambiar();