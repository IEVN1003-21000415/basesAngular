import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Saludo de variable";

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
 
  productos:any[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"4 puertas familiar",
      "year":"febrero 2 2022",
      "Precio": 20000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "imagenUrl":"https://es.nissanusa.com/content/dam/Nissan/us/vehicles/murano/2024/overview/features/2024-nissan-murano-blue.jpg"
    },
    {
      "productoId":2,
      "Modelo":'A4',
      "Descripcion":"2 puertas ",
      "year":"febrero 3 2023",
      "Precio": 30000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8LOHTNIGywFxuTBX10aNn6466cZCuNzW0Q&s"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2022",
      "Precio": 60000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdaipqzvr2W-QivDlIOtNtR9XLQyPqq860Q&s"
    }
   
  ]
 
}