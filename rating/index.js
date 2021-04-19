const container = document.querySelector('.rating')
const items = container.querySelectorAll('span')

items.forEach((item) => { 
    item.addEventListener('click', function(e) {
        const elementClass = e.target.classList
            if(!elementClass.contains('active')) {
            items.forEach( item => item.classList.remove('active'))   
            elementClass.toggle('active');
        }
    })

})


window.addEventListener("click", function (e) {
    var elementChecked = false
    for(i = 0; i < container.children.length; i++) {
        if(e.target.id === document.getElementById("item" + i) ) {
            elementChecked = true   
        }   
    }
    if (!elementChecked) {
        items.forEach( item => item.classList.remove('active'))
    }

})

