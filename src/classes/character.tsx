import Race from "./../interfaces/IRace";
import Armor from "./../interfaces/IArmor";
import armors from "./../content/armors";
import Weapon from "./../interfaces/IWeapon";

export default class Character  {
    name: string;
    race: Race;
    maxHealth: number;
    currentHealth: number;
    maxStamina: number;
    currentStamina: number;
    currentArmor: Armor;
    currentWeapon: Weapon;

    constructor(
        name: string,
        race: Race,
        maxHealth: number,
        maxStamina: number,
        currentHealth?: number,
        currentStamina?: number,
        currentArmor?: Armor,
        currentWeapon?: Weapon,
    ) {
        this.name = name;
        this.race = race;
        this.maxHealth = maxHealth;
        this.maxStamina = maxStamina;
        this.currentHealth = currentHealth ? currentHealth : 0;
        this.currentStamina = currentStamina ? currentStamina : 0;
        this.currentArmor = currentArmor ? currentArmor : armors.noArmor;
        this.currentWeapon = currentWeapon ? currentWeapon : this.race.defaultWeapon;
    }

    attack(c: Character) {
        c.currentHealth -= this.currentWeapon.damage * c.currentArmor.physicalDamageMultiplier * (1 - c.race.baseArmor / 100);

    }
}