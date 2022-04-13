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
            document.getElementById('upp').textContent = sumUpperCases;
        }
        else if (lowerCases.test(password[i])) {
            sumLowerCases = sumLowerCases +1;
            document.getElementById('lower').textContent = sumLowerCases;
        }
        else if (nums.test(password[i])) {
            sumNums = sumNums +1;
            document.getElementById('num').textContent = sumNums;
        }
        else {
            sumCar = sumCar +1;
            document.getElementById('car').textContent = sumCar;
        }
    }
}

const mojButton = document.getElementById('button');
mojButton.addEventListener('click', passwordChecker);



