const loanData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    ref: `Ref${123456 + index}`,
    amount: `₦${(Math.random() * 1000000 + 1000).toFixed(0)}`, 
    email: "adebona@creditwave.ng",
    firstName: "Adekunle",
    middleName: "Samuel",
    lastName: "Adebona",
    date: new Date(
      2023,
      Math.floor(Math.random() * 12), 
      Math.floor(Math.random() * 28) + 1
    ).toLocaleDateString('en-GB') // Format date as DD/MM/YYYY
  }));
  
  export default loanData;
  