document.addEventListener('DOMContentLoaded', () => {

var checkBtn = document.getElementById('checkBtn')
var getWordBtn = document.getElementById('getWordBtn')
var resetBtn = document.getElementById('resetBtn')
var VoiceSelect = document.getElementById('voiceSelect')

var words = ["blackboard","cat","dog","pet","apple","orange","grape","lemon","rose","house","hose","cream","lolly","firefly","exam","entry","Bulb","shade",'toy',"song","dance",'tap',"trap","tape","type","biscuit",'cake',"sandwich","carrot","mushroom","strawberry","blackberry","pear","grass","glass","car","pram","boy","girl","brother","sister","mum","dad","aunt","uncle","nanna","ship","boat","canoe",'paddle',"oar","door","floor","core"]

var randomWord = words[Math.floor(Math.random()* words.length)]

resetBtn.addEventListener('click', function(){
    location.reload()
})

var speech = new SpeechSynthesisUtterance()

checkBtn.addEventListener('click', function(){
    var input = document.getElementById('input').value
    var wordCheck = ','+ randomWord.split('')
    if(input == randomWord){
        speech.text = 'You are correct'
        speech.rate = 0.85
    } else if(
        speech.text !== randomWord
    ){
        speech.text = 'You misspelled your word' + 'it is actually spelt' + wordCheck
        speech.rate = 0.85
    }
    window.speechSynthesis.speak(speech)
})
getWordBtn.addEventListener('click', function(){
    var input = document.getElementById('input').value

    speech.text = 'your word is  ' + randomWord
    speech.pitch = 1
    speech.lang = 'en-GB'
    speech.volume = 1
    speech.rate = 0.85
    window.speechSynthesis.speak(speech)
})

})
