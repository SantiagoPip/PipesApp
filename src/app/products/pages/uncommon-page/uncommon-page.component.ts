import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  public name:string = 'Maira';
  public gender:'female'|'male' = 'female';
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarte'
  }
  changeClient():void{
    this.name = "Santiago"
    this.gender="male"
  }

  // i18nPlural

  public clients:string[] = ['Maira','Camila','Laura','Paula','Tatiana']
  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos 1 cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }
  deleteClient(){
this.clients.shift();
  }
  //Key value pipe
  public person = {
    name:'Fernando',
    age:36,
    address:'Ottawa, Canada'
  }
  //AsyncPipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:',value))
  ); //Cada 2 segundos emite el valor

  public promiseValue:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
    },3500)
  })



}
