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
            sumUpperCases++;
        }
        else if (lowerCases.test(password[i])) {
            sumLowerCases++;
        }
        else if (nums.test(password[i])) {
            sumNums++;
        }
        else {
            sumCar++;
        }
    }
    const col = document.getElementsByClassName('col');
    col[0].textContent = sumUpperCases;
    col[1].textContent = sumLowerCases;
    col[2].textContent = sumNums;
    col[3].textContent = sumCar;
}

const mojButton = document.getElementById('button');
mojButton.addEventListener('click', passwordChecker);



