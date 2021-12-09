document.addEventListener('DOMContentLoaded', () => {

var checkBtn = document.getElementById('checkBtn')
var getWordBtn = document.getElementById('getWordBtn')
var resetBtn = document.getElementById('resetBtn')

var words = ["cat", "dog", "pet", "apple", "orange", "grape", "lemon", "rose", "house", "hose", "cream", "lolly"]

var randomWord = words[Math.floor(Math.random()*words.length)]

resetBtn.addEventListener('click', function(){
    location.reload()
})

var speech = new SpeechSynthesisUtterance()

checkBtn.addEventListener('click', function(){
    var input = document.getElementById('input').value
    if(input == randomWord){
        speech.text = 'You are correct!'
        speech.rate = 0.85
    } else if(
        speech.text !== randomWord
    ){
        speech.text = 'You misspelled your word!' + 'it is actually spelt' +randomWord.split("")
        speech.rate = 0.85
    }
    window.speechSynthesis.speak(speech)
})
getWordBtn.addEventListener('click', function(){
    var input = document.getElementById('input').value

    speech.text = 'your word is' + randomWord
    speech.pitch = 1
    speech.lang = 'en-us'
    speech.volume = 1
    speech.rate = 1
    window.speechSynthesis.speak(speech)
})

})