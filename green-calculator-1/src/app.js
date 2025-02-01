function calculateTotal(price, taxRate, discountRate) {
    const taxAmount = price * (taxRate / 100);
    const discountAmount = price * (discountRate / 100);
    return price + taxAmount - discountAmount;
}

document.addEventListener('DOMContentLoaded', () => {
    const priceInput = document.getElementById('price');
    const taxInput = document.getElementById('tax');
    const discountInput = document.getElementById('discount');
    const resultDisplay = document.getElementById('result');

    document.getElementById('calculate').addEventListener('click', () => {
        const price = parseFloat(priceInput.value) || 0;
        const taxRate = parseFloat(taxInput.value) || 0;
        const discountRate = parseFloat(discountInput.value) || 0;

        const total = calculateTotal(price, taxRate, discountRate);
        resultDisplay.textContent = `Total: $${total.toFixed(2)}`;
    });
});