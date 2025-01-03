/**
 * Escurece uma cor hexadecimal.
 *
 * @format
 * @param {string} hex - A cor em formato hexadecimal (#RRGGBB).
 * @param {number} percent - A porcentagem para escurecer a cor (0 a 100).
 * @returns {string} - A cor escurecida em formato hexadecimal.
 */

export default (hex: string, percent: number): string => {
    // Remover o caractere '#' caso exista
    hex = hex.replace(/^#/, '');

    // Verificar se o formato da cor hexadecimal é válido (6 caracteres)
    if (hex.length !== 6) {
        throw new Error('O valor hexadecimal deve ter 6 caracteres.');
    }

    // Converter para valores RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Aumentar a luminosidade das cores
    r = Math.min(255, r + (255 - r) * percent / 100);
    g = Math.min(255, g + (255 - g) * percent / 100);
    b = Math.min(255, b + (255 - b) * percent / 100);

    // Converter de volta para hexadecimal e garantir que tenha 2 dígitos
    const newHex = `#${(1 << 24 | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
    
    return newHex;
}