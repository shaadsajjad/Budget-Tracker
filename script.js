const get = localStorage.getItem("amount");
// console.log(get);
let cart = JSON.parse(get) || [];

var income = 0;
var expense = 0;

function setpos(number, index) {
    const div = document.getElementById("div");
    const div3 = document.createElement("div");
    div3.classList.add("flex", "justify-between", "text-xl", "items-center", "border-2", "w-full", "m-1", "p-2", "pb-1");
    const div1 = document.createElement("div1");
    div1.classList.add("p-1");
    const budgetAmount = document.createElement("span");
    const budgetType = document.createElement("span");
    budgetAmount.innerHTML = number;
    budgetAmount.classList.add("text-3xl", "pr-2");
    budgetType.innerHTML = "Income";
    div1.appendChild(budgetAmount);
    div1.appendChild(budgetType);
    const div2 = document.createElement("div2");
    const deleteOp = document.createElement("span");
    deleteOp.innerHTML = `
    <button onclick="deleted(${index})">Delete</button>
    `
    deleteOp.addEventListener('mouseover', function handleMouseOver() {
        deleteOp.style.color = 'red';
    });
    deleteOp.addEventListener('mouseout', function handleMouseOut() {
        deleteOp.style.color = 'black';
    });
    const editOp = document.createElement("span");
    editOp.innerHTML = `
    <button onclick="edit(${index})">Edit</button>
    `
    editOp.addEventListener('mouseover', function handleMouseOver() {
        editOp.style.color = 'green';
    });
    editOp.addEventListener('mouseout', function handleMouseOut() {
        editOp.style.color = 'black';
    });
    div2.appendChild(deleteOp);
    div2.appendChild(editOp);
    div3.appendChild(div1);
    div3.appendChild(div2);
    div.appendChild(div3);
}
function setneg(number, index) {
    console.log("index", index);
    const div = document.getElementById("div");
    const div3 = document.createElement("div");
    div3.classList.add("flex", "justify-between", "text-xl", "border-2", "w-full", "p-3");
    const div1 = document.createElement("div1");
    const budgetAmount = document.createElement("span");
    budgetAmount.classList.add("text-3xl")
    const budgetType = document.createElement("span");
    budgetAmount.innerHTML = -number;
    budgetType.innerHTML = "Expense";
    div1.appendChild(budgetAmount);
    div1.appendChild(budgetType);
    const div2 = document.createElement("div2");
    const deleteOp = document.createElement("span");
    deleteOp.innerHTML = `
    <button onclick="deleted(${index})">Delete</button>
    `
    deleteOp.addEventListener('mouseover', function handleMouseOver() {
        deleteOp.style.color = 'red';
    });
    deleteOp.addEventListener('mouseout', function handleMouseOut() {
        deleteOp.style.color = 'green';
    });
    const editOp = document.createElement("span");
    editOp.innerHTML = `
    <button onclick="edit(${index})">Edit</button>
    `
    editOp.addEventListener('mouseover', function handleMouseOver() {
        editOp.style.color = 'red';
    });
    editOp.addEventListener('mouseout', function handleMouseOut() {
        editOp.style.color = 'black';
    });
    div2.appendChild(deleteOp);
    div2.appendChild(editOp);
    div3.appendChild(div1);
    div3.appendChild(div2);
    div.appendChild(div3);
}
function Update() {
    const incomeText = document.getElementById('income');
    const expenseText = document.getElementById('expense');
    const div = document.getElementById("div");
    div.innerHTML = "";
    let plus = 0, minus = 0;
    if (cart.length == 0) {
        div.innerHTML = "";
    }
    else {
        for (var i = 0; i < cart.length; i++) {
            var dif = parseInt(cart[i]);
            if (dif > 0) {
                setpos(dif, i);
                plus += dif;
            }
            else {
                setneg(dif, i);
                minus += -dif;
            }

        }
    }
    incomeText.innerText = plus;
    expenseText.innerText = minus;


}
function edit(number) {
    let editing = prompt("Please enter new amount:");
    if (editing != "") {
        cart[number] = editing;
        console.log(cart[number]);
        Update();
        localStorage.setItem("amount", JSON.stringify(cart));
    }
}
function deleted(number) {
    console.log(number);
    var remaining = cart.splice(number, 1);

    Update();
    localStorage.setItem("amount", JSON.stringify(cart));
}
const container = document.getElementById("container");
document.getElementById('add').addEventListener("click", function () {
    const inputText = document.getElementById('input').value;
    const incomeText = document.getElementById('income');
    const expenseText = document.getElementById('expense');

    if (inputText != '') {
        if (inputText > 0) {
            console.log(inputText);
            income += parseInt(inputText);
            incomeText.innerText = income;
            cart.push(parseInt(inputText));
            setpos(inputText);

            localStorage.setItem("amount", JSON.stringify(cart));
        }
        else {
            expense -= parseInt(inputText);
            expenseText.innerText = expense;
            expenseText.innerText = expense;
            cart.push(parseInt(inputText));
            setneg(inputText);
            Update();
            localStorage.setItem("amount", JSON.stringify(cart));

        }
        inputText.innerText = "";


    } else {
        alert("please enter a mumber");
    }

}

)
Update();


