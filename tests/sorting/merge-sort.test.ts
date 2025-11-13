import { assertEquals } from "@std/assert";
import { mergeSort, mergeSortedSubArrays } from "@lib";

Deno.test('mergeSortedSubArrays: should merge two sorted subarrays of equal length', () => {
    const arr = [1, 3, 5, 2, 4, 6];
    const low = 0;
    const mid = 2;
    const high = 5;
    assertEquals(mergeSortedSubArrays(arr, low, mid, high), [1, 2, 3, 4, 5, 6]);
});

Deno.test('mergeSortedSubArrays: should merge when first subarray is longer', () => {
    const arr = [1, 2, 3, 7, 4, 5];
    const low = 0;
    const mid = 3;
    const high = 5;
    assertEquals(mergeSortedSubArrays(arr, low, mid, high), [1, 2, 3, 4, 5, 7]);
});

Deno.test('mergeSortedSubArrays: should merge when second subarray is longer', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const low = 0;
    const mid = 1;
    const high = 5;
    assertEquals(mergeSortedSubArrays(arr, low, mid, high), [1, 2, 3, 4, 5, 6]);
});

Deno.test('mergeSortedSubArrays: should handle empty first subarray', () => {
    const arr = [1, 2, 3];
    const low = 0;
    const mid = -1;
    const high = 2;
    assertEquals(mergeSortedSubArrays(arr, low, mid, high), [1, 2, 3]);
});

Deno.test('mergeSortedSubArrays: should handle empty second subarray', () => {
    const arr = [1, 2, 3];
    const low = 0;
    const mid = 2;
    const high = 2;
    assertEquals(mergeSortedSubArrays(arr, low, mid, high), [1, 2, 3]);
});

Deno.test('mergeSortedSubArrays: should handle both subarrays empty', () => {
    const arr: number[] = [];
    const low = 0;
    const mid = -1;
    const high = -1;
    assertEquals(mergeSortedSubArrays(arr, low, mid, high), []);
});

Deno.test('mergeSortedSubArrays: should handle subarrays with duplicate values', () => {
    const arr = [1, 2, 2, 2, 3];
    const low = 0;
    const mid = 2;
    const high = 4;
    assertEquals(mergeSortedSubArrays(arr, low, mid, high), [1, 2, 2, 2, 3]);
});

Deno.test('mergeSortedSubArrays: should handle negative numbers', () => {
    const arr = [-3, -1, 2, -2, 0, 3];
    const low = 0;
    const mid = 2;
    const high = 5;
    assertEquals(mergeSortedSubArrays(arr, low, mid, high), [-3, -2, -1, 0, 2, 3]);
});

Deno.test('mergeSortedSubArrays: GFG1', () => {
    const arr = [10, 15, 20, 5, 6, 6, 30];
    const low = 0;
    const mid = 2;
    const high = 6;
    assertEquals(mergeSortedSubArrays(arr, low, mid, high), [5, 6, 6, 10, 15, 20, 30]);
});

Deno.test('mergeSortedSubArrays: GFG2', () => {
    const arr = [10, 15, 20, 40, 8, 11, 55];
    const low = 0;
    const mid = 3;
    const high = arr.length - 1;
    assertEquals(mergeSortedSubArrays(arr, low, mid, high), [8, 10, 11, 15, 20, 40, 55]);
})

Deno.test('mergeSort: GFG1', () => {
    const arr = [10, 5, 30, 15, 7];
    const expected = [5, 7, 10, 15, 30];
    mergeSort(arr, 0, arr.length - 1);
    assertEquals(arr, expected);
});

Deno.test('mergeSort: already sorted', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    mergeSort(arr, 0, arr.length - 1);
    assertEquals(arr, expected);
});

Deno.test('mergeSort: reverse order', () => {
    const arr = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    mergeSort(arr, 0, arr.length - 1);
    assertEquals(arr, expected);
});

Deno.test('mergeSort: single element', () => {
    const arr = [42];
    const expected = [42];
    mergeSort(arr, 0, arr.length - 1);
    assertEquals(arr, expected);
});

Deno.test('mergeSort: empty array', () => {
    const arr: number[] = [];
    const expected: number[] = [];
    mergeSort(arr, 0, arr.length - 1);
    assertEquals(arr, expected);
});

Deno.test('mergeSort: with duplicates', () => {
    const arr = [3, 1, 2, 3, 1];
    const expected = [1, 1, 2, 3, 3];
    mergeSort(arr, 0, arr.length - 1);
    assertEquals(arr, expected);
});