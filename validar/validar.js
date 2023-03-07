function capital(){
    const capitalInput=document.getElementById("cap").value;
    const resultado=document.getElementById("resultado");
    const res = capitalInput*0.02;
    alert(res);
    resultado.textContent = `El resultado es ${res}`
}

function comision(){
    //*
    const sueldoInput=document.getElementById("sueldo").value;
    const venta1Input=document.getElementById("venta1").value;
    const venta2Input=document.getElementById("venta2").value;
    const venta3Input=document.getElementById("venta3").value;
    const resultado=document.getElementById("resultado");
    const total1 = venta1Input*0.1
    const total2 = venta2Input*0.1
    const total3 = venta3Input*0.1
    const totalfinal = sueldoInput + (venta1Input*0.1) + (venta2Input*0.1) + (venta3Input*0.1)
    alert(total1);
    alert(total2);
    alert(total3);
    alert(totalfinal);
    resultado.textContent = `El resultado es ${totalfinal}`
}

function descuento(){
    const precInput=document.getElementById("prec").value;
    const resultado=document.getElementById("resultado");
    const res = precInput - (precInput*0.15);
    alert(res);
    resultado.textContent = `El resultado es ${res}`;
}

function calificacion()
{
    //*
    const examen1Input=document.getElementById("examen1").value;
    const examen2Input=document.getElementById("examen2").value;
    const examen3Input=document.getElementById("examen3").value;
    const examenfinalInput=document.getElementById("examenfinal").value;
    const trabajofinalInput=document.getElementById("trabajofinal").value;

    const prom = (parseFloat(examen1Input) + parseFloat(examen2Input) + parseFloat(examen3Input)) / 3;
    
    const res = (parseFloat(prom*0.55) + parseFloat(examenfinalInput*0.30) + parseFloat(trabajofinalInput*0.15));
    alert(res);
}

function porcentajealumnos(){
    
    const homInput=document.getElementById("hom").value;
    const mujInput=document.getElementById("muj").value;

    const alu=parseInt(homInput)+parseInt(mujInput)

    if (0>homInput) {
        alert ("El numero de hombres no puede ser negativo");
    } else {
        if (0>mujInput) {
            alert ("El numero de mujeres no puede ser negativo");
        } else {
            phombres = (homInput/alu)*100
            pmujeres = (mujInput/alu)*100
        }
        alert("Porcentaje de hombres: "+phombres+"%");
        alert("Porcentaje de mujeres: "+pmujeres+"%");
    }
}

function edad(){
    const fechanacimiento=new Date(document.getElementById("fecha-nacimiento").value);
    const fecha2=new Date();
    const años=fecha2.getFullYear()-fechanacimiento.getFullYear();
    const meses=fecha2.getMonth()-fechanacimiento.getMonth();
    const dias=fecha2.getDate()-fechanacimiento.getDate();
  if (meses<0 || (meses===0 && dias<0)) {
    años--;
    meses+=(dias<0?11:12);
  }

  if (dias<0) {
    const mdf=new Date(fecha2.getFullYear(), fecha2.getMonth(), 0).getDate();
    dias+=mdf;
    meses--;
  }
    const res = `Tienes ${años} años`;

    alert(res);

}

function dosnumeros(){
    const n1Input=document.getElementById("n1").value;
    const n2Input=document.getElementById("n2").value;
    if (n1Input == n2Input) {
        res = n1Input*n2Input
    } 
    else 
    {
        if (n1Input>n2Input) {
            res = n1Input-n2Input
        } else {
            res= parseFloat(n1Input)+parseFloat(n2Input)
        }
    }
    alert(res)
}

function mayor(){
    const n1Input=document.getElementById("n1").value;
    const n2Input=document.getElementById("n2").value;
    const n3Input=document.getElementById("n3").value;
    if (n1Input>=n2Input && n1Input>=n3Input) {
        res=n1Input
    } else {
        if (n2Input >= n1Input && n2Input>=n3Input) {
            res = n2Input
        } else {
            res = n3Input
        }
    }
    alert(res)
}

function horasextras(){
    const salarioInput=document.getElementById("salario").value;
    const horasInput=document.getElementById("horas").value;
    if (horasInput<=40) {
        hNormales=horasInput
    } else {
        hNormales=40
        hExtras=horasInput-40
    }

    const salariophoranormal = hNormales*salarioInput

    if (hExtras<=8) {
        salariophoraextra = hExtras * salarioInput *2;
    } else {
        salariophoraextra = (8*salarioInput*2) + ((hExtras-8) * salarioInput*3);
    }

    salarioFinal = parseFloat(salariophoranormal) + parseFloat(salariophoraextra)
    alert(salarioFinal)
}

function utilidad(){
    const salaInput=document.getElementById("sala").value;
    const tiempoInput=document.getElementById("tiempo").value;
    if (tiempoInput<1) {
        res=(salaInput)*0.05
    } else {
        if (tiempoInput>=1 && tiempoInput<2) {
            res=(salaInput)*0.07
        } else {
            if (tiempoInput>=2 && tiempoInput<5) {
                res=(salaInput)*0.1
            } else {
                if (tiempoInput>=5 && tiempoInput<10) {
                    res=(salaInput)*0.15
                } else {
                    res=(salaInput)*0.2
                }
            }
        }
    }
    alert("Utilidad:  $"+res)
}