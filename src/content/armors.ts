import Armor from "./../interfaces/IArmor"


const armors: {[key: string]: Armor} = {
    noArmor: {
        text: "No armor",
        physicalDamageMultiplier: 1,
        magicalDamageMultiplier: 1,
        elementalDamageMuliplier: 1,
    },
    ironArmor: {
        text: "Iron armor",
        physicalDamageMultiplier: 0.5,
        magicalDamageMultiplier: 1,
        elementalDamageMuliplier: 1.1,
    },
    magicArmor: {
        text: "Magic armor",
        physicalDamageMultiplier: 0.9,
        magicalDamageMultiplier: 0.5,
        elementalDamageMuliplier: 0.8,
    },
    elementArmor: {
        text: "Element armor",
        physicalDamageMultiplier: 0.9,
        magicalDamageMultiplier: 1.1,
        elementalDamageMuliplier: 0.5,
    }
}



export default armors;