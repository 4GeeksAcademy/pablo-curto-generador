window.onload = () => {
  document.querySelector("#btnGenerador").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generador();
  });
};
function generador() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "the games"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
  ];

  function obtenerNumero() {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
  }
  return (
    who[obtenerNumero()] +
    " " +
    action[obtenerNumero()] +
    " " +
    what[obtenerNumero()] +
    " " +
    when[obtenerNumero()]
  );
}
