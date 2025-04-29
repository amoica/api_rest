import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hola Mundo</h1>';
  }

  getAllPokemenos():any[]{
    const data= [
      {
        nombre:'pikachu',
        poder:'Electricidad',
        tipo:'rata'
      },
      {
        nombre:'charizard',
        poder:'Fuego',
        tipo:'dragon'
      }
  ];

    return data;
  }
}
