export const swapInArray = <T>(arr: T[], i: number, j: number): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export const swapValues = <T>(a: T, b: T): [T, T] => {
  return [b, a];
};
