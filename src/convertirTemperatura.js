export const convertirTemperatura = (valor, unidadDestino) => {
    
    if (unidadDestino !== 'F' && unidadDestino !== 'C') {
        throw new Error('Unidad no valida');
    }

    let resultado;

    if (unidadDestino === 'F') {
        resultado = (valor * 9/5) + 32;
    } else {
        resultado = (valor - 32) * 5/9;
    }

    return Number(resultado.toFixed(2));
}
