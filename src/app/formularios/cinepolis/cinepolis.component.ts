import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  formularioCinepolis!: FormGroup;
  totalPagarCinepolis!: number;
  mensajeError: string = '';
  precioBoleto: number = 12; // Precio de cada boleto
  maxBoletosPorPersona: number = 7;

  constructor() {}

  ngOnInit(): void {
    this.formularioCinepolis = new FormGroup({
      nombreCliente: new FormControl('', Validators.required),
      numBoletos: new FormControl('', [Validators.required, Validators.min(1), Validators.max(14)]), // 14 boletos como máximo si son dos compradores
      numCompradores: new FormControl('', [Validators.required, Validators.min(1), Validators.max(2)]),
      tarjetaCineco: new FormControl('', Validators.required)
    });
  }

  calcularTotalCinepolis(): void {
    let nombreCliente = this.formularioCinepolis.get('nombreCliente')?.value;
    let cantidadBoletos = this.formularioCinepolis.get('numBoletos')?.value;
    let numCompradores = this.formularioCinepolis.get('numCompradores')?.value;
    let tarjetaCineco = this.formularioCinepolis.get('tarjetaCineco')?.value;

    // Reiniciar el mensaje de error
    this.mensajeError = '';

    // Validar que el número de boletos sea correcto
    if (numCompradores === 1 && cantidadBoletos > this.maxBoletosPorPersona) {
      this.mensajeError = 'No puedes comprar más de 7 boletos por persona.';
      return;
    } else if (numCompradores === 2 && cantidadBoletos > this.maxBoletosPorPersona * 2) {
      this.mensajeError = 'No puedes comprar más de 14 boletos entre dos personas.';
      return;
    }

    let subtotal = cantidadBoletos * this.precioBoleto;

    // Aplicar descuentos según la cantidad de boletos
    if (cantidadBoletos > 5) {
      subtotal *= 0.85; // 15% de descuento si compran más de cinco boletos
    } else if (cantidadBoletos >= 3 && cantidadBoletos <= 5) {
      subtotal *= 0.90; // 10% de descuento si compran entre tres y cinco boletos
    }

    // No hay descuento si se compran 2 boletos

    // Aplicar descuento adicional si el cliente tiene tarjeta Cineco
    if (tarjetaCineco === 'sí') {
      subtotal *= 0.90; // 10% de descuento adicional por tarjeta Cineco
    }

    this.totalPagarCinepolis = subtotal;
    
  }
}
