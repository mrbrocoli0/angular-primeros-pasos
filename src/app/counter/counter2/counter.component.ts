import { Component } from "@angular/core";

@Component({
    selector: 'app-counter', //Lo puedes utilizar en html, debe ser parte de un módulo
    template: `<h1>Hola Counter</h1>
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset(10)">Reset</button>
    `,
})

export class CounterComponent{
    public counter: number = 10;

  increaseBy(value:number):void{
    if (value == +1){
      this.counter+=1;
    }else if(value == -1){
      this.counter-=1;
    }
  }

  reset(value:number){
    this.counter=10;
  }
}