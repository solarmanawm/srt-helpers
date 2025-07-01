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
export function getTypedArray(array, Type) {
    // @ts-ignore
    const arrayConstructor = (payload) => new Type(payload);
    const hasElements = Array.isArray(array) && !!array.length;

    return hasElements ? array.map(el => arrayConstructor(el)) : [];
}

/**
 * Возвращает приведенную к типу строку или пустую строку
 * @param {string} [value]
 * @return {string}
 */
export const getString = value => value ? String(value) : '';

/**
 * Возвращает приведенное к типу число или 0
 * @param {number} [value]
 * @return {number}
 */
export const getNumber = value => Number(value) || 0;

/**
 * Возвращает значение, приведенное к булевому типу
 * @param {any} [value]
 * @return {boolean}
 */
export const getBoolean = value => Boolean(value);