const cursors = document.querySelectorAll('.cursor-icon');

cursors.forEach((e) => e.addEventListener('mouseover', function(){
    e.classList.add('hovered');
    if(e.classList.contains('hovered') !== true) {
        e.style.fill = 'yellow'
    } else {
        e.style.fill = 'green'
    }
    // cursors.forEach((e) => e.style.fill ='green');
}));
