let body = document.querySelector('body')
let elBox = document.querySelector('.box')
let elBoxList = document.querySelector('.checkbox__list')
let elUstiga = document.querySelector('.ustiga')

var myParent = document.body;
var array = ["Volvo", "Saab", "Mercades", "Audi"];
    
var selectList = document.createElement("select");
selectList.id = "mySelect";
myParent.appendChild(selectList);

array.forEach((q, p) => {

    var option = document.createElement("option");
    option.value = array[p];
    option.text = array[p];
    elBoxList.appendChild(selectList)
    selectList.appendChild(option);
    

    
    option.classList.add('opt')
    
    selectList.addEventListener('click', (evnt) => {
            if (evnt.target.checked = true) {
                let newH3 = document.createElement('p')
                newH3.classList.add('title')
                newH3.textContent += q
                elUstiga.appendChild(newH3)
            }
            if (evnt.target.checked = false) {
                let elTitles = document.querySelectorAll('.title')
                elTitles.forEach((j, k) => {
                    if (j.textContent == q) {
                        j.style.display = 'none'
                    }
                })
            }
        })
})





const ustiga1 = ['25cm', '30cm', '35cm',]

ustiga1.forEach((e, i) => {
    let newH1 = document.createElement('h1')
    let newButton = document.createElement('button')
    let newLabel = document.createElement('label')
    //===
    newButton.setAttribute('type', 'checkbox')
    //===
    newButton.textContent = e
    newH1.textContent = 'kattaligi'
    //===
    newButton.classList.add('buttons')
    //===
    elBox.appendChild(newH1)
    elBoxList.appendChild(newButton)
    elBoxList.appendChild(newLabel)
    console.log(e);


    newButton.addEventListener('click', (evnt) => {
        if (evnt.target.checked = true) {
            let newH3 = document.createElement('h3')
            newH3.classList.add('title')
            newH3.textContent += e
            elUstiga.appendChild(newH3)
        }
        if (evnt.target.checked = false) {
            let elTitles = document.querySelectorAll('.title')
            elTitles.forEach((j, k) => {
                if (j.textContent == e) {
                    j.style.display = 'none'
                }
            })
        }
    })
})


const ustiga = ['pamidir', 'zaytun', 'bodiring', 'qoziqaorin', 'banan']


ustiga.forEach((e, i) => {
    let newInput = document.createElement('input')
    let newLabel = document.createElement('label')
    //===
    newInput.setAttribute('type', 'checkbox')
    newLabel.setAttribute('for', i)
    newInput.setAttribute('id', i)
    //===
    newLabel.textContent = e

    //===
    elBoxList.appendChild(newInput)
    elBoxList.appendChild(newLabel)
    console.log(e);


    newInput.addEventListener('click', (evnt) => {
        if (evnt.target.checked == true) {
            let newH3 = document.createElement('h3')
            newH3.classList.add('title')
            newH3.textContent += e
            elUstiga.appendChild(newH3)

        }
        if (evnt.target.checked == false) {
            let elTitles = document.querySelectorAll('.title')
            elTitles.forEach((j, k) => {
                if (j.textContent == e) {
                    j.style.display = 'none'
                }
            })
        }
    })
})



