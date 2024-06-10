document.addEventListener("DOMContentLoaded", function () {
    var text = document.getElementById("text-dynamic").getAttribute("data-value");
    const textDynamic = document.getElementById("text-dynamic");
    let index = 0;
  
    function addUserName() {
      textDynamic.style.display = "inline"; // Mostrar el text dinámico
      textDynamic.textContent += text[index];
      index++;
      if (index < text.length) {
        setTimeout(addUserName, 100); // Velocidad de escritura (milisegundos)
      }
    }
    addUserName();
  });
  
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  
  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }
  
  var themeToggleBtn = document.getElementById("theme-toggle");
  
  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");
  
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
  
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=%2F%40VictorRoblesWEB&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '987490470cmshcda9d9fcd9cb850p108feajsn79b97e047ede',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

// async () =>{
//   try{
//     const videos = await fetchData(API);
//     let view = `
//     ${videos.items.map(video =>{
      
//     })`
//   }
// }) 