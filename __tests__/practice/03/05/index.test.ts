import { describe, expect, test } from "vitest";
import { add, RangeError } from "../../../../app/practice/03/05";

describe("사칙연산 예외 테스트", () => {
    test("매개변수에 0보다 작거나 100보다 큰 값을 입력하면 예외 발생", () => {
        const message = "0 ~ 100 사이의 값을 입력해주세요";

        expect(() => add(-10, 110)).toThrow(message);
        expect(() => add(-10, 110)).toThrow(RangeError);
        expect(() => add(10, 1111)).toThrow(message);
    });
});
