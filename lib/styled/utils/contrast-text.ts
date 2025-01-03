export default (hex: string): string => {
    // Remover o caractere '#' caso exista
    hex = hex.replace(/^#/, '');

    // Converter para valores RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Normalizar os valores RGB para o intervalo [0, 1]
    r /= 255;
    g /= 255;
    b /= 255;

    // Aplicar a fórmula de luminância relativa
    // A fórmula usada considera um valor de correção para a percepção de luminosidade em diferentes canais RGB
    const a = [r, g, b].map(c => {
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    const luminance = 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];

    // Se a luminância for maior que 0.5, a cor de fundo é clara e a fonte deve ser preta, caso contrário, branca
    return luminance > 0.5 ? 'black' : 'white';
}