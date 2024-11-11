const deviceSizes = {
  mobile: `375px`,
  desktop: `1440px`,
};

const breakpoints = {
  mobile: `screen and (max-width:${deviceSizes.mobile})`,
  desktop: `screen and (max-width:${deviceSizes.desktop})`,
};

const primary_color = {
  blue: `hsl(246, 80%, 60%)`,
  lightRed_work: `hsl(15, 100%, 70%)`,
  softBlue_play: `hsl(195, 74%, 62%)`,
  lightRed_study: `hsl(348, 100%, 68%)`,
  limeGreen_excercise: `hsl(145, 58%, 55%)`,
  violet_social: `hsl(264, 64%, 52%)`,
  softOrange_selfCare: `hsl(43, 84%, 65%)`,
};

const netural_color = {
  very_dark_blue: `hsl(226, 43%, 10%)`,
  dark_blue: `hsl(235, 46%, 20%)`,
  desaturated_blue: `hsl(235, 45%, 61%)`,
  pale_blue: `hsl(236, 100%, 87%)`,
};

export const theme = {
  breakpoints,
  primary_color,
  netural_color,
};
