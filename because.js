const because = ["mert bele fogsz halni", "mert elkapod a vírust"];

const tellMeWhy = () => {
  document.getElementById("because").innerHTML =
    because[Math.floor(Math.random() * because.length)];
};

window.onload = tellMeWhy;
