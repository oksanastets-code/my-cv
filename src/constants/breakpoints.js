export const size = {
  mobile: '320px',
  maxMobile: '767px',
  tablet: '768px',
  maxTablet: '1279px',
  desktop: '1280px',
};

export const breakpoints = {
  mobile: `(min-width: ${size.mobile})`,
  maxMobile: `(max-width: ${size.maxMobile})`,
  onlyTablet: `(min-width: ${size.tablet}) and (max-width: ${size.maxTablet})`,
  tablet: `(min-width: ${size.tablet})`,
  maxTablet: `(max-width: ${size.maxTablet})`,
  desktop: `(min-width: ${size.desktop})`,
};