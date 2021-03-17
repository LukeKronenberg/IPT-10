import Race from "./../interfaces/IRace"
import weapons from "./weapons"


const races: {[Key: string]: Race} = 
    {
        human: {
            text: "",
            staminaMultiplier: 0,
            dodgeChance: 0,
            maxHealth: 0,
            baseArmor: 0,
            physicalDamageMultiplier: 0,
            magicalDamageMultiplier: 0,
            elementalDamageMuliplier: 0,
            defaultWeapon: weapons.fist,
        },
    }

export default races;