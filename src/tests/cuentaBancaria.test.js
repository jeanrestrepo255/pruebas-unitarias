import { CuentaBancaria } from "../cuentaBancaria";

describe('Cuenta Bancaria', () => {

    test('deposito valido', () => {
        const cuenta = new CuentaBancaria(100);
        cuenta.depositar(50);
        expect(cuenta.consultarSaldo()).toBe(150);
    });

    test('retiro valido', () => {
        const cuenta = new CuentaBancaria(100);
        cuenta.retirar(30);
        expect(cuenta.consultarSaldo()).toBe(70);
    });

    test('error por retiro excesivo', () => {
        const cuenta = new CuentaBancaria(100);
        expect(() => cuenta.retirar(150)).toThrow('Saldo insuficiente');
    });

    test('error por monto invalido', () => {
        const cuenta = new CuentaBancaria(100);
        expect(() => cuenta.depositar(0)).toThrow('Monto invalido');
        expect(() => cuenta.depositar(-10)).toThrow('Monto invalido');
        expect(() => cuenta.retirar(0)).toThrow('Monto invalido');
        expect(() => cuenta.retirar(-10)).toThrow('Monto invalido');
    });

    test('historial correcto', () => {
        const cuenta = new CuentaBancaria(100);
        cuenta.depositar(50);
        cuenta.retirar(30);
        expect(cuenta.historial).toEqual([
            { tipo: 'deposito', monto: 50 },
            { tipo: 'retiro', monto: 30 }
        ]);
    });

});
