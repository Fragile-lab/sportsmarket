function changeClass() {
    const card = document.querySelector('#image-1-1');
    let count = 1;
    buttonno.addEventListener("onclick", () => {
      if (count < 2 && count > 0) {
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