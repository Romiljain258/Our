'use strict';

const romil = [
    {
        number: 1,
        type: 'deposit',
        time: '1/06/2021 1:34',
        amount: 9000,
    },
    {
        number: 2,
        type: 'withdraw',
        time: '22/06/2021 2:16',
        amount: 2000,
    },
    {
        number: 3,
        type: 'deposit',
        time: '23/06/2021 5:35',
        amount: 20000,
    },
    {
        number: 4,
        type: 'withdraw',
        time: '9/07/2021 9:30',
        amount: 1000,
    },
    {
        number: 5,
        type: 'withdraw',
        time: '15/07/2021 9:30',
        amount: 5000,
    },
    {
        number: 6,
        type: 'deposit',
        time: '24/07/2021 9:30',
        amount: 5000,
    },
];

const john = [
    {
        number: 1,
        type: 'deposit',
        time: '1/06/2021 1:34',
        amount: 9000,
    },
    {
        number: 2,
        type: 'withdraw',
        time: '22/06/2021 2:16',
        amount: 500,
    },
    {
        number: 3,
        type: 'withdraw',
        time: '23/06/2021 5:35',
        amount: 1000,
    },
    {
        number: 4,
        type: 'withdraw',
        time: '9/07/2021 9:30',
        amount: 5000,
    },
    {
        number: 5,
        type: 'deposit',
        time: '15/07/2021 10:30',
        amount: 10000,
    },
    {
        number: 6,
        type: 'deposit',
        time: '24/07/2021 1:30',
        amount: 4000,
    },
];

const david = [
    {
        number: 1,
        type: 'deposit',
        time: '1/06/2021 1:34',
        amount: 9000,
    },
    {
        number: 2,
        type: 'withdraw',
        time: '22/06/2021 2:16',
        amount: 8000,
    },
    {
        number: 3,
        type: 'deposit',
        time: '23/06/2021 5:35',
        amount: 15000,
    },
    {
        number: 4,
        type: 'withdraw',
        time: '9/07/2021 9:30',
        amount: 11000,
    },
    {
        number: 5,
        type: 'withdraw',
        time: '15/07/2021 9:30',
        amount: 1000,
    },
    {
        number: 6,
        type: 'deposit',
        time: '24/07/2021 9:30',
        amount: 8000,
    },
];

const kath = [
    {
        number: 1,
        type: 'deposit',
        time: '1/06/2021 1:34',
        amount: 12000,
    },
    {
        number: 2,
        type: 'withdraw',
        time: '22/06/2021 2:16',
        amount: 2000,
    },
    {
        number: 3,
        type: 'deposit',
        time: '23/06/2021 5:35',
        amount: 10000,
    },
    {
        number: 4,
        type: 'withdraw',
        time: '9/07/2021 9:30',
        amount: 12000,
    },
    {
        number: 5,
        type: 'withdraw',
        time: '15/07/2021 9:30',
        amount: 500,
    },
    {
        number: 6,
        type: 'deposit',
        time: '24/07/2021 9:30',
        amount: 9000,
    },
];

let usersData = [romil, john, david, kath];
let usersNameData = ['romil', 'john', 'david', 'kath']
let activeAccount = '';
let depositAmount = 0, withdrawAmount = 0, totalAmount = 0;

const formParent = document.querySelector('.form-parent');
const form = document.getElementById('form');
const username = document.querySelector('.input-username');
const password = document.querySelector('.input-password');
const formErrorMsg = document.querySelector('.form-errorMsg');

const homeParent = document.querySelector('.home-parent');
const name = document.querySelector('.name');
const movements = document.querySelector('.movements');

const activeAccountBalance = document.querySelector('.activeAccountBalance');

const deposit = document.querySelector('.deposit');
const withdraw = document.querySelector('.withdraw');
const intrest = document.querySelector('.intrest');

const tmForm = document.querySelector('.tmForm');
const tmUsername = document.querySelector('.tmUsername');
const tmAmount = document.querySelector('.tmAmount');

const alForm = document.querySelector('.alForm');
const alAmount = document.querySelector('.alAmount');

const dcForm = document.querySelector('.dcForm');
const dcUsername = document.querySelector('.dcUsername');
const dcPassword = document.querySelector('.dcPassword');

const logout = document.querySelector('.logout');

const help = document.querySelector('.help');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');

const notificationInner = document.querySelector('.notification-inner');

const findUserPosition = function (uservalue) {
    let user = 0;
    if (uservalue == 'romil') {
        return user = 0;
    } else if (uservalue == 'john') {
        return user = 1;
    } else if (uservalue == 'david') {
        return user = 2;
    } else if (uservalue == 'kath') {
        return user = 3;
    }
}

