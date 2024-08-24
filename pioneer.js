const LoginButton = document.getElementById("LoginButton");
LoginButton.addEventListener("click", function () {
    const LogInForm = document.getElementById("LogInForm");
    LogInForm.style.display = "none";

    const TransactionArea = document.getElementById("TransactionArea");
    TransactionArea.style.display= "block";


})
    const DepositBtn = document.getElementById("DepositBtn");
    DepositBtn.addEventListener("click", function () {
    const addDeposit = document.getElementById("addDeposit").value;
    const addAmount = parseFloat(addDeposit);

    updateSpanText("currentBlance", addAmount);
    updateSpanText("depositAmount", addAmount);

    document.getElementById("addDeposit").value ="";
})

    const withdrawBtn = document.getElementById("withdrawBtn");
    withdrawBtn.addEventListener("click", function () {
    const addWithdraw = document.getElementById("addWithdraw").value;
    const addAmount = parseFloat(addWithdraw);

    updateSpanText("currentBlance",-1* addAmount);
    updateSpanText("withdrawAmount", addAmount);

    document.getElementById("addWithdraw").value = "";
})




function updateSpanText(id, addAmount) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addAmount + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}