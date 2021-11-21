export const formatter = () => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format;
};
new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NOK",
});