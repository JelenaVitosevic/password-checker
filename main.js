function passwordChecker () {
    const password = document.getElementById('input').value;
    const upperCases = /[A-Z]/;
    const lowerCases = /[a-z]/;
    const nums = /[0-9]/;
    let sumUpperCases = 0;
    let sumLowerCases = 0;
    let sumNums = 0;
    let sumCar = 0;
    for (i=0; i < password.length; i++) {
        if (upperCases.test(password[i])) {
            sumUpperCases = sumUpperCases + 1;
        }
        else if (lowerCases.test(password[i])) {
            sumLowerCases = sumLowerCases +1;
        }
        else if (nums.test(password[i])) {
            sumNums = sumNums +1;
        }
        else {
            sumCar = sumCar +1;
        }
    }
    document.getElementById('upp').textContent = sumUpperCases;
    document.getElementById('lower').textContent = sumLowerCases;
    document.getElementById('num').textContent = sumNums;
    document.getElementById('car').textContent = sumCar;
}

const mojButton = document.getElementById('button');
mojButton.addEventListener('click', passwordChecker);



