import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flaxWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple pencil (2nd Gen)" idx={1} />
      <Product title="Samsung S21FE 5G" idx={2} />
      <Product title="Samsung S23" idx={3} />
    </div>
  );
}

export default ProductTab;
