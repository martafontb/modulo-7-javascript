//Class 
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//Methods
class UI {

    addProductToList(product){
        const list = document.getElementById('product-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.year}</td>
        <td><button class="delete">delete</button></td>
        `;
        list.appendChild(row);   
        console.log(product) 
        }
        
      


    deleteProduct(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
    
        }
    }

    showNotification(message, className) {

        //create notification
        const div = document.createElement('div');
        //add message to div
        div.appendChild(document.createTextNode(message));
        
        //add dynamic class
        div.className = `alert ${className}`;

        //get elements
        const container = document.querySelector('.container');
        const form = document.querySelector('#product-form')
        
        //insert notification
        container.insertBefore(div, form);

        //setTimeout
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000)

    }

    clearFields(){
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('year').value = '';
    }
}

//Event Listening
document.getElementById('product-form').addEventListener('submit', function(e){

    //Get form values
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    //Instantiate product
    const product = new Product(name, price, year);

    //Instantiate methods
    const ui = new UI();

    //Validate if inputs are not empty
    if (name === '' || price === '' || year === '') {
        //error notification
        ui.showNotification('complete fields please', 'error');
        
    } else {
        //display product
        ui.addProductToList(product);
        //success notification
        ui.showNotification('product added successfully', 'success');
        //clear fields
        ui.clearFields();
    }

  e.preventDefault();
})

//Eventlistener delete 
document.getElementById('product-list').addEventListener('click', function(e){
    //instantiate methods
    const ui = new UI();

    ui.deleteProduct(e.target);
    ui.showNotification('product deleted successfully', 'success');
    e.preventDefault();
})