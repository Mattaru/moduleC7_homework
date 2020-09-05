export function textReverse(str) {
    if (typeof str === 'string')
        return str.split('').reverse().join('');
    else
        return 'Entered not a string';
}
