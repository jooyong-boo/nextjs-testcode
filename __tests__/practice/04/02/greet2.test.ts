import { expect, test, vitest } from "vitest";
import { greet } from "../../../../app/practice/04/02/greet";

vitest.mock("../../../../app/practice/04/02/greet");

test("인사말을 반환하지 않는다.원래 구현과 다르게)", () => {
    expect(greet("Taro")).toBe(undefined);
});
