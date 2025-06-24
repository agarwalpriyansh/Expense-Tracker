document.addEventListener("DOMContentLoaded", function () {
  // Theme Toggle
  const toggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    toggleBtn.innerText = "☀️ Light Mode";
  }

  toggleBtn.addEventListener("click", function () {
    html.classList.toggle("dark");
    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.innerText = "☀️ Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.innerText = "🌙 Dark Mode";
    }
  });

  // Form Handling
  const form = document.getElementById("expense-form");
  const amountInput = document.getElementById("amount");
  const categoryInput = document.getElementById("category");
  const noteInput = document.getElementById("note");
  const expenseList = document.getElementById("expense-list");
  const totalDisplay = document.getElementById("total-amount");

  let expenses =  [];

//   expenses.forEach(renderExpense);
//   updateTotal();

  AddExpense.addEventListener("click", function (e) {
    e.preventDefault();

    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value.trim();
    const note = noteInput.value.trim();

    if (!amount || !category) return;

    const expense = {
      id: Date.now(),
      amount,
      category,
      note
    };

    expenses.push(expense);

    renderExpense(expense);
    updateTotal();
    form.reset();
  });

  function renderExpense(expense) {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded shadow";
    li.innerHTML = `<span>${expense.amount.toFixed(2)} - ${expense.category} - ${expense.note}</span> <button class="delete-btn text-red-500">🗑️</button>`;
    expenseList.appendChild(li);
  }

  function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalDisplay.textContent = `Total: ₹${total.toFixed(2)}`;
  }

  // Event delegation on expense list
expenseList.addEventListener("click", function (e) {
   if (e.target.tagName === "BUTTON" && e.target.classList.contains("delete-btn")) {
    const li = e.target.closest("li");
    const amount = parseFloat(li.firstChild.textContent.split(" - ")[0]);
    expenses = expenses.filter(expense => expense.amount !== amount);
    li.remove();
    updateTotal();
  }
});

})
