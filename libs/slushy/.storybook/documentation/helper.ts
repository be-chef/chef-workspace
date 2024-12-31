export const getCSSVariable = (variableName: string): string | null => {
    const styles = getComputedStyle(document.documentElement);
    return styles.getPropertyValue(variableName).trim();
  };
  