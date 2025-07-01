/**
 * @template [T=unknown]
 * @typedef {new (...args: any[]) => T} ClassConstructor
 */
/**
 * Возвращает массив типизированных элементов или пустой массив
 * @template T
 * @param {any[]} array
 * @param {ClassConstructor<T>} Type
 * @return {T[]}
 */
export function getTypedArray<T>(array: any[], Type: ClassConstructor<T>): T[];
export function getString(value?: string): string;
export function getNumber(value?: number): number;
export function getBoolean(value?: any): boolean;
export type ClassConstructor<T = unknown> = new (...args: any[]) => T;
