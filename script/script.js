function changeClass() {
    const buttonno = document.querySelector('.button-no');
    let count = 1;
    buttonno.addEventListener("mouseenter", () => {
      if (count < 4 && count > 0) {
        buttonno.classList.remove(`move${count - 1}`);
        buttonno.classList.add(`move${count}`);
      } else {
        buttonno.classList.remove(`move${count - 1}`);
        count = 0;
      }
      count +=1;
    });
  }
  changeClass();