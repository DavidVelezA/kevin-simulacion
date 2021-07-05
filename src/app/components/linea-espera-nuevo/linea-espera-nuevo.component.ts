import { Component, OnInit } from '@angular/core';
import { LineaEsperaNuevoModel } from 'src/app/models';
import { Service } from 'src/app/services/service';
import { global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-linea-espera-nuevo',
  templateUrl: './linea-espera-nuevo.component.html',
  styleUrls: ['./linea-espera-nuevo.component.css'],
  providers: [Service]
})
export class LineaEsperaNuevoComponent implements OnInit {
  public lineaEsperaNuevo:  LineaEsperaNuevoModel
  public ALL;
  public TILL;
  public TISE;
  public TIRLL;
  public TIISE;
  public TIFSE;
  public TIESP;
  public TIESA;
  public numClientes;
  public grafico = false;
  public mostrar = false
  public url = global.url
  public x = [];
  public y = [];

  public suma1
  public suma2
  public promedio1
  public promedio2

  constructor(private _service: Service,) {


this.lineaEsperaNuevo = new LineaEsperaNuevoModel(null, null, null, null, null)

  }

  ngOnInit(): void {
  }
  calcular() {

    // console.log(this.lineaEsperaNuevo)

    if (this.lineaEsperaNuevo.landa && this.lineaEsperaNuevo.nu )
     {

       this.lineaEsperaNuevo.x.split(',').forEach((element, i) => {
         this.x.push(+element)  
         
       }); 

       this.lineaEsperaNuevo.y.split(',').forEach((element, i) => {
        this.y.push(+element)  
        
      }); 
       
      if (this.x.length === this.y.length) {

       let datos = {x: this.x, y:this.y, landa: this.lineaEsperaNuevo.landa, nu:this.lineaEsperaNuevo.nu}

    this._service.lineaEsperaNuevo(datos).subscribe(
      response => {

        // console.log(response)
        this.ALL = response.ALL
        this.TILL = response.TILL
        this.TISE = response.TISE
        this.TIRLL = response.TIRLL
        this.TIISE = response.TIISE
        this.TIFSE = response.TIFSE
        this.TIESP = response.TIESP
        this.TIESA = response.TIESA
        this.numClientes = response.numClientes
        this.suma1 = response.suma1
        this.suma2 = response.suma2
        this.promedio1 = response.promedio1
        this.promedio2 = response.promedio2
      
        this.success()
        this.limpiar()
        this.grafico = true;
 
       
      },
      error => {
        console.log(error)

      }
    )
     }else {
       this.noIguales()
       window.location.href="/linea-espera-nuevo"

      }
    }else{
      
      this.camposVacios()


    }


  }
 

 

  limpiar(){
    this.lineaEsperaNuevo = new LineaEsperaNuevoModel (null, null, null, null, null)

  }
  generarGrafico(){
    this.mostrar = true
  }

  success() {
    Swal.fire({
      title: 'Correcto',
      icon: 'success',
      timer: 600,
      showConfirmButton: false,
    });
  }

  camposVacios() {
    Swal.fire({
       title: 'Validacion',
      text: 'No deje campos vacios',
      icon: 'warning',
    });
  }
  
  noIguales() {
    Swal.fire({
      title: 'Advertencia',
      text: 'Los valores no tienen la misma longitud',
      icon: 'warning',
    });
  }

}