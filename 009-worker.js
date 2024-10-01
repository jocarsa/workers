onmessage = function(mensaje){
    
    
    let misdatos = mensaje.data[0]
    let temporal = mensaje.data[1]
    let anchura = mensaje.data[2]
    let altura = mensaje.data[3]
    
    for(let i = 0;i<misdatos.length;i+=4){         // Para cada uno de los pixeles
                    
        let vivas = 0;
        if(misdatos[i-4-anchura*4] == 0){vivas++} // Compruebo el pixel de arriba a la izquierda
        if(misdatos[i-anchura*4] == 0){vivas++} // Compruebo el pixel de arriba
        if(misdatos[i+4-anchura*4] == 0){vivas++} // Compruebo el pixel de arriba a la derecha
        if(misdatos[i-4] == 0){vivas++}           // Compruebo el pixel de la izquierda
        if(misdatos[i+4] == 0){vivas++}           // Compruebo el pixel de la derecha
        if(misdatos[i-4+anchura*4] == 0){vivas++} // Compruebo el pixel de abajo a la izquierda
        if(misdatos[i+anchura*4] == 0){vivas++} // Compruebo el pixel de abajo
        if(misdatos[i+4+anchura*4] == 0){vivas++} // Compruebo el pixel de abajo a la derecha

        if(misdatos[i] == 255){                       // En el caso de que ese pixel este muerto
            if(vivas == 3){
                temporal[i] = 0
                temporal[i+1] = 0
                temporal[i+2] = 0
                temporal[i+3] = 255
            }
        }else{                                          // en el caso de que el pixel este vivo 
            if(vivas > 3 || vivas < 2){
                temporal[i] = 255
                temporal[i+1] = 255
                temporal[i+2] = 255
                temporal[i+3] = 255
            }else{
                temporal[i] = 0
                temporal[i+1] = 0
                temporal[i+2] = 0
                temporal[i+3] = 255
            }
        }

    }
    /*
    for(let i = 0;i<temporal.length;i+=4){
        if(Math.random() < 0.1){
            temporal[i] = 0;
            temporal[i+1] = 0;
            temporal[i+2] = 0;
            temporal[i+3] = 255
        }
    }
    */
    
    postMessage(temporal)
}