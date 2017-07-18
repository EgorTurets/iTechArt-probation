/**
 * Created by yahor.turets on 14.07.2017.
 */
var ArrayProcessing = {

    getMaxSubSum: function (stringWithNumberArray) {
        var numberArray = ArrayProcessing.ToNumberArrConverter(stringWithNumberArray);
        if (numberArray === false) {
            return 'Invalid input!'
        }
        var maxSum = 0;     //зданичение для хранения максимальной суммы
        var sum = 0;        //знач. для посчета текущей суммы

        for (var i = 0; i < array.length; i++){

        }
    },

    Search: function (stringWithNumberArray) {
        var numbersArray = ArrayProcessing.ToNumberArrConverter(stringWithNumberArray);
        if (numbersArray === false) {
            return 'Invalid input!'
        }
        numbersArray.sort(function (a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            else return 0;
        });

        var median;
        if (numbersArray.length % 2 === 0) {
            var lowerMedian, upperMedian;
            lowerMedian = numbersArray[numbersArray.length / 2 - 1];
            upperMedian = numbersArray[numbersArray.length / 2];
            median = (lowerMedian + upperMedian) / 2;
        } else {
            median = numbersArray[Math.floor(numbersArray.length / 2)];
        }

        var minStr = 'min: ' + numbersArray[0];
        var maxStr = 'max: ' + numbersArray[numbersArray.length - 1];
        var medianStr = 'median ' + median;
        return [minStr, maxStr, medianStr];
    },

    GetMaxGrowingArray: function (stringWithNumberArray) {
        var numbersArray = ArrayProcessing.ToNumberArrConverter(stringWithNumberArray);
        if (numbersArray === false) {
            return 'Invalid input!'
        }
        var minIndex, maxIndex = null;
        var currentMinIndex, currentMaxIndex = null;
        var maxLength = 0;

        for (i = 1; i < numbersArray.length; i++) {
            if (numbersArray[i] > numbersArray[i-1]) {
                if (currentMinIndex == null) {
                    currentMinIndex = i-1;
                    currentMaxIndex = i;
                }
                else {currentMaxIndex = i;}
            }
            else {
                if (maxLength < currentMaxIndex - currentMinIndex + 1) {
                    maxLength = currentMaxIndex - currentMinIndex + 1;
                    minIndex = currentMinIndex;
                    maxIndex = currentMaxIndex;
                }
                currentMinIndex = null;
                currentMaxIndex = null;
            }
        }
        if (maxLength < currentMaxIndex - currentMinIndex + 1) {
            minIndex = currentMinIndex;
            maxIndex = currentMaxIndex;
        }
        return numbersArray.slice(minIndex, maxIndex+1);
    },

    ToNumberArrConverter: function (stringWithNumberArray) {
        var array = stringWithNumberArray.split(',');       //получен массив элементов
        var arrayWihtNumbers = [];
        for (i = 0; i < array.length; i++) {
            if (!isNaN(parseFloat(array[i])) && isFinite(array[i])) {
                arrayWihtNumbers[i] = +array[i];            //если можно, преобразовать в число
            }
        else { return false; }                              //иначе вернуть false
        }
        return arrayWihtNumbers;
    }
};