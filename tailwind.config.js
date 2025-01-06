/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
colors: {
  theme1: {
    background: {
      main: 'hsl(222, 26%, 31%)',
      toggle: 'hsl(223, 31%, 20%)',
      screen: 'hsl(224, 36%, 15%)',
    },
    keys: {
      background: {
        primary: 'hsl(225, 21%, 49%)',
        secondary: 'hsl(6, 63%, 50%)',
        tertiary: 'hsl(30, 25%, 89%)',
      },
      shadow: {
        primary: 'hsl(224, 28%, 35%)',
        secondary: 'hsl(6, 70%, 34%)',
        tertiary: 'hsl(28, 16%, 65%)',
      },
    },
    text: {
      primary: 'hsl(221, 14%, 31%)',
      secondary: 'hsl(0, 0%, 100%)',
    },
  },
  theme2: {
    background: {
      main: 'hsl(0, 0%, 90%)',
      toggle: 'hsl(0, 5%, 81%)',
      screen: 'hsl(0, 0%, 93%)',
    },
    keys: {
      background: {
        primary: 'hsl(185, 42%, 37%)',
        secondary: 'hsl(25, 98%, 40%)',
        tertiary: 'hsl(45, 7%, 89%)',
      },
      shadow: {
        primary: 'hsl(185, 58%, 25%)',
        secondary: 'hsl(25, 99%, 27%)',
        tertiary: 'hsl(35, 11%, 61%)',
      },
    },
    text: {
      primary: 'hsl(60, 10%, 19%)',
      secondary: 'hsl(0, 0%, 100%)',
    },
  },
  theme3: {
    background: {
      main: 'hsl(268, 75%, 9%)',
      toggle: 'hsl(268, 71%, 12%)',
      screen: 'hsl(268, 71%, 12%)',
    },
    keys: {
      background: {
        primary: 'hsl(281, 89%, 26%)',
        secondary: 'hsl(176, 100%, 44%)',
        tertiary: 'hsl(268, 47%, 21%)',
      },
      shadow: {
        primary: 'hsl(285, 91%, 52%)',
        secondary: 'hsl(177, 92%, 70%)',
        tertiary: 'hsl(290, 70%, 36%)',
      },
    },
    text: {
      primary: 'hsl(52, 100%, 62%)',
      secondary: 'hsl(198, 20%, 13%)',
      tertiary: 'hsl(0, 0%, 100%)',
    },
  },
},

    },
  },
  plugins: [],
}

