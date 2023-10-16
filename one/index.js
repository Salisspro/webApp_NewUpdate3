const button = document.getElementById('my-button')

const s = document.getElementById('membership1')
const f = document.getElementById('free1')
const o = document.getElementById('one')
const t = document.getElementById('two')
const z = document.getElementById('zero')

o.style.fontSize = '0.8em'
t.style.fontSize = '0.8em'
f.style.fontSize = '1.5em'
s.style.fontSize = '1em'

s.addEventListener('click', function (event) {
    s.innerHTML = '<em>Thanks please come back again</em> <br/> <em>Try for $10/mounth</em>'
    s.style.backgroundColor = '';
    
})


function sign() {
    s.style.backgroundColor = '#36c'
    s.style.color = 'black'
    
}


f.addEventListener('click', function (event) {
    f.innerHTML = '<em>Thanks please come back again</em> <br/> <em>Try for $10/mounth</em>'
    f.style.backgroundColor = '';
    
})

function free() {
    f.style.backgroundColor = '#36c'
    f.style.fontSize = '20px'
    f.style.color = 'black'
}

o.addEventListener('click', function (event) {
    o.innerHTML = '<p>Thanks please come back again Try for $10/mounth</p>'
    o.style.backgroundColor = '';
    o.style.color = 'black'
})

t.addEventListener('click', function (event) {
    t.innerHTML = '<em>Thanks please come back again</em> <br/> <em>Try for $10/mounth</em>'
    t.style.backgroundColor = '';
    t.style.color = 'black'
    
})
