let balance = 500;
let savingsBalance = 0;
const transactButton = document.querySelector("#transactButton");
transactButton.addEventListener("click", function () {
    const amount = Number(document.querySelector("#amount").value);
    const action = document.querySelector("#action").value;

    if (!Number.isFinite(amount) || amount <= 0) {
    document.querySelector("#message").textContent =
      "Enter an amount greater than zero.";
    return;
  }

  if (action === "deposit") {
    balance += amount;
    document.querySelector("#balance").textContent = balance.toFixed(2);
    document.querySelector("#message").textContent =
      `You deposited $${amount.toFixed(2)}.`;
  }

  else if (action === "withdraw") {
  if (amount > balance) {
    document.querySelector("#message").textContent =
      "Insufficient funds.";
    return;
  }

  balance -= amount;
  document.querySelector("#balance").textContent = balance.toFixed(2);
  document.querySelector("#message").textContent =
    `You withdrew $${amount.toFixed(2)}.`;
}

else if (action === "transfer") {
    if (amount > balance) {
        document.querySelector("#message").textContent =
          "Insufficient funds.";
        return;
    }
   balance -= amount;
   savingsBalance += amount;
   document.querySelector("#balance").textContent = balance.toFixed(2);
   document.querySelector("#savingsBalance").textContent = savingsBalance.toFixed(2);
   document.querySelector("#message").textContent =
   `You transferred $${amount.toFixed(2)} to savings.`;
}
});