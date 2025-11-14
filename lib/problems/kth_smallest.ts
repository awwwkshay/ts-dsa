import { lomutoPartition } from "@lib";

export const findKthSmallestElement = (arr: number[], k: number) => {
  const pivotIndex = lomutoPartition(arr, 0, arr.length - 1, k - 1);
  return arr[pivotIndex];
};
