// @ts-nocheck

/**
 * Возвращает массив типизированных элементов или пустой массив
 * @param {any[]} array
 * @param {Class|String|Number} Type
 * @return {Array}
 */
export function getTypedArray(array, Type) {
    const TYPES = ['Number', 'String'];

    const arrayConstructor = value => TYPES.includes(Type.name) ? Type(value) : new Type(value);
    const hasElements = Array.isArray(array) && !!array.length;

    return hasElements ? array.map(el => arrayConstructor(el)) : [];
}

/**
 * Возвращает приведенную к типу строку или пустую строку
 * @param {string} value
 * @return {string}
 */
export const getString = value => value ? String(value) : '';

/**
 * Возвращает приведенное к типу число или 0
 * @param {number} value
 * @return {number}
 */
export const getNumber = value => Number(value) || 0;

/**
 * Возвращает значение, приведенное к булевому типу
 * @param {any} value
 * @return {boolean}
 */
export const getBoolean = value => Boolean(value);