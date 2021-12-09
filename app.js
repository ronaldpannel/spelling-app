document.addEventListener('DOMContentLoaded', () => {

const checkBtn = document.getElementById('checkBtn')
const getWordBtn = document.getElementById('getWordBtn')
const resetBtn = document.getElementById('resetBtn')

const words = ["cat", "dog", "pet", "apple", "orange", "grape", "lemon", "rose", "house", "hose", "cream", "lolly"]

let randomWord = words[Math.floor(Math.random()*words.length)]

resetBtn.addEventListener('click', function(){
    location.reload()
})

let speech = new SpeechSynthesisUtterance()

checkBtn.addEventListener('click', function(){
    let input = document.getElementById('input').value
    if(input == randomWord){
        speech.text = 'You are correct'
        speech.rate = 0.85
    } else if(
        speech.text !== randomWord
    ){
        speech.text = 'You misspelled your word' + 'the correct spelling is' + randomWord.split("")
        speech.rate = 0.85
    }
    window.speechSynthesis.speak(speech)
})
getWordBtn.addEventListener('click', function(){
    let input = document.getElementById('input').value

    speech.text = 'your word is' + randomWord
    speech.pitch = 1
    speech.lang = 'en-us'
    speech.volume = 1
    speech.rate = 1
    window.speechSynthesis.speak(speech)
})

})