import { expect, test, vi } from "vitest";
import { greet, sayGoodBye } from "../../../../app/practice/04/02/greet";

vi.mock("../../../../app/practice/04/02/greet", async () => {
    const actual = await vi.importActual(
        "../../../../app/practice/04/02/greet"
    );
    return {
        ...actual,
        sayGoodBye: (name: string) => `Good bye, ${name}.`,
    };
});

test("인사말이 구현되어 있지 않다(원래 구현대로)", () => {
    expect(greet("Taro")).toBe("Hello! Taro.");
});

test("작년 인사를 반환한다(원래 구현과 다르게)", () => {
    const message = `${sayGoodBye("Taro")} See you.`;
    expect(message).toBe("Good bye, Taro. See you.");
});
