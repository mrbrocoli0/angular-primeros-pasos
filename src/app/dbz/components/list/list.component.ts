import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DBZListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Gohan',
      power: 600
    }
  ];

  @Output()
  //onDelete = Index value: number
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string) :void{
    //Emitir el ID del personaje
    if(!id) return;
    //console.log(id);
    this.onDelete.emit(id);
  }
}
