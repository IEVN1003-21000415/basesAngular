import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1=''
  num2=''
  resultado:number=0;
  sumar(){
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }
}
