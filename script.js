
let FirstName = document.getElementById('firstName')
let MiddleName = document.getElementById('middleName')
let LastName = document.getElementById('lastName')
let prog = document.getElementById('task')

let span1= document.getElementById('sp1')
let span2= document.getElementById('sp2')
let span3= document.getElementById('sp3')

function FirstNameSave() {
    prog.setAttribute('value', `30`)
    FirstName.style.display='none'
    MiddleName.style.display='flex'
    span1.style.background='rgb(224, 180, 122)'
}

 function MiddleNameSave() {
    prog.setAttribute('value', `60`)
    MiddleName.style.display='none'
    LastName.style.display='flex'
    span2.style.background='rgb(224, 180, 122)'

}

 function LastNameSave() {
    prog.setAttribute('value', `90`)
    setTimeout(() => {
        alert('task completed')
    }, 500);
    span3.style.background='rgb(224, 180, 122)'

}
 

 function LastBack(){
    prog.setAttribute('value', `60`)
    MiddleName.style.display='flex'
    LastName.style.display='none'
    span3.style.background='white'
    span2.style.background='white'


 }

 function MiddleBack(){
    prog.setAttribute('value', `30`)
    MiddleName.style.display='none'
    FirstName.style.display='flex'
    span2.style.background='white'
    span1.style.background='white'

 }


// ------------------------------ floating input field ------------


let input = document.getElementById('inp')
input.addEventListener('focus', (e) => {
    input.setAttribute('class', 'floating')
    e.target.addEventListener('focusout', () => {
        input.removeAttribute('class', 'floating')

    })
})
