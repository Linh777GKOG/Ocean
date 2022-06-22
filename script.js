const trashContainer = document.querySelector('.trash-container');
const moneyElem = document.querySelector('.money');
const currencyFormatter = new Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});
const trashFormatter = new Intl.NumberFormat('en-us', {
  minimumIntegerDigits: 8,
  maximumFractionDigits: 0,
  useGrouping: false,
});

const MAX_MONEY_RAISED = 30000000;

setupTrash();
