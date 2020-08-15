const formatter = Intl.NumberFormat('pt-BR');

function formatNumber(value) {
  return formatter.format(value);
}

function formatReal(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function getPercent(value1, value2) {
  return ((value1 / value2) * 100).toFixed(2);
}

export { formatNumber, formatReal, getPercent };
