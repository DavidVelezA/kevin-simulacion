import { Component, OnInit } from '@angular/core';
import { global } from 'src/app/services/global';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estadisticos',
  templateUrl: './estadisticos.component.html',
  styleUrls: ['./estadisticos.component.css'],
  providers:[Service]
})
export class EstadisticosComponent implements OnInit {
  public muestra;
  public lista = [];

  public grafico = false;
  public mostrar = false
  public url = global.url;
  public x;
  public media;
  public mediana;
  public moda;

  constructor(private _service: Service) { }

  ngOnInit(): void {
  }

  
  aggMuestra(){

    if (this.muestra) {
      
    
 
    this.muestra.split(',').forEach((element, i) => {
      this.lista.push(+element)  
      
    });  

    this._service.estadisticos(this.lista).subscribe(
      response => {
        console.log(response)
        this.x = response.Datos;
        this.media = response.media;
        this.mediana = response.mediana;
        this.moda = response.moda;
        // this.eMM4 = response.eMM04;
        this.lista = []
        
        this.grafico = true;
        this.limpiar()
        this.mostrar = true;
        
      },
      error => {
        console.log(error)

      }
    )
  } else {
    this.camposVacios()


  }

  }

  limpiar(){
    this.muestra = '';

  }
  generarGrafico(){
    this.mostrar = true
    // let datos = {'x': this.x, 'm3': this.MMO3, 'm4': this.MMO4}
    // this._service.graficoPM(datos).subscribe(
    //   response => { 
    //   },
    //   error => {
    //     console.log(error)

    //   }
    // ) 

  }

  success() {
    Swal.fire({
      title: 'Correcto',
      icon: 'success',
      timer: 600,
      showConfirmButton: false
    })
  }
  
  camposVacios() {
    Swal.fire({
       title: 'Validacion',
      text: 'No deje campos vacios',
      icon: 'warning',
    })
  }


}
