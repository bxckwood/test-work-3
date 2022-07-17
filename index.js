const form = document.getElementById("form");
const firstBlockInputs = document.getElementsByClassName("first-block__input");
const firstBlockLabels = document.getElementsByClassName("first-block__label");
const secondBlockInputs2 = document.getElementsByClassName(
  "second-block__input2"
);
const secondBlockLabels2 = document.getElementsByClassName(
  "second-block__label2"
);
const thirdBlockInputs2 = document.getElementsByClassName(
  "third-block__input2"
);
const thirdBlockLabels2 = document.getElementsByClassName(
  "third-block__label2"
);
const fourthBlockInputs = document.getElementsByClassName(
  "fourth-block__input"
);
const fourthBlockLabels = document.getElementsByClassName(
  "fourth-block__label"
);
const fifthBlockInputs = document.getElementsByClassName("fifth-block__input");
const fifthBlockLabels = document.getElementsByClassName("fifth-block__label");
const progress = document.querySelector(".progress");
const progressFirst = document.querySelector(".progress-first");
const progressSecond = document.querySelector(".progress-second");
const progress2 = document.querySelector(".progress2");
const secondBlock = document.querySelector(".second-block");
const thirdBlock = document.querySelector(".third-block");
const container = document.querySelector(".container");
const firstBlockLine = document.getElementsByClassName("first-block__line")[0];
const secondBlockLine =
  document.getElementsByClassName("second-block__line")[0];
const thirdBlockLine = document.getElementsByClassName("third-block__line")[0];
const fourthBlockLine =
  document.getElementsByClassName("fourth-block__line")[0];
const fifthBlockLine = document.getElementsByClassName("fifth-block__line")[0];
const button = document.getElementsByClassName("button")[0]
var secondBlockSlider = false;

const formData = {
  firstBlock: false,
  secondBlock: false,
  thirdBlock: false,
  fourthBlock: false,
  fifthBlock: false,
};

const firstBlockChecker = () => {
  let count = 0;

  const isFirstBlockFilled = Object.values(firstBlockInputs).reduce(
    (previousValue, currentValue) => previousValue + currentValue.value.length,
    0
  );

  Object.values(firstBlockInputs).map((elem) => {
    if (elem.value.length > 0) {
      count += 1;
    }
  });

  if (isFirstBlockFilled && count === 4) {
    formData.firstBlock = true;
    firstBlockLine.classList.remove("active");
    firstBlockLine.classList.add("done");
  } else if (isFirstBlockFilled) {
    formData.firstBlock = false;
    firstBlockLine.classList.remove("done");
    firstBlockLine.classList.add("active");
  } else {
    formData.firstBlock = false;
    firstBlockLine.classList.remove("active");
    firstBlockLine.classList.remove("done");
  }

  Object.values(formData).includes(false) ? button.classList.remove("active") : button.classList.add("active")
};

const fourthBlockChecker = () => {
  let count = 0;

  const isFourthBlockFilled = Object.values(fourthBlockInputs).reduce(
    (previousValue, currentValue) => previousValue + currentValue.value.length,
    0
  );

  Object.values(fourthBlockInputs).map((elem) => {
    if (elem.value.length > 0) {
      count += 1;
    }
  });

  if (isFourthBlockFilled && count === 1) {
    formData.fourthBlock = true;
    fourthBlockLine.classList.remove("active");
    fourthBlockLine.classList.add("done");
  } else if (isFourthBlockFilled) {
    formData.fourthBlock = false;
    fourthBlockLine.classList.remove("done");
    fourthBlockLine.classList.add("active");
  } else {
    formData.fourthBlock = false;
    fourthBlockLine.classList.remove("active");
    fourthBlockLine.classList.remove("done");
  }

  Object.values(formData).includes(false) ? button.classList.remove("active") : button.classList.add("active")
};

