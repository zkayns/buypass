function buypass() {
    new PaymentRequest(
        [
            {
                supportedMethods: "https://zkayns.github.io/buypass/pay/main.json",
                data: { url: document.querySelector("input").value },
            },
        ],
        {
            total: {
                label: "_",
                amount: { value: "1", currency: "USD" },
            },
        }
    ).show();
}

document.querySelector("button").onclick = buypass;
