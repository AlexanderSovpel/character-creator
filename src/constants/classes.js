import { classes, dice, proficiencies, skills } from './';
import Class from '../utils/Class';


class Proficiency {
  constructor(type, values, options = 0) {
    this.type = type;
    this.values = values;
    this.options = options;
  }
}

export const barbarian = new Class(classes.BARBARIAN, dice.D12, [
  new Proficiency(proficiencies.SKILLS, [
    skills.ANIMAL_HANDLING,
    skills.ATHLETICS,
    skills.INTIMIDATION,
    skills.NATURE,
    skills.PERCEPTION,
    skills.SURVIVAL
  ], 2)
]);