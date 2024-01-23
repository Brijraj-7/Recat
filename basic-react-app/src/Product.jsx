import Price from "./price";

function Product({ title, idx }) {
  let oldPrice = ["12,999", "11,999", "59,999", "1,24,000"];
  let newPrice = ["8,999", "9,000", "35,000", "90,000"];
  let descripton = [
    "Buy Computer Accessories & More Online. Pay on Delivery. Brand Warranty. Best Deals. No Cost EMI Available. Top Brands.No Cost EMI Available. Top Brands.",
    "With pixel-perfect precision and tilt and pressure sensitivity, Apple Pencil (2nd generation) transforms into your favourite creative instrument, ...",
    "The professional-grade camera on the Samsung Galaxy S21 FE 5G effortlessly captures great images for immaculate social networking.",
    "The display can achieve peak brightness of up to 1750 nits, improving the contrast between dark and light aspects of digital content for a more brilliant ...",
  ];
  let styles = {
    border: "2px solid black",
    borderRadius: "15px",
    margin: "5px",
    heigth: "300px",
    width: "300px",
  };
  return (
    <div style={styles}>
      <h4>{title}</h4>
      <p>{descripton[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
