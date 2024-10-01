onmessage = function(){
    
    let iteraciones = 100000000000
    let numerooriginal = 1.0000000005345

    for(let i = 0;i<iteraciones;i++){
        numerooriginal *= 1.000000000645
    }
    
    postMessage("ok hola")
}