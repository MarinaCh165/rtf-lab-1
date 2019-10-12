/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (array.every(item => typeof item != 'number'))
        return null;
    let arrayNumber = 0;
    arrayNumber = Number(arrayNumber.join('')) + number;
    return arrayNumber.split('');
}

module.exports = {
    addNumber
};