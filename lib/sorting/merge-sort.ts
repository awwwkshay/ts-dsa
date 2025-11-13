export const mergeSort = (arr: number[], low: number, high: number) => {
    if (low >= high) return;
    const mid = low + ((high - low) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    return mergeSortedSubArrays(arr, low, mid, high);
}

export const mergeSortedSubArrays = (arr: number[], low: number, mid: number, high: number): number[] => {
    const left = arr.slice(low, mid + 1);
    const right = arr.slice(mid + 1, high + 1);
    let k = low, i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }
    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
    return arr;
}