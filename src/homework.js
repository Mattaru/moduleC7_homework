export function findDegreeOfNumber(x, n) {
    let result = x;

    if (n === 0)
        return 'Degree is incorrect';
    else if (x === 0)
        return 0;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

