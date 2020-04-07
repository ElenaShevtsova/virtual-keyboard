let div = document.createElement('div');
let script = document.getElementsByTagName('script')[0];
let body = document.getElementsByTagName('body')[0];
body.insertBefore(div, script);
let input = document.createElement('textarea');
div.appendChild(input);
let p = document.createElement('p');


const sizes = {
    default: '40px'
}


let firstRow = [{ en: '`', ru: 'ё', width: sizes.default, row: 0, id: 192, type: 'letter' }, { en: '1', width: sizes.default, row: 0, id: 49, type: 'letter' }, { en: '2', width: sizes.default, row: 0, id: 50, type: 'letter' }, { en: '3', width: sizes.default, row: 0, id: 51, type: 'letter' }, { en: '4', width: sizes.default, row: 0, id: 52, type: 'letter' }, { en: '5', width: sizes.default, row: 0, id: 53, type: 'letter' },
{ en: '6', width: sizes.default, row: 0, id: 54, type: 'letter' }, { en: '7', width: sizes.default, row: 0, id: 55, type: 'letter' }, { en: '8', width: sizes.default, row: 0, id: 56, type: 'letter' }, { en: '9', width: sizes.default, row: 0, id: 57, type: 'letter' }, { en: '0', width: sizes.default, row: 0, id: 48, type: 'letter' }, { en: '-', width: sizes.default, row: 0, id: 189, type: 'letter' }, { en: '=', width: sizes.default, row: 0, id: 187, type: 'letter' }, { en: 'Backspace', width: sizes.default, row: 0, id: 8, type: 'specialBtn', value: 'backspace' },
]

let secondRow = [
    { en: 'Tab', width: sizes.default, row: 1, id: 9, type: 'specialBtn', value: 'tab' }, { en: 'q', ru: 'й', width: sizes.default, row: 1, id: 81, type: 'letter' }, { en: 'w', ru: 'ц', width: sizes.default, row: 1, id: 87, type: 'letter' }, { en: 'e', ru: 'у', width: sizes.default, row: 1, id: 69, type: 'letter' }, { en: 'r', ru: 'к', width: sizes.default, row: 1, id: 82, type: 'letter' },
    { en: 't', ru: 'е', width: sizes.default, row: 1, id: 84, type: 'letter' }, { en: 'y', ru: 'н', width: sizes.default, row: 1, id: 89, type: 'letter' }, { en: 'u', ru: 'г', width: sizes.default, row: 1, id: 85, type: 'letter' }, { en: 'i', ru: 'ш', width: sizes.default, row: 1, id: 73, type: 'letter' }, { en: 'o', ru: 'щ', width: sizes.default, row: 1, id: 79, type: 'letter' },
    { en: 'p', ru: 'з', width: sizes.default, row: 1, id: 80, type: 'letter' }, { en: '[', ru: 'х', width: sizes.default, row: 1, id: 219, type: 'letter' }, { en: ']', ru: 'ъ', width: sizes.default, row: 1, id: 221, type: 'letter' }, { en: '&#92;', width: sizes.default, row: 1, id: 220, type: 'sign' }, { en: 'Del', width: sizes.default, row: 1, id: 46, type: 'specialBtn', value: 'del' }
]

let thirdRow = [
    { en: 'CapsLock', width: sizes.default, row: 2, id: 20, type: 'specialBtn', value: 'caps-lock' }, { en: 'a', ru: 'ф', width: sizes.default, row: 2, id: 65, type: 'letter' }, { en: 's', ru: 'ы', width: sizes.default, row: 2, id: 83, type: 'letter' }, { en: 'd', ru: 'в', width: sizes.default, row: 2, id: 68, type: 'letter' }, { en: 'f', ru: 'а', width: sizes.default, row: 2, id: 70, type: 'letter' }, { en: 'g', ru: 'п', width: sizes.default, row: 2, id: 71, type: 'letter' }, { en: 'h', ru: 'р', width: sizes.default, row: 2, id: 72, type: 'letter' },
    { en: 'j', ru: 'о', width: sizes.default, row: 2, id: 74, type: 'letter' }, { en: 'k', ru: 'л', width: sizes.default, row: 2, id: 75, type: 'letter' }, { en: 'l', ru: 'д', width: sizes.default, row: 2, id: 76, type: 'letter' }, { en: ';', ru: 'ж', width: sizes.default, row: 2, id: 186, type: 'letter' }, { en: "'", ru: 'э', width: sizes.default, row: 2, id: 222, type: 'letter' }, { en: 'Enter', width: sizes.default, row: 2, id: 13, type: 'specialBtn', value: 'enter' },
]

