import { describe, expect, test } from "vitest";
import { au } from "vitest/dist/reporters-OH1c16Kq.js";

test("참인 진리값 검증", () => {
    expect(1).toBeTruthy();
    expect("1").toBeTruthy();
    expect(0).not.toBeTruthy();
});

test("거짓인 진리값 검증", () => {
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(1).not.toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
});

describe("수치 검증", () => {
    const value = 2 + 2;
    test("검증값이 기댓값과 일치한다", () => {
        expect(value).toBe(4);
        expect(value).toEqual(4);
    });

    test("검증값이 기댓값보다 크다", () => {
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4);
    });

    test("검증값이 기댓값보다 작다", () => {
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4);
    });
});

test("소수 계산은 정확하지 않다", () => {
    expect(0.1 + 0.2).not.toBe(0.3);
});

test("소수 계산시 지정한 자릿수까지 비교한다", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 13);
    expect(0.1 + 0.2).not.toBeCloseTo(0.3, 16);
});

describe("문자열 검증", () => {
    const str = "Hello World";

    test("검증값이 기댓값과 일치한다", () => {
        expect(str).toBe("Hello World");
        expect(str).toEqual("Hello World");
    });

    describe("문자 포함 여부 테스트", () => {
        test("toContain", () => {
            expect(str).toContain("Hello");
            expect(str).toContain("World");
            expect(str).not.toContain("Bye");
        });

        test("toMatch", () => {
            expect(str).toMatch(/World/);
            expect(str).not.toMatch(/Bye/);
        });

        test("toHaveLength", () => {
            expect(str).toHaveLength(11);
            expect(str).not.toHaveLength(12);
        });
    });
});

describe("객체를 포함한 문자열 검증", () => {
    const str = "hello world";

    const obj = {
        status: 200,
        message: str,
    };

    test("문자 포함 여부", () => {
        expect(obj).toEqual({
            status: 200,
            message: expect.stringContaining("world"),
        });
    });

    test("문자 일치 여부", () => {
        expect(obj).toEqual({
            status: 200,
            message: expect.stringMatching(/world/),
        });
    });
});

describe("배열 검증", () => {
    const tags = ["vitest", "jest", "storybook", "playwright"];

    test("배열에 문자 포함 여부", () => {
        expect(tags).toContain("vitest");
    });

    test("배열의 길이가 4인지", () => {
        expect(tags).toHaveLength(4);
    });
});

describe("배열에 특정 객체 포함 여부", () => {
    const article1 = { author: "taro", title: "testing next.js" };
    const article2 = { author: "jiro", title: "storybook play" };

    const articles = [article1, article2];

    test("특정 객체 포함 여부 테스트", () => {
        expect(articles).toContainEqual(article1);
    });

    test("객체가 전부 포함되어 있는지 테스트", () => {
        expect(articles).toEqual(expect.arrayContaining([article2, article1]));
    });
});

describe("객체 검증", () => {
    const author = { name: "satoshi", age: 30 };

    test("부분적으로 객체 일치하는지", () => {
        expect(author).toMatchObject({ name: "satoshi", age: 30 });
        expect(author).toMatchObject({ name: "satoshi" });
        expect(author).toMatchObject({ age: 30 });
        expect(author).not.toMatchObject({ age: 1111 });
    });

    test("객체에 특정 키값이 있는지 여부 검증", () => {
        expect(author).toHaveProperty("name");
        expect(author).toHaveProperty("age");
        expect(author).not.toHaveProperty("gender");
    });
});

describe("중첩 객체 테스트", () => {
    const article = {
        title: "bitcoin 1000k",
        author: { name: "satoshi", age: 30 },
    };

    test("객체 포함 여부 테스트", () => {
        expect(article).toEqual({
            title: "bitcoin 1000k",
            author: expect.objectContaining({ name: "satoshi", age: 30 }),
        });

        expect(article).toEqual({
            title: "bitcoin 1000k",
            author: expect.not.objectContaining({ gender: "man" }),
        });
    });
});
