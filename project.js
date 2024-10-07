//Generator
function* hello() {
  let nimadir = "salom";
  yield nimadir + " " + "Aziz";
  yield "Abdulla";
  return "Alisher"
}
const generator = hello()
console.log(generator.next());

//declaration arrow expression IIFE constructor method  Generator
