const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("res");
const sound = document.getElementById("sound");
const btn = document.getElementById("searchBtn");



btn.addEventListener("click",()=>{
    let inputWord = document.getElementById("searchInput").value;
    
    fetch(`${url}${inputWord}`)
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data);
        result.innerHTML = `
        <div class="word">
                <h3>${inputWord}</h3>
                <Button onclick="playSound()"><i class="fas fa-volume-up"></i></Button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaning">
               ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
               ${data[0].meanings[0].definitions[0].example || ""}
            </p>
        </div>
        `;

        sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
        console.log(sound)
    });
});

function playSound(){
    sound.play()
}
