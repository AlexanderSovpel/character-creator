import { races, classes, dice } from '../constants';

class Character {
  constructor(name = '') {
    this.name = name;
    this.level = 1;
    this.race = races.CUSTOM_RACE;
    this.class = classes.CUSTOM_CLASS;
    this.proficiencyBonus = 2;

    this.abilities = {
      STR: { value: 10, modifier: 0 },
      DEX: { value: 10, modifier: 0 },
      CON: { value: 10, modifier: 0 },
      INT: { value: 10, modifier: 0 },
      WIS: { value: 10, modifier: 0 },
      CHA: { value: 10, modifier: 0 },
    };

    this.skills = {
      athletics: { value: 0, of: 'STR', isPropficient: false },
      acrobatics: { value: 0, of: 'DEX', isPropficient: false },
      sleightOfHand: { value: 0, of: 'DEX', isPropficient: false },
      stealth: { value: 0, of: 'DEX', isPropficient: false },
      arcana: { value: 0, of: 'INT', isPropficient: false },
      history: { value: 0, of: 'INT', isPropficient: false },
      investigation: { value: 0, of: 'INT', isPropficient: false },
      nature: { value: 0, of: 'INT', isPropficient: false },
      religion: { value: 0, of: 'INT', isPropficient: false },
      animalHandling: { value: 0, of: 'WIS', isPropficient: false },
      insight: { value: 0, of: 'WIS', isPropficient: false },
      medicine: { value: 0, of: 'WIS', isPropficient: false },
      perception: { value: 0, of: 'WIS', isPropficient: false },
      survival: { value: 0, of: 'WIS', isPropficient: false },
      deception:  { value: 0, of: 'CHA', isPropficient: false },
      intimidation:  { value: 0, of: 'CHA', isPropficient: false },
      performance:  { value: 0, of: 'CHA', isPropficient: false },
      persuasion:  { value: 0, of: 'CHA', isPropficient: false },
    };

    this.savingThrows = [];
    this.features = [];
  }

  getAbilityModifier(ability) {
    return Math.floor((ability - 10) / 2);
  }

  setAbility(ability, value) {
    this.abilities[ability].value = value;
    this.abilities[ability].modifier = this.getAbilityModifier(value);
  }

  setAbilities(abilities) {
    for (const ability in abilities) {
      this.setAbility(ability, abilities[ability]);
    }
  }

  setSkill(skill, isPropficient) {
    this.skills[skill] = this.abilities[this.skills[skill].of].modifier;
    this.skills[skill] += isPropficient ? this.proficiencyBonus : 0;
  }

  setSkills(skills) {
    for (const skill in this.skills) {
      this.setSkill(skill, skills[skill]);
    }
  }

  setRace(race) {
    console.log(race);
    this.race = race;

    for (const { name, bonus } of race.abilityScoreIncrease) {
      this.setAbility(name, this.abilities[name].value + bonus);
    }

    this.features.concat(race.traits);
  }

  setClass(characterClass) {
    this.class = characterClass;
  }

  hitPoints() {
    const hitDie = this.class.hitDie;
    const hpBonus = this.abilities.CON.modifier;
    return hitDie.max + hpBonus + (this.level - 1) * (hitDie.avg + hpBonus);
  }

  toString() {
    return JSON.stringify(this);
  }
}

export default Character;