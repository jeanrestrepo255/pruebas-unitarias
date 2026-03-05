import { convertirTemperatura } from "../convertirTemperatura";

describe('Conversor de Temperatura', () => {

    test('convierte correctamente de Celsius a Fahrenheit', () => {
        expect(convertirTemperatura(0, 'F')).toBe(32);
        expect(convertirTemperatura(100, 'F')).toBe(212);
        expect(convertirTemperatura(25, 'F')).toBe(77);
    });

    test('convierte correctamente de Fahrenheit a Celsius', () => {
        expect(convertirTemperatura(32, 'C')).toBe(0);
        expect(convertirTemperatura(212, 'C')).toBe(100);
        expect(convertirTemperatura(77, 'C')).toBe(25);
    });

    test('lanza error con unidad invalida', () => {
        expect(() => convertirTemperatura(25, 'K')).toThrow('Unidad no valida');
        expect(() => convertirTemperatura(25, 'X')).toThrow('Unidad no valida');
    });

    test('maneja correctamente números negativos', () => {
        expect(convertirTemperatura(-40, 'F')).toBe(-40);
        expect(convertirTemperatura(-40, 'C')).toBe(-40);
        expect(convertirTemperatura(-10, 'F')).toBe(14);
    });

});
