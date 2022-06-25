const sec = document.createElement("section");
sec.innerHTML = `<div class="display">
</div>
    <div class="buttons">
      <div class="button"><span class="clear">C</span></div>
      <div class="button">&#8592</div>
      <div class="button"><span>.</span></div>
      <div class="button"><span>&times</span></div>
      <div class="button">7</div>
      <div class="button">8</div>
      <div class="button">9</div>
      <div class="button"><span>/</span></div>
      <div class="button">4</div>
      <div class="button">5</div>
      <div class="button">6</div>
      <div class="button"><span>-</span></div>
      <div class="button">1</div>
      <div class="button">2</div>
      <div class="button">3</div>
      <div class="button"><span>+</span></div>
      <div class="button">0</div>
      <div class="button">00</div>
      <div class="button" id="equal">=</div>
    
  </div>`;
document.body.append(sec);
const buts = Array.from(document.getElementsByClassName("button"));
const disp = document.getElementsByClassName("display");

buts.map((button) => {
  button.addEventListener("click", (cl) => {
    switch (cl.target.innerText) {
      case "C":
        disp[0].innerText = "";
        break;
      case "←":
        disp[0].innerText = disp[0].innerText.slice(0, -1);
        break;
      case "×":
        disp[0].innerText += "*";
        break;
      case "=":
        try {
          disp[0].innerText = eval(disp[0].innerText);
        } catch {
          disp[0].innerText = "ERROR Operation!";
        }
        break;
      default:
        disp[0].innerText += cl.target.innerText;
    }
  });
});
