let editFlag = false; //* Düzenleme modunda olup olmadığını belirtir.
let editElement; //* Düzenleme yapılan öğeyi temsil eder.
let editID = ""; //* Düzenleme yapılan öğrenin benzersiz kimliği

const form = document.querySelector(".grocery-form");
const item = document.querySelector(".grocery-item");
const grocery = document.getElementById("grocery");
const article = document.querySelector(".article");
const list = document.querySelector(".grocery-list");
const alert = document.querySelector(".alert");


const submitBtn = document.querySelector(".submit-btn");





const displayAlert = (text, action) => {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);

}




const addItem = (e) => {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    const element = document.createElement("article");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");

    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
       <button type="button" class="edit-btn">
           <i class="fa-solid fa-pen-to-square"></i>
       </button>
       <button type="button" class="delete-btn">
           <i class="fa-solid fa-trash"></i>
       </button>
   </div>
   `;

    list.appendChild(element);

    const deleteBtn = document.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);

    const editBtn = document.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    displayAlert("basariyla eklenildi", "success");


}


const deleteItem = (e) => {
    const element = e.target.parentElement.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    displayAlert("silindi", "danger");
}


const editItem = (e) => {
    const element = e.target.parentElement.parentElement.parentElement;

    const editElement = e.target.parentElement.parentElement.previousElementSibling;

    grocery.value = editElement.textContent;



    editFlag = true;
    editID = element.dataset.id; //* Düzenlenen öğenin kimliğini gönderdik.
    submitBtn.textContent = "Düzenle"; //* Düzenle butonuna tıklanıldığında Ekle butonu Düzenle olarak değişsin.
    


}







form.addEventListener("submit", addItem);












