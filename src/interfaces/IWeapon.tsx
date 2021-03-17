import DamageType from "./../content/damageTypes";

export default interface IWeapon {
    text: string;
    damageType: DamageType;
    damage: number;
    criticalHitChance: number;    
}