const container = document.querySelector('.rating')
const items = container.querySelectorAll('span')

window.addEventListener("click", function(e) {
    //create a variable for elementChecked
    var elementChecked = false

    //items is an array we can loop over to get the id
    for(i = 0; i < items.length; i++) {
        //check event target against id 
        if(e.target.id === items[i].id ) {
            //set variable to true
            elementChecked = true   
            //create vairable for class
            const elementClass = e.target.classList
            //check if class contains active
                if(!elementClass.contains('active')) {
                items.forEach( item => item.classList.remove('active'))   
                elementClass.toggle('active');
            }
        }   
    }
    //when click outside element
    //when element is not elementCheked
    if (!elementChecked) {
        items.forEach( item => item.classList.remove('active'))
    }

})

