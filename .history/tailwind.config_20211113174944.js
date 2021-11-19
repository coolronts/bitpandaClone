module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        {
            rotate3d: (theme) => ({
                // default values
                // https://tailwindcss.com/docs/rotate
                ...theme('rotate'),
                // new values
                ...{
                    '-60': '-60deg',
                    '-50': '-50deg',
                    '-40': '-40deg',
                    '-35': '-35deg',
                    '-30': '-30deg',
                    '-25': '-25deg',
                    '-20': '-20deg',
                    '-15': '-15deg',
                    '-10': '-10deg',
                    10: '10deg',
                    15: '15deg',
                    20: '20deg',
                    25: '25deg',
                    30: '30deg',
                    35: '35deg',
                    40: '40deg',
                    50: '50deg',
                    60: '60deg',
                }
            }),
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@kamona/tailwindcss-perspective'),
    ],
};