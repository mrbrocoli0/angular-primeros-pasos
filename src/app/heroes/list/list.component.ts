import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Huk', 'Batman'];

  public deletedHero?:string;

  public removeHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
