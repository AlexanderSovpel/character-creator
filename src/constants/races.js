import { races, abilities } from './';
import Race from '../utils/Race';

const { STR, DEX, CON, INT, WIS, CHA, ANY } = abilities;

class AbilityBonus {
  constructor(name, bonus) {
    this.name = name;
    this.bonus = bonus;
  }
}

export const dragonborn = new Race(races.DRAGONBORN, [
  new AbilityBonus(STR, 2),
  new AbilityBonus(CHA, 1)
]);
export const dwarfHill = new Race(races.DWARF.DWARF_HILL, [
  new AbilityBonus(CON, 2),
  new AbilityBonus(WIS, 1)
]);
export const dwarfMountain = new Race(races.DWARF.DWARF_MOUNTAIN, [
  new AbilityBonus(CON, 2),
  new AbilityBonus(STR, 1)
]);
export const elfEladrin = new Race(races.ELF.ELF_ELADRIN, [
  new AbilityBonus(DEX, 2),
  new AbilityBonus(INT, 1)
]);
export const elfHigh = new Race(races.ELF.ELF_HIGH, [
  new AbilityBonus(DEX, 2),
  new AbilityBonus(INT, 1)
]);
export const elfWood = new Race(races.ELF.ELF_WOOD, [
  new AbilityBonus(DEX, 2),
  new AbilityBonus(WIS, 1)
]);
export const halfElf = new Race(races.HALF_ELF, [
  new AbilityBonus(CHA, 2),
  new AbilityBonus(ANY, 1),
  new AbilityBonus(ANY, 1)
]);
export const halfOrc = new Race(races.HALF_ORC, [
  new AbilityBonus(STR, 2),
  new AbilityBonus(CON, 1)
]);
export const halflingLightfoot = new Race(races.HALFLING.HALFLING_LIGHTFOOT, [
  new AbilityBonus(DEX, 2),
  new AbilityBonus(CHA, 1)
]);
export const halflingStout = new Race(races.HALFLING.HALFLING_STOUT, [
  new AbilityBonus(DEX, 2),
  new AbilityBonus(CON, 1)
]);
export const human = new Race(races.HUMAN.HUMAN, [
  new AbilityBonus(STR, 1),
  new AbilityBonus(DEX, 1),
  new AbilityBonus(CON, 1),
  new AbilityBonus(INT, 1),
  new AbilityBonus(WIS, 1),
  new AbilityBonus(CHA, 1),
]);
export const humanVariant = new Race(races.HUMAN.HUMAN_VARIANT, [
  new AbilityBonus(ANY, 1),
  new AbilityBonus(ANY, 1)
]);
export const gnome = new Race(races.GNOME.GNOME_ROCK, [
  new AbilityBonus(INT, 2),
  new AbilityBonus(CON, 1)
]);
export const tiefling = new Race(races.TIEFLING, [
  new AbilityBonus(CHA, 2),
  new AbilityBonus(INT, 1),
]);
