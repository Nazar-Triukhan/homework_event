const itemsRef = document.querySelectorAll('.item');

let index = 0

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    if (index < itemsRef.length - 1) {
      index++
    }
  }

  if (event.key === 'ArrowLeft') {
    if (index > 0) {
      index--
    }
  }

  itemsRef.forEach(item => {
    const update = -index * 300;
    item.style.transform = `translateX(${update}px)`;
  });
});


// Завдання 2
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість
//  елементів в input і натискає кнопку Створити, після чого рендериться колекція. При 
// натисканні на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція 
// створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.


const inputNumberRef = document.querySelector('input')
const createBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

function createBoxes(amount){
let size = 30

for(let i = 0;i < amount;i++){
    const div = document.createElement('div')
    div.style.height = `${size}px`
    div.style.width = `${size}px`
    div.style.backgroundColor = 'red'
    div.style.margin = '5px'



    boxesRef.style.display = 'flex'
    boxesRef.appendChild(div)

    size += 10
}
}

createBtnRef.addEventListener('click',() => {
    createBoxes(inputNumberRef.value)
    inputNumberRef.value = ''
})

destroyBtnRef.addEventListener('click',()=> {
    destroyBoxes()
})

function destroyBoxes(){
    boxesRef.innerHTML = ''
}
