const calculateBtn = document
  .getElementById("calculate-btn")
  .addEventListener("click", function () {
    const income = document.getElementById("income");
    const incomeNumber = parseInt(income.value);
    // console.log(incomeNumber);
    const food = document.getElementById("food");
    const foodNumber = parseInt(food.value);
    const rent = document.getElementById("rent");
    const rentNumber = parseInt(rent.value);
    const clothes = document.getElementById("clothes");
    const clothesNumber = parseInt(clothes.value);
    const expense = document.getElementById("expense");
    const expenseNumber =parseInt(expense.innerText);
    const balance = document.getElementById("balance");
    const balanceNumber =parseInt(balance.innerText);
    const totalExpense = foodNumber + rentNumber + clothesNumber;
    const totalBalance = incomeNumber - totalExpense;
    expense.innerText ="Total Expenses : $"+totalExpense;
    balance.innerText = totalBalance;
    income.value ="";
    food.value ="";
    rent.value ="";
    clothes.value ="";
  });
  const saveBtn=document.getElementById("saveBtn").addEventListener("click",function(){
    const balance = document.getElementById("balance").innerText;
    const balanceNumber =parseInt(balance);
    const saveInput =document.getElementById("saveInput");
    const saveNumber =parseFloat(saveInput.value);
    const totalSaveAmount =balanceNumber * saveNumber /100;
    const AmountSave =document.getElementById("AmountSave");
    const AmountNumber =parseFloat(AmountSave.innerText);
    AmountSave.innerText ="$"+totalSaveAmount;
    const remainAmount =document.getElementById("remainAmount");
    const totalRemain  =balanceNumber -totalSaveAmount;
    remainAmount.innerText ="$"+totalRemain;
    saveInput.value ="";


  });

