
 const form = document.getElementById('customizationForm');
 const breadSelect = document.getElementById('bread');
 const toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]');
 const sauceSelect = document.getElementById('sauce');
 const beverageSelect = document.getElementById('beverage');
 const quantityInput = document.getElementById('quantity');
 const totalCostSpan = document.getElementById('totalCost');

 

 form.addEventListener('change', updateTotalCost);

 function updateTotalCost() {
   let totalCost = 0;
   totalCost += costMap.bread[breadSelect.value] || 0;
   toppingsCheckboxes.forEach(checkbox => {
     if (checkbox.checked) {
       totalCost += costMap.toppings[checkbox.value] || 0;
     }
   });
   totalCost += costMap.sauce[sauceSelect.value] || 0;
   totalCost += costMap.beverage[beverageSelect.value] || 0;

   const quantity = parseInt(quantityInput.value);
   totalCost *= quantity;

   totalCostSpan.textContent = totalCost.toFixed(2);
 }

 form.addEventListener('submit', (event) => {
   event.preventDefault();
   updateTotalCost();
 });