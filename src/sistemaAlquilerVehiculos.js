export class Vehiculo {
    constructor(id, tipo, precioPorDia) {
        this.id = id;
        this.tipo = tipo;
        this.precioPorDia = precioPorDia;
        this.alquilado = false;
    }
}

export class SistemaAlquiler {

    constructor() {
        this.vehiculos = [];
        this.alquileres = [];
    }

    agregarVehiculo(id, tipo, precioPorDia) {
        const vehiculo = new Vehiculo(id, tipo, precioPorDia);
        this.vehiculos.push(vehiculo);
    }

    alquilarVehiculo(id, fechaInicio, fechaFin) {
        if (fechaInicio >= fechaFin) {
            throw new Error('Fechas invalidas');
        }

        const vehiculo = this.vehiculos.find(v => v.id === id);
        
        if (!vehiculo) {
            throw new Error('Vehiculo no encontrado');
        }

        if (vehiculo.alquilado) {
            throw new Error('Vehiculo ya alquilado');
        }

        vehiculo.alquilado = true;
        
        this.alquileres.push({
            id,
            fechaInicio,
            fechaFin
        });
    }

    devolverVehiculo(id) {
        const vehiculo = this.vehiculos.find(v => v.id === id);
        
        if (vehiculo) {
            vehiculo.alquilado = false;
        }
    }

    calcularCosto(id, fechaInicio, fechaFin) {
        const vehiculo = this.vehiculos.find(v => v.id === id);
        
        if (!vehiculo) {
            throw new Error('Vehiculo no encontrado');
        }

        const dias = Math.ceil((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));
        
        return dias * vehiculo.precioPorDia;
    }

}
