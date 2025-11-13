import { assertEquals } from "@std/assert";
import { swapValues, swapInArray } from "@lib";

Deno.test("Test swapping values", () => {
    let a = 10;
    let b = 20;
    [a, b] = swapValues(a, b)
    assertEquals(a, 20)
    assertEquals(b, 10)
})

Deno.test("Test swapping array values", () => {
    const arr = [1, 2, 3, 4, 5]
    const a = 1;
    const b = 2;
    swapInArray(arr, a, b)
    assertEquals(arr, [1, 3, 2, 4, 5])
})