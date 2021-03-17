import IWeapon from "./IWeapon";

export default interface IRace {
    text: string;
    staminaMultiplier: number;
    dodgeChance: number;
    maxHealth: number;
    baseArmor: number;
    physicalDamageMultiplier: number;
    magicalDamageMultiplier: number;
    elementalDamageMuliplier: number;
    defaultWeapon: IWeapon;
}