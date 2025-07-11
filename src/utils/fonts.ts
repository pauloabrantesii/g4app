// Sistema de fontes do projeto
export const fonts = {
  // Roboto - Família principal
  roboto: {
    light: 'Roboto-Light',
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    extraBold: 'Roboto-ExtraBold',
    black: 'Roboto-Black',
  },
  
  // Fallback para sistemas que não suportam Roboto
  system: {
    light: 'System',
    regular: 'System',
    medium: 'System',
    bold: 'System',
    black: 'System',
  },
} as const;

// Função para obter a fonte com fallback
export const getFontFamily = (weight: keyof typeof fonts.roboto = 'regular') => {
  return fonts.roboto[weight];
};

// Pesos de fonte pré-definidos
export const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
  extraBold: '800',
  black: '900',
} as const; 