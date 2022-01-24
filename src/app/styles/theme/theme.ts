export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--background-primary': '#E5E5E5',
    '--background-secondary': '#BABABA',
    '--spinner-primary': '#2C2C2C',

    '--border-color': '#7E7E7E',

    '--text-primary': '#0D76B2',
    '--text-secondary': '#636363',
    '--text-tertiary': '#7E7E7E',
    '--text-quaternary': '#6E6E6E',

    '--highlight-color': '#6E6E6E',
    '--smooth-color': '#636363',

    '--error': '#800600',

    '--secondary-button': '#7E7E7E',

    '--togglebutton-color': '#6E6E6E',

    '--tableline-color': '#6E6E6E',

    '--shadow-color': '#7E7E7E',

    '--scroll-color-track': '#848282',

    '--scroll-button-color': '#848282',

    '--scroll-thumb-color': '#E5E5E5',
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--background-primary': '#393939',
    '--background-secondary': '#2C2C2C',
    
    '--spinner-primary': '#E5E5E5',

    '--border-color': '#7E7E7E',

    '--text-primary': '#31A2E3',
    '--text-secondary': '#F0F0F0',
    '--text-tertiary': '#7E7E7E',
    '--text-quaternary': '#E5E5E5',

    '--smooth-color': '#D2D2D2',
    '--highlight-color': '#F0F0F0',

    '--error': '#800600',

    '--secondary-button': '#FFFFFF',

    '--togglebutton-color': '#2C2C2C',

    '--tableline-color': '#B6B6B6',

    '--shadow-color': 'black',

    '--scroll-color-track': '#2C2C2C',

    '--scroll-button-color': '#7E7E7E',

    '--scroll-thumb-color': '#7E7E7E',
  }
};
