import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const functions = (function() {
  function calcFactorial(num) {
    if (num !== 1) {
      return num * calcFactorial(num - 1);
    } else {
      return num;
    }
  }
  return {
    a: calcFactorial
  };
})();

console.log(functions.a(5));
