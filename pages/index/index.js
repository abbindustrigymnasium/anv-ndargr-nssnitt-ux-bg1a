
async function randomSausage(id) {
    const myElement = document.getElementById(id);
    let x = await fetch("https://cors.io/?https://sausage-api.vercel.app/api/random")
    data = x.json()
    let y = await x.name;
    myElement.innerHTML = y;
  }
  