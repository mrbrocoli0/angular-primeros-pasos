import { Component } from '@angular/core';

@Component({
  //selector: 'app-heroes-list',
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 55;

  get capitalized():string{ //Get
    return this.name.toUpperCase();
  }

  public heroDescription():string{ //Método
    return `${this.name} - ${this.age}`;
  }

  public changeHero():void{
    this.name = 'Spiderman';
  }

  public changeAge():void{
    this.age=23;
  }

  public resetForm():void{
    this.name='Ironman';
    this.age=55
  }
}
