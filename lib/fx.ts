// Jembatan sederhana antara section dan canvas efek (FX.tsx)
export interface FxHandle { confetti(): void; burst(x: number, y: number, n: number): void; heart(): void; night(v: boolean): void }
let handle: FxHandle | null = null;
export const registerFx = (h: FxHandle | null) => { handle = h; };
export const fx = {
  confetti: () => handle?.confetti(),
  burst: (x: number, y: number, n = 40) => handle?.burst(x, y, n),
  heart: () => handle?.heart(),
  night: (v: boolean) => handle?.night(v),
};
