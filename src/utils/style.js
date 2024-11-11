const deviceSizes = {
  mobile: `375px`,
  desktop: `1440px`,
};

const breakpoints = {
  mobile: `screen and (max-width:${deviceSizes.mobile})`,
  desktop: `screen and (max-width:${deviceSizes.desktop})`,
};

const primary_color = {
  Work: `hsl(15, 100%, 70%)`,
  Play: `hsl(195, 74%, 62%)`,
  Study: `hsl(348, 100%, 68%)`,
  Excercise: `hsl(145, 58%, 55%)`,
  Social: `hsl(264, 64%, 52%)`,
  SelfCare: `hsl(43, 84%, 65%)`,
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
