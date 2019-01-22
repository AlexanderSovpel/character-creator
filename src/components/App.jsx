import React from 'react';

import { abilities } from '../constants';
import { dragonborn } from '../constants/races';
import { barbarian } from '../constants/classes';
import Character from '../utils/Character';

import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const character = new Character('Brunhild');

    // Step 1. Set ability scores
    character.setAbilities({
      [abilities.STR]: 15,
      [abilities.DEX]: 14,
      [abilities.CON]: 13,
      [abilities.INT]: 12,
      [abilities.WIS]: 10,
      [abilities.CHA]: 8,
    });

    // Step 2. Set race.
    character.setRace(dragonborn);

    // Step 3. Set class.
    character.setClass(barbarian);

    this.state = {
      character,
    };
  }

  render() {
    const { character } = this.state;
    return (
      <div className={styles.app}>
        <h1>Hello React</h1>
        <p>Name: { character.name }</p>
        <p>Level: { character.level }</p>
        <p>Race: { character.race.name }</p>
        <p>Ability Scores:</p>
        <ul>
          { Object.keys(character.abilities).map(key => {
            let { value, modifier } = character.abilities[key];
            modifier = (modifier > 0) ? `+${modifier}` : modifier;
            return (
              <li key={key}>{ key }: { value } ({ modifier })</li>
            );
          }) }
        </ul>

        <p>Hit Points: { character.hitPoints() }</p>
      </div>
    );
  }
}

export default App;