const head1 = document.createElement("h1");
head1.setAttribute("class", "time");
document.body.append(head1);
const timer = document.querySelector("h1");
setTimeout(() => {
  timer.innerText = "10";
  setTimeout(() => {
    timer.innerText = "9";
    setTimeout(() => {
      timer.innerText = "8";
      setTimeout(() => {
        timer.innerText = "7";
        setTimeout(() => {
          timer.innerText = "6";
          setTimeout(() => {
            timer.innerText = "5";
            setTimeout(() => {
              timer.innerText = "4";
              setTimeout(() => {
                timer.innerText = "3";
                setTimeout(() => {
                  timer.innerText = "2";
                  setTimeout(() => {
                    timer.innerText = "1";
                    setTimeout(() => {
                      timer.innerHTML = `<p class="happy">Happy</p><p class="ind">Inde<span class="pend">pend</span>ence</p><p class="day">Day</p>`;
                      timer.setAttribute("class", "colour");
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
