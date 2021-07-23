export const fetchRwdProps = ({
  state,
  desktop = "unset",
  tablet = "unset",
  mobile = "unset",
}) => {
  if (state.isDesktop) {
    return desktop;
  } else if (state.isTablet) {
    return tablet;
  } else if (state.isMobile) {
    return mobile;
  }
};
