const error_container = document.getElementById("error")
const input_box = document.getElementById("input_box")
const good_word = "AALENIEN"

let row_number = 1

async function import_words() {
    return fetch("./src/words_8_letters.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error);
            return []; // Renvoie un tableau vide en cas d'erreur
        });
}
let words = []
import_words()
    .then(data => {
        words = data
        console.log(data)
    })

function empty_error_box() {
    error_container.innerHTML = ""
}

function test_word() {
    console.log(input_box)
    let input = input_box.value.toUpperCase()
    if (input.length <8) {
        error_container.innerHTML = "Mot trop court"
        return
    }
    if (input.length >8) {
        error_container.innerHTML = "Mot trop long"
        return
    }
    if (words.includes(input)) {
        for (i=0; i<8; i++) {
            //console.log(`${row_number}_${i}`)
            document.getElementById(`${row_number}_${i+1}`).innerHTML = input[i]
            if (input[i] == good_word[i]) {
                document.getElementById(`${row_number}_${i+1}`).classList.add("good")
            } else if (good_word.includes(input[i])) {
                document.getElementById(`${row_number}_${i+1}`).classList.add("near")
            }

        }
        row_number ++
    }
}
document.getElementById("submit_button").addEventListener("click", test_word)