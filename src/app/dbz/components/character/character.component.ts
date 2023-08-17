import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class DBZCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //Escucha los eventos

  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacter():void {
    //console.log(this.character)
    //debugger; //Pasusa la ejecución para que podamos revisar el código

    if( this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  }
}
