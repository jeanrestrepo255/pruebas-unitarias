export class CuentaBancaria {

    constructor(saldoInicial) {
        this.saldo = saldoInicial;
        this.historial = [];
    }

    depositar(monto) {
        if (monto <= 0) throw new Error('Monto invalido');
        this.saldo += monto;
        this.historial.push({ tipo: 'deposito', monto });
    }

    retirar(monto) {
        if (monto <= 0) throw new Error('Monto invalido');
        if (monto > this.saldo) throw new Error('Saldo insuficiente');
        this.saldo -= monto;
        this.historial.push({ tipo: 'retiro', monto });
    }

    consultarSaldo() {
        return this.saldo;
    }

}
