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
        const div = document.getElementById('notification');
        
        //add message to div
        div.appendChild(document.createTextNode(message));
        
        //add dynamic class
        div.className = `alert ${className}`;

        setTimeout
        setTimeout(function(){
            document.querySelector('.alert').innerHTML = "";
            document.querySelector('.alert').classList.remove('success','error');
        },3000)

    }

    clearFields(){
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('year').value = '';
    }
}


//Validate Product
class ValidProduct {

    productList = [];
    //comprobar que no existe 
    //foreach con el nombre

    static ProductExists(product) {
        return productList.some(function(el) {
          return el.product === product;
        }); 
      }
      

    static AddProduct(product) {
        productList.push(product)
        console.table(productList)
    }

    static Remove(product) {
        //forEach del array y encontrar en que posicion esta el objeto con ese nombre
        productList.splice(index, 1)
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

    //Instantiate valid
    const valid = new ValidProduct();

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

    // productList.push(product)
    // console.table(productList)

  e.preventDefault();
})

//Eventlistener delete 
document.getElementById('product-list').addEventListener('click', function(e){
    //instantiate methods
    const ui = new UI();

    ui.deleteProduct(e.target);
    ui.showNotification('product deleted successfully', 'success');
    e.preventDefault();
    // ValidProduct.Remove(e.currentTarget.children[0].cells[0].innerHTML)

});

