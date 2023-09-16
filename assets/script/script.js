const lightTheme = "assets/dist/css/light.css";
const darkTheme = "assets/dist/css/dark.css";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const heading = document.getElementById("heading");
const githubIcon = document.getElementById("github-icon");
const gitHubDark = "assets/images/GitHubDark.svg";
const gitHubLight = "assets/images/GitHubLight.svg";
const sunIcon = "assets/images/darkMode.svg";
const moonIcon = "assets/images/lightMode.svg";


function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    heading.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    githubIcon.setAttribute("href", gitHubDark)
    themeIcon.setAttribute("src", sunIcon);
    heading.innerHTML = "Dark Mode";
  } else {
    theme.setAttribute("href", lightTheme);
    githubIcon.setAttribute("href", gitHubLight);
    themeIcon.setAttribute("src", moonIcon);
    heading.innerHTML = "Light Mode";
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  console.log(enteredValue);
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

function backspace(){
  console.log(res.value);
  let remove = res.value;
  res.value = remove.substring(0, res.value.length - 1);
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
