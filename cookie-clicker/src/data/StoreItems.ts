import type { Purchaseable } from "./Purchaseable";

export type StoreItem = Purchaseable & {
    id: number;
    name: string;
    grade: "Common" | "Uncommon" | "Rare" | "Legendary"
    
}

export const store: StoreItem[] = [
    { id: 1, name:"Broken pot", cost: 100_000, kind: "auto", grade: "Common", power: 1000},
    { id: 2, name:"Suspicious dough", cost: 250_000, kind: "auto", grade: "Uncommon", power: 2500},
    { id: 3, name:"Secret recipe", cost: 400_000, kind: "auto", grade: "Rare", power: 5000},
    { id: 4, name:"Strange Cookie", cost: 1_000_000, kind:"auto", grade: "Legendary", power: 15000}
]