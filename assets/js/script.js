// Defining variables
  var list = document.querySelector('#list'),
  form = document.querySelector('form'),
  item = document.querySelector('#item');
  allDlt = document.querySelector('#allDlt');
  var newItem;
  var dltBTn;
  var names;

  // var oldNames = JSON.parse(localStorage.getItem("names"));
  const oldNames = localStorage.getItem('names');
  if (oldNames) {
    names = JSON.parse(oldNames);
} else {
    names = [];
  localStorage.setItem("names", JSON.stringify(names));
}
// all delete button show and hide
let   AllDeleteDisplay = () =>{
  if (list.childElementCount > 0) {
    allDlt.classList.add("active");
  } else{
    allDlt.classList.remove("active");
    list.innerHTML = 'please add value for results';
  }
}

// randerFunction : For rendering updated list 
let randerFunction = () => {

    list.innerHTML = "";

  for (i = 0; i < names.length; i++) {
    newItem = document.createElement('Li');
  const template = `${names[i]}<button data-index-value=${i}>delete</button>`;
  newItem.innerHTML = template;
  list.appendChild(newItem);
  } 
  AllDeleteDisplay();
};

  randerFunction();

// deleteFunction : For rendering updated list 
let deleteFunction = (value) => {

    names.splice(value, 1)
  localStorage.setItem("names", JSON.stringify(names));

  randerFunction();

};



  // Submit Form Trigger
  form.addEventListener('submit', function (e) {
    e.preventDefault();

  if (item.value !== "") {
    names.push(item.value);
  localStorage.setItem("names", JSON.stringify(names));
  item.value = "";
  }
  randerFunction();
});


  // Remove List Element
  list.addEventListener('click', function (e) {
  if (e.target.attribute = "data-index-value") {
    deleteFunction(e.target.getAttribute("data-index-value"))
  } else {
    console.log("click dlt button for delete element");
  }
  AllDeleteDisplay();
});


  // remove All List Items
  allDlt.addEventListener('click', function () {
    list.innerHTML = '';
  names = [];
  allDlt.classList.remove("active");
  localStorage.setItem("names", JSON.stringify(names));
  item.value = "";
  randerFunction();
});