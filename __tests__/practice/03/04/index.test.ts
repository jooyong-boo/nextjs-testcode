import { describe, expect, test } from "vitest";
import { add } from "../../../../app/practice/03/04";

describe("상한선이 100인 add 함수 테스트", () => {
    test("두개의 매개변수를 합한 값은 100이다.", () => {
        expect(add(50, 50)).toBe(100);
    });

    test("반환값의 상한선은 100이다.", () => {
        expect(add(70, 80)).toBe(100);
    });
});