let fourthRow = [
    { en: 'Shift', width: sizes.default, row: 3, id: 16, type: 'specialBtn', value: 'shiftLeft' }, { en: 'z', ru: 'я', width: sizes.default, row: 3, id: 90, type: 'letter' }, { en: 'x', ru: 'ч', width: sizes.default, row: 3, id: 88, type: 'letter' }, { en: 'c', ru: 'с', width: sizes.default, row: 3, id: 67, type: 'letter' }, { en: 'v', ru: 'м', width: sizes.default, row: 3, id: 86, type: 'letter' }, { en: 'b', ru: 'и', width: sizes.default, row: 3, id: 66, type: 'letter' },
    { en: 'n', ru: 'т', width: sizes.default, row: 3, id: 78, type: 'letter' }, { en: 'm', ru: 'ь', width: sizes.default, row: 3, id: 77, type: 'letter' }, { en: ',', ru: 'б', width: sizes.default, row: 3, id: 188, type: 'letter' }, { en: '.', ru: 'ю', width: sizes.default, row: 3, id: 190, type: 'letter' }, { en: '&#47;', width: sizes.default, row: 3, id: 191, type: 'sign', value: 'slash' }, { en: '&#x25b4;', width: sizes.default, row: 3, id: 38, type: 'sign' }, { en: 'Shift', width: sizes.default, row: 3, id: 16, type: 'specialBtn', value: 'shiftRight' },
]

let fifthRow = [
    { en: 'Ctrl', width: sizes.default, row: 4, id: 17, type: 'specialBtn', value: 'ctrlLeft' }, { en: 'meta', width: sizes.default, row: 4, id: 91, type: 'specialBtn', value: 'meta' }, { en: 'alt', width: sizes.default, row: 4, id: 18, type: 'specialBtn', value: 'altRight' }, { en: '&#32;', width: sizes.default, row: 4, id: 32, type: 'sign', value: 'space' }, { en: 'Alt', width: sizes.default, row: 4, id: 18, type: 'specialBtn', value: 'altRight' }, { en: 'Ctrl', width: sizes.default, row: 4, id: 17, type: 'specialBtn', value: 'ctrlRight' },
    { en: '&#x25c2;', width: sizes.default, row: 4, id: 37, type: 'sign' }, { en: '&#x25be', width: sizes.default, row: 4, id: 40, type: 'sign' }, { en: '&#x25b8;', width: sizes.default, row: 4, id: 39, type: 'sign' },
]
let button;
let section;
let buttons = [];
function createSection(row) {
    section = document.createElement('section');
    div.appendChild(section);
    section.classList.add('flex');
    row.forEach((elem) => {
        createButton(elem.en, elem.type, elem.id, elem.value);
    })
}

let sections = [firstRow, secondRow, thirdRow, fourthRow, fifthRow]
for (let i = 0; i < sections.length; i++) {
    createSection(sections[i])
}


function createButton(text, type, id, value) {
    button = document.createElement('button');
    section.appendChild(button);
    button.innerHTML = text;
    button.classList.add(type);
    if (value !== undefined) {
        button.classList.add(value);
    }
    button.id = id;
    buttons.push(button);
}

function addActiveClass(e) {
    e.classList.add('active');
    setTimeout(function () {
        e.classList.remove('active');
    }, 200)
}

function addClass(item,className){
    item.classList.add(className);
}

