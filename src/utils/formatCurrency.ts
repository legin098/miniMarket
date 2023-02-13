export const formatCurrency = (currency: number) => {
  return currency.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });
};