const showNotification = (text, type) =>{
    notificationInner.textContent=text;
    notificationInner.setAttribute('class', `${type}-notification`);

 setTimeout(()=>{
    notificationInner.textContent='';
    notificationInner.removeAttribute('class', `${type}-notification`);
 },2000);

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (usersNameData.includes(username.value.toLowerCase()) && password.value == '0000') {
        formParent.style.display = "none";
        homeParent.style.display = "block";
        document.body.style.background = "#fff";
        name.textContent = "Welcome," + " " + username.value;

        let user = findUserPosition(username.value.toLowerCase());

        activeAccount = usersData[user];
        updateUI(usersData[user]);

    } else {
        formErrorMsg.style.display = "block";
        setTimeout(() => {
            formErrorMsg.style.display = "none";
        }, 2000)
    }
})


const updateUI = function (userdata) {

    //display moments
    displayMovements(userdata);

}

const displayMovements = function (userdata) {

    console.log('userdata', userdata)
    movements.innerHTML = "";
    depositAmount = 0;
    withdrawAmount = 0;
    totalAmount = 0;
    userdata.forEach((d) => {

        if (d.type == "deposit") {
            depositAmount = depositAmount + d.amount;
            totalAmount = totalAmount + d.amount;
        }
        else if (d.type == "withdraw") {
            withdrawAmount = withdrawAmount + d.amount;
            totalAmount = totalAmount - d.amount;
        }

        let html =
            ` <div class="movements_row">
        <span class="movements_number">${d.number}</span>
        <span class="movements_type_${d.type == 'deposit' ? 'deposit' : 'withdraw'}">${d.type}</span>
        <span class="movements_date">${d.time}</span>
        <span class="movements_value">${d.amount}</span>
      </div>`

        movements.insertAdjacentHTML("afterbegin", html);
    })

    deposit.textContent = depositAmount;
    withdraw.textContent = "-" + "" + withdrawAmount;
    intrest.textContent = (totalAmount * 1 * 4) / 100;
    activeAccountBalance.textContent = totalAmount;
}

tmForm.addEventListener(('submit'), (e) => {
    e.preventDefault();

    if (usersNameData.includes(tmUsername.value)) {

        let user = findUserPosition(tmUsername.value.toLowerCase());

        usersData[user].push({
            number: usersData[user].length + 1,
            type: 'deposit',
            time: '23/06/2022 13:34',
            amount: Number(tmAmount.value),
        })


        activeAccount.push({
            number: activeAccount.length + 1,
            type: 'withdraw',
            time: '23/06/2022 13:34',
            amount: Number(tmAmount.value),
        })

        showNotification(`Successfully sent ${tmAmount.value} to ${tmUsername.value}!`, 'success');

        tmUsername.value = "";
        tmAmount.value = "";

        displayMovements(activeAccount);
    }
    else {
       showNotification("Account doesn't exist!", 'error');
    }
})


alForm.addEventListener(('submit'), (e) => {
    e.preventDefault();

    activeAccount.push({
        number: activeAccount.length + 1,
        type: 'deposit',
        time: '23/06/2022 13:34',
        amount: Number(alAmount.value),
    })

    showNotification(`Dear Customer, your account XX67 has been credited with ${alAmount.value}!`, 'success');

    alAmount.value = "";

    displayMovements(activeAccount);
})


dcForm.addEventListener(('submit'), (e) => {
    e.preventDefault();

    // give notification scrollbar processing something
    if (dcUsername.value == username.value && dcPassword.value == '0000') {

        let user = findUserPosition(dcUsername.value.toLowerCase());

        usersNameData.splice(user, 1);
        logoutFunc();
        showNotification(`${dcUsername.value}'s account has been deleted successfully!`, 'success');
    }
    else if(dcUsername.value != username.value){
        showNotification(`Account doesn't exists!`, 'error');
    }
    else{
        showNotification(`Your pin is incorrect!`, 'error');
    }
})

const logoutFunc = function () {
    homeParent.style.display = "none";
    formParent.style.display = "block";
    document.body.style.background = "radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)";
    username.value = "";
    password.value = "";
}

logout.addEventListener(('click'), logoutFunc)


help.addEventListener('click', ()=>{
modal.setAttribute('class','modal-visible');
modal.style.display="block";
})

modalBtn.addEventListener('click',()=>{
modal.removeAttribute('class','modal-visible');
modal.style.display="none";
})