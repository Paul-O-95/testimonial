(function(){
const loverName =document.getElementsByClassName('lover-name');
const loverText = document.getElementsByClassName('lover-text');
const buttons = document.querySelectorAll('a')
let index = 0;
const lovers = []
console.log(buttons)

// Lover Constructor
function Lover (name,text){
    this.name = name;
    this.text = text
}

//Creates new Lover
function createLover(name,text){
    let lover = new Lover (name,text)
    lovers.push(lover)
}

createLover('Folasayo',"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo qui quidem sit quisquam eveniet accusamus ducimus! Fugit laboriosam nihil eaque.");
createLover('Oluwaseyi',"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo qui quidem sit quisquam eveniet accusamus ducimus! Fugit laboriosam nihil eaque.");
createLover('Fikunayomi',"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo qui quidem sit quisquam eveniet accusamus ducimus! Fugit laboriosam nihil eaque.");

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if (e.target.parentElement.classList.contains('prevBtn')){
           if(index === 0){
                index = lovers.length
           }
           console.log(index)
           index--
           loverName.textContent = lovers[index].name
           loverText.textContent = lovers[index].text
        }
        if (e.target.parentElement.classList.contains('nextBtn')){
            index++
            if(index === lovers.length){
                 index = 0
            }
            loverName.textContent = lovers[index].name
            loverText.textContent = lovers[index].text
         }
    })
})
})()

