const loginBtn = document.getElementById("Login-Button");
loginBtn.addEventListener("click", function () {
    const LoginArea = document.getElementById("Login-Area");
    LoginArea.style.display = "none";
    const TransactionArea = document.getElementById("Transection-Area");
    TransactionArea.style.display = "block";
})


// Transaction Area Handlar

    const DepositBtn = document.getElementById("DepositButton");
    DepositBtn.addEventListener("click", function () {
    const AddDeposit = document.getElementById("AddDeposit").value;
    const addAmount = parseFloat(AddDeposit);

    // const depositAmount = document.getElementById("depositAmount").innerText;
    // const currentDeposit = parseFloat(depositAmount);
    // const totalValue = addAmount + currentDeposit;
    // document.getElementById("depositAmount").innerText = totalValue;

    updateSpanText("currentBlance", addAmount);
    updateSpanText("depositAmount", addAmount);


    document.getElementById("AddDeposit").value = "";
})

    const withdrawBtn = document.getElementById("withdrawButton");
    withdrawBtn.addEventListener("click", function () {
    const Addwithdraw = document.getElementById("AddWithdraw").value;
    const addAmount = parseFloat(Addwithdraw);


    updateSpanText("currentBlance", -1 * addAmount);
    updateSpanText("withdrawAmount", addAmount);


    document.getElementById("AddWithdraw").value = "";
})

function updateSpanText( id, addAmount) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addAmount + currentNumber;
    document.getElementById(id).innerText = totalAmount;

}
