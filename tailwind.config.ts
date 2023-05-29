import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        fontFamily: {
            body: 'Crimson Text'
        },
        fontSize: {
            sm: ['16px', '24px'],
            base: ['18px', '24px'],
            lg: ['22px', '32px'],
            xl: ['32px', '42px'],
            '2xl': ['36px', '48px'],
            '3xl': ['58px', '75px'],
            '4xl': ['105px', '124px']
        },
        spacing: {
            '0': '0rem',
            '8': '0.4444rem',
            '12': '0.6667rem',
            '16': '0.8889rem',
            '24': '1.3333rem',
            '32': '1.7778rem',
            '38': '2.1111rem',
            '40': '2.2222rem',
            '48': '2.6667rem',
            '56': '3.1111rem',
            '80': '4.4444rem',
            '120': '6.6667rem'
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        borderRadius: {
            DEFAULT: '2px',
            full: '9999px'
        },
        colors: {
            'primary-2': '#f3f1f4',
            'primary-1': '#dcd5de',
            'primary': '#8a7290',
            'primary+1': '#7c6782',
            'primary+2': '#6e5b73',
            'neutral-dark': '#29222b',
            'neutral-light': '#fff'
        },
    },
}