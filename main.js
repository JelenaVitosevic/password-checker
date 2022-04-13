function passwordChecker () {
    const unetaVrednost = document.getElementById('input').value;
    const upperCases = /[A-Z]/;
    const lowerCases = /[a-z]/;
    const nums = /[0-9]/;
    const car = /[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/;
    let sumUpperCases = 0;
    let sumLowerCases = 0;
    let sumNums = 0;
    let sumCar = 0;
    for (i=0; i < unetaVrednost.length; i++) {
        
        if (upperCases.test(unetaVrednost[i])) {
            sumUpperCases = sumUpperCases + 1;
            document.getElementById('upp').textContent = sumUpperCases;
        }
        else if (lowerCases.test(unetaVrednost[i])) {
            sumLowerCases = sumLowerCases +1;
            document.getElementById('lower').textContent = sumLowerCases;
        }
        else if (nums.test(unetaVrednost[i])) {
            sumNums = sumNums +1;
            document.getElementById('num').textContent = sumNums;
        }
        else if (car.test(unetaVrednost[i])) {
            sumCar = sumCar +1;
            document.getElementById('car').textContent = sumCar;
        }
    }
}

const mojButton = document.getElementById('button');
mojButton.addEventListener('click', passwordChecker);



