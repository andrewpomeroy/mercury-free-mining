const theme = {
  colors: {
    headerBG: 'white',
    gold: '#ba9b60',
    text: '#444',
    lightText: 'white',
    white: 'white',
  },
  layout: {
    centerColumn: {
      maxWidth: 1200,
      outerGutter: 20,
    },
  },
  spacing: {
    xxsmall: 4,
    xsmall: 8,
    smaller: 12,
    small: 16,
    medium: 20,
    large: 24,
    larger: 28,
    xlarge: 32,
    xxlarge: 40,
  },
  fontSizes: {
    0: 14,
    1: 17,
    2: 21,
    3: 24,
    4: 28,
    5: 32,
    6: 38,
    7: 42,
    '-3': 9,
    '-2': 10,
    '-1': 12,
  },
  lineHeights: {
    body: 1.42,
    heading: 1.35,
  },
  fontFamilies: {
    heading: 'Playfair Display',
    body: 'Sharp Sans',
  },
};

theme.colors.primary = theme.colors.gold;
theme.colors.link = theme.colors.gold;
theme.colors.heading = theme.colors.text;

theme.fontSizes = {
  ...theme.fontSizes,
  body: theme.fontSizes[0],
  h1: theme.fontSizes[7],
  h2: theme.fontSizes[5],
  h3: theme.fontSizes[4],
  h4: theme.fontSizes[2],
  h5: theme.fontSizes[1],
  h6: theme.fontSizes[0],
};

export default theme;
