import { describe, expect, test } from "vitest";
import { add, sub } from "../../../../app/practice/03/02";

describe("사칙 연산", () => {
    describe("add", () => {
        test("1 + 1은 2", () => {
            expect(add(1, 2)).toBe(3);
        });

        test("2 + 2는 4", () => {
            expect(add(2, 2)).toBe(4);
        });
    });

    describe("sub", () => {
        test("1 - 1은 0", () => {
            expect(sub(1, 1)).toBe(0);
        });

        test("2 - 4는 -2", () => {
            expect(sub(2, 4)).toBe(-2);
        });
    });
});
