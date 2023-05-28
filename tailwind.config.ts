import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

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
            '16': '0.8889rem',
            '24': '1.3333rem',
            '40': '2.2222rem',
            '56': '3.1111rem',
        },
        borderRadius: {
            DEFAULT: '2px',
        },
        extend: {
            colors: {
                'primary-2': '#f3f1f4',
                'primary-1': '#dcd5de',
                'primary': '#8a7290',
                'primary+1': '#7c6782',
                'primary+2': '#6e5b73',
                'neutral-dark': '#29222b',
                'neutral-light': '#fff'
            }
        }
    }
}