const fifthBlockChecker = () => {
  let count = 0;

  const isFifthBlockFilled = Object.values(fifthBlockInputs).reduce(
    (previousValue, currentValue) => previousValue + currentValue.value.length,
    0
  );

  Object.values(fifthBlockInputs).map((elem) => {
    if (elem.value.length > 0) {
      count += 1;
    }
  });

  if (isFifthBlockFilled && count === 1) {
    formData.fifthBlock = true;
    fifthBlockLine.classList.remove("active");
    fifthBlockLine.classList.add("done");
  } else if (isFifthBlockFilled) {
    formDatafifthhBlock = false;
    fifthBlockLine.classList.remove("done");
    fifthBlockLine.classList.add("active");
  } else {
    formData.fifthBlock = false;
    fifthBlockLine.classList.remove("active");
    fifthBlockLine.classList.remove("done");
  }

  Object.values(formData).includes(false) ? button.classList.remove("active") : button.classList.add("active")
};

const labelHandler = (elem) => {
  const firstBlockFor = elem.getAttribute("for");
  const firstBlockInput = document.getElementById(firstBlockFor);
  firstBlockInput.classList.remove("unactive");
  elem.classList.add("active");
  firstBlockInput.addEventListener("change", () => firstBlockChecker());
};

const labelHandler4 = (elem) => {
  const firstBlockFor = elem.getAttribute("for");
  const firstBlockInput = document.getElementById(firstBlockFor);
  firstBlockInput.classList.remove("unactive");
  elem.classList.add("active");
  firstBlockInput.addEventListener("change", () => fourthBlockChecker());
};

const labelHandler5 = (elem) => {
  const firstBlockFor = elem.getAttribute("for");
  const firstBlockInput = document.getElementById(firstBlockFor);
  firstBlockInput.classList.remove("unactive");
  elem.classList.add("active");
  firstBlockInput.addEventListener("change", () => fifthBlockChecker());
};

Object.values(firstBlockInputs).map((elem) => {
  elem.classList.add("unactive");
});

Object.values(firstBlockLabels).map((elem) => {
  elem.addEventListener("click", () => labelHandler(elem));
});

Object.values(secondBlockInputs2).map((elem) => {
  elem.classList.add("unactive");
});

Object.values(secondBlockLabels2).map((elem) => {
  elem.addEventListener("click", () => labelHandler(elem));
});

Object.values(thirdBlockInputs2).map((elem) => {
  elem.classList.add("unactive");
});

Object.values(thirdBlockLabels2).map((elem) => {
  elem.addEventListener("click", () => labelHandler(elem));
});

Object.values(fourthBlockInputs).map((elem) => {
  elem.classList.add("unactive");
});

Object.values(fourthBlockLabels).map((elem) => {
  elem.addEventListener("click", () => labelHandler4(elem));
});

Object.values(fifthBlockInputs).map((elem) => {
  elem.classList.add("unactive");
});

Object.values(fifthBlockLabels).map((elem) => {
  elem.addEventListener("click", () => labelHandler5(elem));
});

progress.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #0ce2f4 0%, #0ce2f4 ${value}%, black ${value}%, black 100%)`;
  progressFirst.innerHTML = value + "%";
  progressFirst.style.left = (secondBlock.offsetWidth * value) / 104.7 + "px";
  secondBlockLine.classList.add("done");
  formData.secondBlock = true;
  Object.values(formData).includes(false) ? button.classList.remove("active") : button.classList.add("active")
});

progressSecond.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #0ce2f4 0%, #0ce2f4 ${value}%, black ${value}%, black 100%)`;
  progress2.innerHTML = value + "%";
  progress2.style.left = (thirdBlock.offsetWidth * value) / 104.7 + "px";
  thirdBlockLine.classList.add("done");
  formData.thirdBlock = true;
  Object.values(formData).includes(false) ? button.classList.remove("active") : button.classList.add("active")
});

button.addEventListener("click", (e) => {
  e.preventDefault()
  Object.values(formData).includes(false) ? button.classList.remove("active") : 
  firstBlockLine.classList.add("send")
  secondBlockLine.classList.add("send")
  thirdBlockLine.classList.add("send")
  fourthBlockLine.classList.add("send")
  fifthBlockLine.classList.add("send")
  container.classList.add("send")
  button.classList.add("done")
})