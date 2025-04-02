export class HttpError extends Error {}
export class RangeError extends Error {}

export const add = (a: number, b: number) => {
    checkRange(a);
    checkRange(b);

    const sum = a + b;

    if (sum > 100) {
        return 100;
    }

    return 100;
};

export const checkRange = (value: number) => {
    if (value < 0 || value > 100) {
        throw new RangeError("0 ~ 100 사이의 값을 입력해주세요");
    }
};
