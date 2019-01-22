class Race {
  constructor(name, abilityScoreIncrease, traits = []) {
    this.name = name;
    this.abilityScoreIncrease = abilityScoreIncrease;
    this.traits = traits;
  }
}

export default Race;