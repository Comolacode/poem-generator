function displayPoem(response){

new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generatePoem(event){
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "b37b22733706785e9b4eaf4ot1ba9bea";
let context = 
"You are a romantic poet and love to write beautiful and short poems. Your mission is to generate a 4 line poem in basic HTML format without quotatioins and make it rhyme.  Make sure to follow the user instuctions. ";
let prompt = `User-instructions: Generate a spanish poem about ${instructionsInput.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating"> ⏳ Generating  a spanish poem for ${instructionsInput.value}</div>`;

axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);