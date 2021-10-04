export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.characters.length; i += 1) {
      yield this.characters[i];
    }
  }
}
