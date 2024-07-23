/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'input-default': '#CBB6E5',
                'input-active': '#761BE4',
                'input-error': '#ED4545',
                'input-error-bg': '#FEECEC',
                'btn-default': '#761BE4',
                'btn-inactive': '#CBB6E5',
                'btn-hover': '#6A19CD',
                'input-text-color': '#000853',
                'color-gray': '#898DA9',
                'color-purple': '#761BE4'
            },
            spacing: {
                'input-text': '18px 16px'
            }
        }
    },
    plugins: []
};
