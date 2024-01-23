function handleClik() {
  console.log("Hello");
}

function handleMouseOver() {
  console.log("hello!2");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClik}>Clik me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        dolor facilis error aspernatur quibusdam ex sint repellat in obcaecati
        illo, incidunt repudiandae tenetur sequi deserunt, nostrum corporis,
        harum maiores quasi.
      </p>
    </div>
  );
}
