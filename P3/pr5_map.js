/**
 * Created by yahor.turets on 25.07.2017.
 */

function NewArrayCreator(func, array) {
    var newArr = array.map(func);
    return newArr;
}

function Sqad(a) {
    return a**2;
}

function StringInfo(a, i) {
    return `element ${i} = ${a}`;
}