const mojButton = document.getElementById('button');

const fetchuj = async () => {
    const inputValue = document.getElementById('input').value;
    const dataToSend = {
        password: inputValue
    }
    const checkPassword = await fetch('http://localhost:3000/passwordChecker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });
    const content = await checkPassword.json();
  
    const col = document.getElementsByClassName('col');
    col[0].textContent = content.upp;
    col[1].textContent = content.low;
    col[2].textContent = content.num;
    col[3].textContent = content.car;
  }

mojButton.addEventListener('click', fetchuj);



