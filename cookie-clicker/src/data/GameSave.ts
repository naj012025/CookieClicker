export type GameSave = {
    cookies: number;
    cookiesPerClick: number;
    cookiesPerSecond: number;
}

export const defaultSave: GameSave = {
    cookies: 0,
    cookiesPerClick: 1,
    cookiesPerSecond: 0, 
}
 
function validNumber(value: unknown, min: number): value is number {
    return typeof value === "number" &&
    Number.isFinite(value) && value >= min;
}


export function isGameSave(value: unknown): value is GameSave {
    if (typeof value !== "object" || value === null) return false;

    if(!("cookies" in value)||
       !("cookiesPerClick" in value)||
       !("cookiesPerSecond" in value))
       return false;
    
    return validNumber(value.cookies, 0) &&
           validNumber(value.cookiesPerClick, 1) &&
           validNumber(value.cookiesPerSecond, 0);
}

