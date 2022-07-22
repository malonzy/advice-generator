function ldAdvice(){
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            let {slip} = data
            document.querySelector('.advice').innerHTML = `"${slip.advice}"`
            document.querySelector('.advice-counter').innerHTML = `ADVICE #${slip.id}`
        })
}


window.addEventListener('load',function(){
    ldAdvice()
})

document.querySelector('.dice-btn').addEventListener('click',function (){
    ldAdvice()
})
