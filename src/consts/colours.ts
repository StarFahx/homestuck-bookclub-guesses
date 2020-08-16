import { AnyMxRecord } from "dns";

export const John = '#0715cd';
export const Rose = '#b536da';
export const Dave = '#e00707';
export const Jade = '#4ac925';
export type Beta = typeof John | typeof Rose | typeof Dave | typeof Jade;

export const Jane = '#00d5f2';
export const Dirk = '#f2a400';
export const Roxy = '#ff6ff2';
export const Jake = '#1f9400';
export type Alpha = typeof Jane | typeof Dirk | typeof Roxy | typeof Jake;

export const Karkat = '#626262';
export const Aradia = '#a10000';
export const Tavros = '#a15000';
export const Sollux = '#a1a100';
export const Nepeta = '#416600';
export const Kanaya = '#008141';
export const Terezi = '#008282';
export const Vriska = '#005682';
export const Equius = '#000056';
export const Gamzee = '#2b0057';
export const Eridan = '#6a006a';
export const Feferi = '#77003c';
export type Troll = typeof Karkat |
    typeof Aradia |
    typeof Tavros |
    typeof Sollux |
    typeof Nepeta |
    typeof Kanaya |
    typeof Terezi |
    typeof Vriska |
    typeof Equius |
    typeof Gamzee |
    typeof Eridan |
    typeof Feferi;

export const Adam = '#ffd633';
export const Amy = '#00997a';
export const Calum = '#b22222'
export type Custom = typeof Adam | typeof Amy | typeof Calum;

export type Colour = Alpha | Beta | Troll | Custom;