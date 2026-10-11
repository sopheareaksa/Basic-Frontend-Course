var products = [
    {
        id: 1,
        name: "Product 1",
        old_price: 100,
        new_price: 80,
        image: "img/1.jpg"
    }, // 0 
    {
        id: 2,
        name: "Product 2",
        old_price: 200,
        new_price: 150,
        image: "img/2.jpg"
    } // 1
];




function Loadproducts(listObj) {
    if (listObj.length === 0) {
        document.querySelector(".product-table-wrapper").innerHTML = "";
        return;
    }
    var rows = "";
    for (var obj in listObj) {
        rows += `
            <tr>
                <td>${listObj[obj].id}</td>
                <td><img src="${listObj[obj].image}" alt="${listObj[obj].name}"></td>
                <td>${listObj[obj].name}</td>
                <td><span class="old-price">$${listObj[obj].old_price}</span></td>
                <td><span class="new-price">$${listObj[obj].new_price}</span></td>
                <td>
                    <button class="btn-edit" onclick="editProduct(${obj})">Edit</button>
                    <button class="btn-delete" onclick="deleteProduct(${obj})">Delete</button>
                </td>
                
            </tr>
        `;
    }
    document.querySelector(".product-table-wrapper").innerHTML = `
        <table class="product-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Old Price</th>
                    <th>New Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

//call function to process data
Loadproducts(products);


const btnadd = document.querySelector("#addProduct");
var id = 1;
btnadd.addEventListener("click", function () {
    const name = document.querySelector("#name").value;
    const old_price = document.querySelector("#old_price").value;
    const new_price = document.querySelector("#new_price").value;
    const image = document.querySelector("#image").value;

    var newOject = {
        id: id++,
        name: name,
        old_price: old_price,
        new_price: new_price,
        image: image,
    }
    Swal.fire({
        title: "Success!",
        text: "Product added successfully!",
        icon: "success"
    });
    products.push(newOject);
    Loadproducts(products);
    clearInput();
});


function clearInput() {
    document.querySelector("#name").value = "";
    document.querySelector("#old_price").value = "";
    document.querySelector("#new_price").value = "";
    document.querySelector("#image").value = "";
    document.querySelector("#name").focus();
}

//delete product
function deleteProduct(id) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            products.splice(id, 1); // use to delete element in array by index
            Loadproducts(products);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Cancelled",
                text: "Your file is safe.",
                icon: "error"
            });
        }
    });


}

//edit product
var indexEdit = 0;
function editProduct(id) {
    var item = products[id];
    document.querySelector("#name").value = item.name;
    document.querySelector("#old_price").value = item.old_price;
    document.querySelector("#new_price").value = item.new_price;
    document.querySelector("#image").value = item.image;

    //show update button and hide add button
    document.querySelector(".btnadd").style.display = "none";
    document.querySelector(".btnupdate").style.display = "inline-block";
    indexEdit = id;
}


var btnupdate = document.querySelector(".btnupdate");
btnupdate.addEventListener("click", function () {
    var name = document.querySelector("#name").value;
    var old_price = document.querySelector("#old_price").value;
    var new_price = document.querySelector("#new_price").value;
    var image = document.querySelector("#image").value;

    products[indexEdit].name = name;
    products[indexEdit].old_price = old_price;
    products[indexEdit].new_price = new_price;
    products[indexEdit].image = image;

    Loadproducts(products);
    clearInput();
    Swal.fire({
        title: "Success!",
        text: "Product updated successfully!",
        icon: "success"
    });
});