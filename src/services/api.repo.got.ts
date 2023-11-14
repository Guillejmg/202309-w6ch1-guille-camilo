import { Character, CharacterStructure } from '../models/character';
import { King } from '../models/king';
import { Fighter } from '../models/fighter';
import { Squire } from '../models/squire';
import { Advisor } from '../models/advisor';

export class repoSerial {
  charactersUrl = 'http://localhost:3000/character';

  async getCharacters(): Promise<CharacterStructure[]> {
    const response = await fetch(this.charactersUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
