import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  colores: string[] = ['Negro', 'Cafe', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'];
  tolerancias: string[] = ['Oro', 'Plata'];

  valoresColores: { [key: string]: number } = {
    'Negro': 0,
    'Cafe': 1,
    'Rojo': 2,
    'Naranja': 3,
    'Amarillo': 4,
    'Verde': 5,
    'Azul': 6,
    'Morado': 7,
    'Gris': 8,
    'Blanco': 9
  };

  multiplicadoresColores: { [key: string]: number } = {
    'Negro': 1,
    'Cafe': 10,
    'Rojo': 100,
    'Naranja': 1000,
    'Amarillo': 10000,
    'Verde': 100000,
    'Azul': 1000000,
    'Morado': 10000000,
    'Gris': 100000000,
    'Blanco': 1000000000
  };

  toleranciasValores: { [key: string]: number } = {
    'Oro': 5,
    'Plata': 10
  };

  colorCodes: { [key: string]: string } = {
    'Negro': '#000000',
    'Cafe': '#8B4513',
    'Rojo': '#FF0000',
    'Naranja': '#FFA500',
    'Amarillo': '#FFFF00',
    'Verde': '#008000',
    'Azul': '#0000FF',
    'Morado': '#EE82EE',
    'Gris': '#808080',
    'Blanco': '#FFFFFF',
    'Oro': '#FFD700',
    'Plata': '#C0C0C0'
  };

  resistenciasForm: FormGroup;
  resultado: { valor: number, valorMaximo: number, valorMinimo: number, color1: string, color2: string, color3: string, tolerancia: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.resistenciasForm = this.fb.group({
      color1: ['', Validators.required],
      color2: ['', Validators.required],
      color3: ['', Validators.required],
      tolerancia: ['', Validators.required]
    });
  }

  registrar() {
    if (this.resistenciasForm.valid) {
      const { color1, color2, color3, tolerancia } = this.resistenciasForm.value;
      const valorBase = (this.valoresColores[color1] * 10 + this.valoresColores[color2]) * this.multiplicadoresColores[color3];
      const porcentajeTolerancia = this.toleranciasValores[tolerancia] / 100;
      const valorMaximo = valorBase + (valorBase * porcentajeTolerancia);
      const valorMinimo = valorBase - (valorBase * porcentajeTolerancia);

      this.resultado.push({
        valor: valorBase,
        valorMaximo: valorMaximo,
        valorMinimo: valorMinimo,
        color1: color1,
        color2: color2,
        color3: color3,
        tolerancia: tolerancia
      });

      this.resistenciasForm.reset();  // Limpiar el formulario después de registrar
    }
  }
}
