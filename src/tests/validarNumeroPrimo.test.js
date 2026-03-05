import { esPrimo } from "../validarNumeroPrimo";

describe('Validador de Numero Primo', () => {

    test('2 es primo', () => {
        expect(esPrimo(2)).toBe(true);
    });

    test('17 es primo', () => {
        expect(esPrimo(17)).toBe(true);
    });

    test('20 no es primo', () => {
        expect(esPrimo(20)).toBe(false);
    });

    test('1 y numeros negativos no son primos', () => {
        expect(esPrimo(1)).toBe(false);
        expect(esPrimo(0)).toBe(false);
        expect(esPrimo(-5)).toBe(false);
        expect(esPrimo(-17)).toBe(false);
    });

});
