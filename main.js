const content = document.querySelector('.content')
const addBtn = document.querySelector('.add')

let counter = ' '
let img = [
    'https://plantbasednews.org/app/uploads/2020/09/davidlaid.jpg' ,
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YoxukmUdncfeADUjSSzAOCNHAzHabPmSG8nf__QS2A&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bDKUIRqN7PDX1z6s5dwcZmlfUwBf2rgwS75VEAH12ITCN_O6rf3QPdAMBHGjJuI-T1o&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8ZDeATJF8Zwm1vLCGxDu4nGN_ejvquurssNcHm4jHPnuJMAMAHJ4sBFGnkKI6RSf-TA&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYItblPtlGZfOOYq4jg7jqFzUa_RXiIDpcqJ7KVSpjx58UCTsIescszRm5q_lT7-7Y368&usqp=CAU'
]

const conteiner = document.querySelector('.conteiner')
console.log(conteiner);



addBtn.addEventListener('click', () => {
    let rnd = Math.floor(Math.random() * img.length)
    console.log(rnd);

    let box = document.createElement('div')
    box.classList.add('box')
    box.style.backgroundImage = `url(${img[rnd]})`
    box.innerHTML = counter
    conteiner.appendChild(box)  

    counter++

    console.log(box);
})