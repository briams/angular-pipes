import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Capitán América';

  myName = 'briAn cAMpOS casTRO';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  Pi = Math.PI;

  num = 2.99999;

  porcentaje = 0.234;

  salario = 1234.5;

  fecha = new Date();
  idioma = 'es-PE';

  activar = false;

  videoUrl = 'https://www.youtube.com/embed/2w-e_0W0Y78';

  // valuePromise = new Promise<string>(( resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('llego la data');
  //   }, 5000);
  // });

  heroe = {
    name: 'logan',
    nick: 'wolverine',
    age: 500,
    address: {
      street: 'primera',
      number: 30
    }
  }




}
