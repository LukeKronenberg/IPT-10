import IWeapon from "./../interfaces/IWeapon"
import damageTypes from "./damageTypes"

const weapons: {[Key: string]: IWeapon} = 
    {
        fist: {
            text: "fist",
            damageType: damageTypes.physical,
            damage: 1,
            criticalHitChance: 0,
        },
        sword: {
            text: "sword",
            damageType: damageTypes.physical,
            damage: 1,
            criticalHitChance: 0,
        },
    }


export default weapons;