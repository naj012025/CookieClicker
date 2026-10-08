export type Progression = {
    id: number,
    name: string,
    cost: number,
    grade: "common" | "uncommon" | "rare" | "legendary" | "mythic"

}

export const vanity: Progression[] = [
    { id: 1, name:"ye'olde rolling pin", cost: 500_000, grade: "common"},
    { id: 2, name:"ye'olde Pastry Pipe", cost: 2_000_000, grade: "uncommon"},
    { id: 3, name:"ye'olde Baking Tray of Dreams", cost: 30_000_000, grade: "rare"},
    { id: 4, name:"ye'olde Recipe", cost: 250_000_000, grade: "legendary" },
    { id: 5, name:"ye'olde Dragon Furnace", cost: 1_000_000_000, grade: "mythic"},
] 