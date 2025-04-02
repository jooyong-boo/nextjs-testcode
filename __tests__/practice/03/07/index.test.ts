import { describe, expect, test } from "vitest";
import { timeout, wait } from "../../../../app/practice/03/07";

describe("비동기 처리 테스트", () => {
    test("지정 시간 뒤 경과 시관과 함께 promise resolve", () => {
        return expect(wait(50)).resolves.toBe(50);
    });

    test("지정 시간 뒤 경과 시관과 함께 promise resolve", async () => {
        await expect(wait(50)).resolves.toBe(50);
    });

    test("지정 시간 뒤 경과 시관과 함께 promise resolve", async () => {
        expect(await wait(50)).toBe(50);
    });

    describe("reject 테스트", () => {
        test("지정 시간 뒤 경과 시간과 함께 reject", () => {
            return expect(timeout(50)).rejects.toBe(50);
        });
        test("지정 시간 뒤 경과 시간과 함께 reject", async () => {
            await expect(timeout(50)).rejects.toBe(50);
        });

        // TODO 이거 왜 오류나는지 확인 필요
        // test("지정 시간 뒤 경과 시간과 함께 reject", async () => {
        //     expect(await timeout(50)).toBe(50);
        // });

        test("지정 시간 뒤 경과 시간과 함께 reject", async () => {
            expect.assertions(1);

            try {
                await timeout(50);
            } catch (err) {
                expect(err).toBe(50);
            }
        });
    });
});
