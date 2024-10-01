onmessage = function (mensaje) {
    let misdatos = mensaje.data[0];
    let temporal = mensaje.data[1];
    let anchura = mensaje.data[2];
    let altura = mensaje.data[3];

    for (let i = 0; i < misdatos.length; i++) {
        let vivas = 0;

        // Boundary checks for the 8 neighbors
        if (i > anchura && i % anchura !== 0 && misdatos[i - 1 - anchura] === 0) vivas++; // Top-left
        if (i > anchura && misdatos[i - anchura] === 0) vivas++;                         // Top
        if (i > anchura && (i + 1) % anchura !== 0 && misdatos[i + 1 - anchura] === 0) vivas++; // Top-right
        if (i % anchura !== 0 && misdatos[i - 1] === 0) vivas++;                         // Left
        if ((i + 1) % anchura !== 0 && misdatos[i + 1] === 0) vivas++;                   // Right
        if (i + anchura < misdatos.length && i % anchura !== 0 && misdatos[i - 1 + anchura] === 0) vivas++; // Bottom-left
        if (i + anchura < misdatos.length && misdatos[i + anchura] === 0) vivas++;        // Bottom
        if (i + anchura < misdatos.length && (i + 1) % anchura !== 0 && misdatos[i + 1 + anchura] === 0) vivas++; // Bottom-right

        // Apply Conway's Game of Life rules
        if (misdatos[i] === 1) {
            if (vivas === 3) {
                temporal[i] = 0; // Dead cell becomes alive
            }
        } else {
            if (vivas < 2 || vivas > 3) {
                temporal[i] = 1; // Live cell dies
            } else {
                temporal[i] = 0; // Live cell stays alive
            }
        }
    }

    postMessage(temporal);
};
