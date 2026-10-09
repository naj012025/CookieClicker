import type { Purchaseable } from "./Purchaseable";

export type Upgrade = Purchaseable & {
    id: number;
    name: string;
};

//Learne i can put id numbers wherever so if i want
//another click now i dont have to redo id numbers.
export const upgrades: Upgrade[] = [
    { id: 1, name: "Power Click", cost: 25, kind: "click", power: 1,},
    { id: 2, name: "Mega Click", cost: 600, kind: "click", power: 5,},
    { id: 3, name: "Ultra Click", cost: 8000, kind: "click", power: 20,},
    { id: 4, name: "Finger of Creation", cost: 250_000, kind: "click", power:250 ,},
    

]

export const autoUpgrades: Upgrade[] = [
    { id: 1, name: "Basic Auto", cost: 5000, kind: "auto", power: 1,},
    { id: 2, name: "Power Auto", cost: 35000, kind: "auto", power: 5,},
    { id: 3, name: "Mega Auto", cost: 250_000, kind: "auto", power: 40,},
    { id: 4, name: "Minions Assemble", cost: 2_500_000, kind: "auto", power:200,},
]