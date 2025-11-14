import { swapInArray } from "@utils";

/**
 * Naive Partition
 * @param arr
 * @param low
 * @param high
 * @param p
 * @returns
 */
export const naivePartition = (
  arr: number[],
  low: number,
  high: number,
  p: number,
): void => {
  const temp = [];
  for (let i = low; i < high + 1; i++) {
    if (arr[i] <= arr[p] && i != p) {
      temp.push(arr[i]);
    }
  }
  temp.push(arr[p]);
  for (let i = low; i < high + 1; i++) {
    if (arr[i] > arr[p] && i != p) {
      temp.push(arr[i]);
    }
  }
  for (let i = low; i < high + 1; i++) {
    arr[i] = temp[i];
  }
};
/**
 * Lomuto Partition
 * @param arr
 * @param low
 * @param high
 * @param p
 * @returns
 * The Lomuto partition guarantees that the left side of the pivot is
 * smaller and the right side of the element is greater than the pivot
 * element but it also guarantees that the pivot element moved to its
 * sorted position in the array
 */
export const lomutoPartition = (
  arr: number[],
  low: number,
  high: number,
  p?: number,
): number => {
  // console.info("before: ", arr)
  if (p && p != high) {
    swapInArray(arr, p, high);
  }
  const pivot = arr[high]; // Pivot is always the last element

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swapInArray(arr, i, j);
    }
  }
  swapInArray(arr, i + 1, high);
  // console.info("after: ", arr)
  return i + 1;
};

/**
 * Hoares Partition
 * @param arr
 * @param low
 * @param high
 * @param p
 * @returns
 * The Hoare's partition algorithm does not guarante that the pivot
 * element is sorted in the final array. It just makes sure that the
 * left side is smaller and right side is greater than the pivot element.
 */
export const hoaresPartition = (
  arr: number[],
  low: number,
  high: number,
): number => {
  // console.info("before: ", arr)
  const pivot = arr[low];
  let i = low - 1;
  let j = high + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i >= j) {
      // console.info("after: ", arr)
      return j;
    }
    swapInArray(arr, i, j);
  }
};

export const quickSortLomuto = (
  arr: number[],
  low: number,
  high: number,
): void => {
  if (low >= high) return;
  const p = lomutoPartition(arr, low, high);
  // console.info("Partition Index: ", p)
  quickSortLomuto(arr, low, p - 1);
  quickSortLomuto(arr, p + 1, high);
};

/**
 * @param arr
 * @param low
 * @param high
 * @returns
 * Note - The Lomuto partiton keeps the pivot at sorted position while the
 * Hoare partition just fixes the pivot without guaranting its at the sorted
 * position and thats the reason we again pass the sorted index as well in the
 * quick sort with hoares so that it guarantees that it reached the sorted position.
 */
export const quickSortHoares = (
  arr: number[],
  low: number,
  high: number,
): void => {
  if (low >= high) return;
  const p = hoaresPartition(arr, low, high);
  // console.info("Partition Index: ", p)
  quickSortLomuto(arr, low, p);
  quickSortLomuto(arr, p + 1, high);
};
