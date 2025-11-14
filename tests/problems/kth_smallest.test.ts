import { findKthSmallestElement } from "@lib";
import { assertEquals } from "@std/assert";

Deno.test("findKthSmallestElement: basic", () => {
  const arr = [1, 5, 3, 6, 8, 4];
  const kthSmallest = findKthSmallestElement(arr, 2);
  assertEquals(kthSmallest, 3);
});
