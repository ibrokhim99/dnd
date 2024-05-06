import useWindowSize from "./use-window-size";

export const breakpoints = [360, 768, 1080, 1920];

export function useBreakpoint(
  breakpointStart: number,
  breakpointEnd: number
): boolean | undefined {
  const windowSize = useWindowSize();
  if (!windowSize.width) {
    return undefined;
  }

  return (
    breakpointStart <= windowSize.width && breakpointEnd > windowSize.width
  );
}

export function useIsMobile(): boolean | undefined {
  return useBreakpoint(0, breakpoints[1]);
}

export function useIsTablet(): boolean | undefined {
  return useBreakpoint(breakpoints[1], breakpoints[2]);
}

export function useIsDesktop(): boolean | undefined {
  return useBreakpoint(breakpoints[2], Infinity);
}
