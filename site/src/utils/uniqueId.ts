/**
 * uniqueId.ts
 *
 * Utility function to generate unique IDs for HTML elements.
 * Useful for ensuring accessibility attributes like `id`, `aria-labelledby`, etc., are unique.
 */

let idCounter = 0;

/**
 * Generates a unique ID string.
 * @param {string} prefix - An optional prefix for the ID (e.g., 'modal', 'accordion').
 * @returns {string} A unique ID string.
 */
export function getUniqueId(prefix: string = 'id'): string {
  idCounter++;
  return `${prefix}-${idCounter}`;
}