// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';


const buttonNumberArr = [];
for (let i = 1; i <= 9; i++) {
    buttonNumberArr.push(i);
}
console.log(buttonNumberArr)
const getButtonJSX = (number) => `BasicButton id=${number} text=${number}`

console.log(buttonNumberArr.map(getButtonJSX))

function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}
console.log(range(1, 9))