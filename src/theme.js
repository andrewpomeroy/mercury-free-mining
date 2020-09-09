const theme = {
  colors: {
    headerBG: 'white',
    gold: '#ba9b60',
    text: '#444',
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
    xxlarge: 40
  },
  fontSizes: {
    "-3": 9,
    "-2": 10,
    "-1": 12,
    0: 14,
    1: 17,
    2: 21,
    3: 24,
    4: 28,
    5: 32,
    6: 38,
    7: 42
  },
  fontFamilies: {
    heading: "Playfair Display",
    body: "Sharp Sans",
  }
};

theme.fontSizes.body = theme.fontSizes[0];

theme.colors.link = theme.colors.gold;

export default theme;