import { assertEquals } from "@std/assert";
import { hoaresPartition, lomutoPartition, naivePartition, quickSortHoares, quickSortLomuto } from "@lib";

Deno.test("naivePartition: GFG1: basic", () => {
    const arr = [-3, -1, 2, -2, 0, 3];
    const pivot = 2;
    naivePartition(arr, 0, arr.length - 1, pivot);
    assertEquals(arr, [-3, -1, -2, 0, 2, 3]);
})

Deno.test("lomutoPartition: GFG1: basic", () => {
    const arr = [10, 80, 30, 90, 40, 50, 70]
    const newPivotIndex = lomutoPartition(arr, 0, arr.length - 1)
    assertEquals(newPivotIndex, 4)
})

Deno.test("lomutoPartition: GFG2: should handle last element as the smallest", () => {
    const arr = [70, 60, 80, 40, 30]
    const newPivotIndex = lomutoPartition(arr, 0, arr.length - 1)
    assertEquals(newPivotIndex, 0)
})

Deno.test("lomutoPartition: GFG3: should handle last element as the largest ", () => {
    const arr = [30, 40, 20, 50, 80]
    const newPivotIndex = lomutoPartition(arr, 0, arr.length - 1)
    assertEquals(newPivotIndex, 4)
})

Deno.test("hoaresPartition: GFG1: basic", () => {
    const arr = [5, 3, 8, 4, 2, 7, 1, 10]
    const newPivotIndex = hoaresPartition(arr, 0, arr.length - 1)
    assertEquals(newPivotIndex, 3)
})

Deno.test("hoaresPartition: GFG2: should handle first element as the smallest ", () => {
    const arr = [20, 40, 30, 50, 80]
    const newPivotIndex = hoaresPartition(arr, 0, arr.length - 1)
    assertEquals(newPivotIndex, 0)
})

Deno.test("hoaresPartition: GFG3: should handle first element as the largest", () => {
    const arr = [80, 70, 60, 40, 30]
    const newPivotIndex = hoaresPartition(arr, 0, arr.length - 1)
    assertEquals(newPivotIndex, arr.length - 2)
})

Deno.test("quickSortLomuto: GFG: basic", () => {
    const arr = [8, 4, 7, 9, 3, 10, 5]
    quickSortLomuto(arr, 0, arr.length - 1)
    assertEquals(arr, [3, 4, 5, 7, 8, 9, 10])
})

Deno.test("quickSortHoares: GFG: basic", () => {
    const arr = [8, 4, 7, 9, 3, 10, 5]
    quickSortHoares(arr, 0, arr.length - 1)
    assertEquals(arr, [3, 4, 5, 7, 8, 9, 10])
})
