function permitir_sololetras(evento) {
    
    key=evento.keyCode || evento.wicth;
    tecla=String.fromCharCode(key).toString();
    letras="abcdefghijklmnopqrstuvwxyz";

    //Permite ingresar los cararecter especiales de retroceso(8), enter(13) o espacio(32)
    caracter_especial=[8,13,32];
    tecla_especial=false;
    for(var i in caracter_especial){
        if(key==caracter_especial[i]){
            tecla_especial=true;
            break;
        }
    }

    if(letras.indexOf(tecla)==-1 && !tecla_especial)
    {
        alert("Por favor, ingrese solo letras en minusculas. \n No esta permitido caracteres especiales o letras con tilde.");
        return false;
    }

}
function selecciona_cadena(etiqueta) {
    cadena=document.getElementById(etiqueta).value;
    return cadena;
}
function encripta_cadena(){
    let cadena_original=selecciona_cadena('CadenaTexto');
    let caracter_orgn="";
    let lst_caracter_cadena_original=[];
    let lst_caracter_cadena_convertido=[];
    let cadena_encritada="";
    for(c=0;c<cadena_original.length;c++){
        caracter_orgn=cadena_original.charAt(c);
        lst_caracter_cadena_original.push(caracter_orgn);
    }
    for(l=0;l<lst_caracter_cadena_original.length;l++){
        caracter_orgn=lst_caracter_cadena_original[l];
        switch(true){
            case (caracter_orgn=='a'):
                caracter_orgn='ai';
                break;
            case (caracter_orgn=='e'):
                caracter_orgn='enter';
                break;
            case (caracter_orgn=='i'):
                caracter_orgn='imes';
                break;
            case (caracter_orgn=='o'):
                caracter_orgn='ober';
                break;
            case (caracter_orgn=='u'):
                caracter_orgn='ufat';
                break;
            default:
                caracter_orgn=lst_caracter_cadena_original[l];                                      
        }
        lst_caracter_cadena_convertido.push(caracter_orgn);
        cadena_encritada=cadena_encritada+lst_caracter_cadena_convertido[l];
    }
    return document.getElementById('CadenaConvertido').value=cadena_encritada;
}
function desencripta_cadena(){
    let cadena_encritada=selecciona_cadena('CadenaTexto');
    let caracter_encriptado="";
    let lst_caracter_cadena_encriptada=[];
    let caracter_legible="";
    let lst_caracter_cadena_legible=[];
    let cadena_legible="";
    
    for(x=0;x<cadena_encritada.length;x++){
        caracter_legible=cadena_encritada.charAt(x);
        caracter_encriptado=cadena_encritada.charAt(x);
        switch(true){
            case (caracter_legible=='a'):
                if(cadena_encritada.charAt(x+1)=='i'){
                    caracter_encriptado='ai';
                    caracter_legible='a';
                    x=x+1;
                    break;
                }else{
                    caracter_legible=cadena_encritada.charAt(x);
                    caracter_encriptado=cadena_encritada.charAt(x);
                }
                break;
            case (caracter_legible=='e'):
                if(cadena_encritada.charAt(x+1)=='n' && cadena_encritada.charAt(x+2)=='t' && cadena_encritada.charAt(x+3)=='e' && cadena_encritada.charAt(x+4)=='r'){
                    caracter_encriptado='enter';
                    caracter_legible='e';
                    x=x+4;
                    break;
                }else{
                    caracter_legible=cadena_encritada.charAt(x);
                    caracter_encriptado=cadena_encritada.charAt(x);
                }
                break;
            case (caracter_legible=='i'):
                if(cadena_encritada.charAt(x+1)=='m' && cadena_encritada.charAt(x+2)=='e' && cadena_encritada.charAt(x+3)=='s'){
                    caracter_encriptado='imes';
                    caracter_legible='i';
                    x=x+3;
                    break;
                }else{
                    caracter_legible=cadena_encritada.charAt(x);
                    caracter_encriptado=cadena_encritada.charAt(x);
                }
                break;
            case (caracter_legible=='o'):
                if(cadena_encritada.charAt(x+1)=='b' && cadena_encritada.charAt(x+2)=='e' && cadena_encritada.charAt(x+3)=='r'){
                    caracter_encriptado='ober';
                    caracter_legible='o';
                    x=x+3;
                    break;
                }else{
                    caracter_legible=cadena_encritada.charAt(x);
                    caracter_encriptado=cadena_encritada.charAt(x);
                }
                break;                                                  
            case (caracter_legible=='u'):
                if(cadena_encritada.charAt(x+1)=='f' && cadena_encritada.charAt(x+2)=='a' && cadena_encritada.charAt(x+3)=='t'){
                    caracter_encriptado='ufat';
                    caracter_legible='u';
                    x=x+3;
                    break;
                }else{
                    caracter_legible=cadena_encritada.charAt(x);
                    caracter_encriptado=cadena_encritada.charAt(x);
                }
                break; 
            default:
                caracter_legible=cadena_encritada.charAt(x);
                caracter_encriptado=cadena_encritada.charAt(x);                                      
        }
        lst_caracter_cadena_encriptada.push(caracter_encriptado);
        lst_caracter_cadena_legible.push(caracter_legible);
    }
    for(c=0;c<lst_caracter_cadena_legible.length;c++){
        cadena_legible=cadena_legible+lst_caracter_cadena_legible[c];
    }
    return document.getElementById('CadenaConvertido').value=cadena_legible;
}