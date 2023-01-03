// input text
// const inputText = document.getElementById("inputItem").value;
// let itemFromInputText = inputText.value;

var inputText = document.getElementById("inputItem");
// i.value = "kdsfldsflj";

//  event listner to the add new list item button
const addNewShopingItemBtn = document.getElementById("inputBtn");
addNewShopingItemBtn.addEventListener("click", addNewItem);

// functions

// function call, when add item button will be pressed
function addNewItem(e) {
  e.preventDefault();
  if (inputText.value.trim() !== "") {
    addItemToList();
  }
}

function addItemToList() {
  //    container of shipping items divs
  const shoppingItemsSection = document.getElementById("itemsSection");

  //    div for item with completed and delete buttons
  const newDiv = document.createElement("div");
  newDiv.classList.add("shoppingItem");

  //   p tag to display the item
  const newItemInPara = document.createElement("p");
  newItemInPara.textContent = inputText.value;

  //   button to line through the purchased item
  const completedBtn = document.createElement("button");
  completedBtn.textContent = "Completed";

  //   button to remove line through
  const unCompleted = document.createElement("button");
  unCompleted.textContent = "Uncompleted";
  //   event listner to remove line through from the list item
  unCompleted.addEventListener("click", () => {
    newItemInPara.classList.remove("lineThrough");
  });

  //   event listner to linethrough the item
  completedBtn.addEventListener("click", () => {
    newItemInPara.classList.add("lineThrough");
  });

  //   button to delete the item
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  //   event listner to delet the item from shopping list
  deleteBtn.addEventListener("click", (e) => {
    const itemToDelete = e.target;
    const parentOfDeleteItem = itemToDelete.parentElement;
    parentOfDeleteItem.remove();
  });

  //   append the children elements
  shoppingItemsSection.appendChild(newDiv);
  newDiv.appendChild(newItemInPara);
  newDiv.appendChild(completedBtn);
  newDiv.appendChild(unCompleted);
  newDiv.appendChild(deleteBtn);

  //   clear input
  inputText.value = "";
}
