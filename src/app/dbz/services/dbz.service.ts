import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService{

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 11000
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 8000
    }];

    addCharacter( character: Character ):void {
        const newCharacter: Character = { id: uuid(), ...character}
        this.characters.push(newCharacter)
      }
    /*
    onDeleteCharacter(i:number){
        this.characters.splice(i, 1);
    }
    */

    deleteCharacterById(id: string){
        this.characters = this.characters.filter( character => character.id !== id );
    }

}