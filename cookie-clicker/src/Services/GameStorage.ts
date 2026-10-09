import { defaultSave, isGameSave } from "../data/GameSave";
import type { GameSave } from "../data/GameSave";

const SAVE_KEY = "cookieClickerSave";

export function loadGame(): GameSave {
    try {
        const raw = window.localStorage.getItem(SAVE_KEY);
        if(raw === null) return {...defaultSave};

        const parsed: unknown = JSON.parse(raw);
        return isGameSave(parsed) ? parsed : {...defaultSave};
    } catch (error) {
        console.warn("Could not load the game save", error);
        return {...defaultSave};
    }
}

export function saveGame(game: GameSave): void {
    try {
        window.localStorage.setItem(SAVE_KEY, JSON.stringify(game));
    } catch ( error) {
        console.error("Could not save game.", error);
    }
}