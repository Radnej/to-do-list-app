
function newItem(){

  //javascript
  //1. Adding a new item to the list of items:
  let listItem = $('<li></li>');
  let inputValue = $('#input').val()
  listItem.append(inputValue);

  if (inputValue === '') {
    alert('You must write something')
  } else {
    $('#list').append(listItem)
  }

  //2. Crossing out an item from the list of items:

  listItem.on('dblclick', function () {
    listItem.toggleClass('strike');
  });

  //3(i). Adding the delete button "X":

  let deleteButton = $('<button></button>');
  deleteButton.append(document.createTextNode('X'));
  listItem.append(deleteButton);

  deleteButton.on("click", deleteListItem);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    listItem.addClass("delete")
  }
  // 4. Reordering the items:
  $('#list').sortable();
}
