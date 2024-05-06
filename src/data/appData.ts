import {IScent, Lang, Scent} from "./types.ts";

const en: Record<Scent, IScent> = {
    [Scent.lavender]: {
        name: 'Lavender',
        description: 'Lavender',
    },
    [Scent.rose]: {
        name: 'Rose',
        description: 'Rose',
    },
}

const cz: Record<Scent, IScent> = {
    [Scent.lavender]: {
        name: 'Levandule',
        description: 'Levandule',
    },
    [Scent.rose]: {
        name: 'Růže',
        description: 'Růže',
    },
}

export const AppData: Record<Lang, Record<Scent, IScent>> = {
    [Lang.en]: en,
    [Lang.cz]: cz,
} as const