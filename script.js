alert ('Привет')
let namen = prompt('Введите ваше имя')
Name_pr(namen)
let age = parseInt(prompt('Введите ваш возраст'));
switch(age){
    case 18:
        alert('вы совершеннолетний');
        break;
    case 10:
        alert('вам нужно делать уроки');
        break; 
    case 30:
        alert('ложитесь спатьб вам завтра на работу');
        break; 
    default:
        alert('мы не знаем что вам делать')         
}
 let btn = document.getElementById('btn')
console.log(btn)
btn.addEventListener('click', color_s)
function Name_pr(g) {
        alert(`Привет, ${g}!!!`);
   }
function color_s() {
    let element = document.getElementById('el1')
    console.log(element)
    element.classList.add('active')
}

