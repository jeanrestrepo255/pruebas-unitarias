import { SistemaAlquiler } from "../sistemaAlquilerVehiculos";

describe('Sistema de Alquiler de Vehiculos', () => {

    test('alquiler exitoso', () => {
        const sistema = new SistemaAlquiler();
        sistema.agregarVehiculo(1, 'auto', 50);
        
        const fechaInicio = new Date('2024-01-01');
        const fechaFin = new Date('2024-01-05');
        
        sistema.alquilarVehiculo(1, fechaInicio, fechaFin);
        
        const vehiculo = sistema.vehiculos.find(v => v.id === 1);
        expect(vehiculo.alquilado).toBe(true);
        expect(vehiculo.tipo).toBe('auto');
    });

    test('error por alquiler duplicado', () => {
        const sistema = new SistemaAlquiler();
        sistema.agregarVehiculo(1, 'auto', 50);
        
        const fechaInicio = new Date('2024-01-01');
        const fechaFin = new Date('2024-01-05');
        
        sistema.alquilarVehiculo(1, fechaInicio, fechaFin);
        
        expect(() => {
            sistema.alquilarVehiculo(1, fechaInicio, fechaFin);
        }).toThrow('Vehiculo ya alquilado');
    });

    test('error por fechas invalidas', () => {
        const sistema = new SistemaAlquiler();
        sistema.agregarVehiculo(1, 'auto', 50);
        
        const fechaInicio = new Date('2024-01-05');
        const fechaFin = new Date('2024-01-01');
        
        expect(() => {
            sistema.alquilarVehiculo(1, fechaInicio, fechaFin);
        }).toThrow('Fechas invalidas');
    });

    test('calculo correcto del costo', () => {
        const sistema = new SistemaAlquiler();
        sistema.agregarVehiculo(1, 'auto', 50);
        
        const fechaInicio = new Date('2024-01-01');
        const fechaFin = new Date('2024-01-05');
        
        const costo = sistema.calcularCosto(1, fechaInicio, fechaFin);
        expect(costo).toBe(200);
    });

    test('devolucion libera vehiculo', () => {
        const sistema = new SistemaAlquiler();
        sistema.agregarVehiculo(1, 'auto', 50);
        
        const fechaInicio = new Date('2024-01-01');
        const fechaFin = new Date('2024-01-05');
        
        sistema.alquilarVehiculo(1, fechaInicio, fechaFin);
        sistema.devolverVehiculo(1);
        
        const vehiculo = sistema.vehiculos.find(v => v.id === 1);
        expect(vehiculo.alquilado).toBe(false);
    });

});