buttons.forEach((item) => {
    item.classList.add('buttons-style')
    if(item.classList.contains('space')){
        addClass(item,'space-width');
    } else if(item.classList.contains('slash')){
        addClass(item,'slash-width');
    } else if (item.classList.contains('letter') || item.classList.contains('sign') || item.classList.contains('del') || item.classList.contains('altLeft') || item.classList.contains('altRight')) {
        addClass(item,'width');
    } else if (item.classList.contains('backspace') || item.classList.contains('caps-lock') || item.classList.contains('shiftLeft')) {
        addClass(item,'backspace-shift-caps-width');
    } else if(item.classList.contains('tab')){
        addClass(item,'tab-width');
    } else if(item.classList.contains('enter')){
        addClass(item,'enter-shiftRight-width');
    } else if(item.classList.contains('ctrlLeft') || item.classList.contains('ctrlRight')){
        addClass(item,'ctrl-width');
    } 
})


function changeLanguageRu() {
    sections.forEach((elem) => {
        elem.forEach((i) => {
            buttons.forEach((item) => {
                if (i.id.toString() === item.id && i.ru !== undefined && i.type === 'letter') {
                    item.innerText = i.ru;
                }
            })
        })
    })
}

function changeLanguageEn() {
    sections.forEach((elem) => {
        elem.forEach((i) => {
            buttons.forEach((item) => {
                if (i.id.toString() === item.id && i.ru !== undefined) {
                    item.innerText = i.en;
                }
            })
        })
    })
}

div.addEventListener('click', (event) => {
    if(event.target.classList.contains('space')){
        input.value += ' '
        addActiveClass(event.target);
    } else if (event.target.tagName === 'BUTTON' && (event.target.classList.contains('letter') || event.target.classList.contains('sign'))) {
        input.value += event.target.innerText;
        addActiveClass(event.target);
    } else if (event.target.classList.contains('tab')) {
        input.value += '    ';
        addActiveClass(event.target);
    } else if (event.target.classList.contains('backspace')) {
        input.value = input.value.slice(0, -1);
        addActiveClass(event.target);
    } else if (event.target.classList.contains('caps-lock') || event.target.classList.contains('del')) {
        addActiveClass(event.target);
    } else if(event.target.classList.contains('enter')){
        addActiveClass(event.target);
    } else if(event.target.classList.contains('shiftLeft') || event.target.classList.contains('shiftRight') || event.target.classList.contains('ctrlLeft') 
    || event.target.classList.contains('ctrlRight') || event.target.classList.contains('altLeft') || event.target.classList.contains('altRight') || event.target.classList.contains('meta')){
        addActiveClass(event.target);
    } 
})


document.addEventListener('keyup', (event) => {
    for (let i = 0; i < sections.length; i++) {
        for (let j = 0; j < sections[i].length; j++) {
            if (event.which === sections[i][j].id) {
                buttons.forEach((elem, i) => {
                    if (event.which.toString() === elem.id && (buttons[i].classList.contains('letter') || buttons[i].classList.contains('sign'))) {
                        input.value += buttons[i].innerText;
                        addActiveClass(elem);
                    } else if (event.which.toString() === elem.id && buttons[i].classList.contains('specialBtn')) {
                        if (buttons[i].classList.contains('backspace')) {
                            input.value = input.value.slice(0, -1);
                        } 
                        addActiveClass(elem);
                    }
                })
            }
        }
    }

})


document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('tab')) {
        buttons.forEach((item) => {
            if (item.classList.contains('letter')) {
                item.classList.toggle('ru');
            }
            if (item.classList.contains('ru')) {
                changeLanguageRu();
            } else if (item.classList.contains('letter') && !item.classList.contains('ru')) {
                changeLanguageEn()
            }
        })
    }
})

document.addEventListener('keyup',(event)=>{
    if(event.code === 'Tab' ){
        buttons.forEach((item) => {
            if (item.classList.contains('letter')) {
                item.classList.toggle('ru');
            }
            if (item.classList.contains('ru')) {
                changeLanguageRu();
            } else if (item.classList.contains('letter') && !item.classList.contains('ru')) {
                changeLanguageEn()
            }
        })

    } 
})

div.appendChild(p);
p.innerText = 'Смена языка - tab'