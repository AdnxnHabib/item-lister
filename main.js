let form = document.getElementById('addform') //this puts the submit form in a variable
let itemlist = document.getElementById('items') // this puts the ul list in a variable
let search = document.getElementById('filter')

//Just some practice


search.addEventListener('keyup',find);
form.addEventListener('submit',additem);
itemlist.addEventListener('click', removeitem);

function find(e){
   let text = e.target.value.toLowerCase();

   let items = itemlist.getElementsByTagName('li');

   Array.from(items).forEach(function(item){

    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }

   });
}

function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure")){
            let li = e.target.parentElement;
            itemlist.removeChild(li);

        }
    }


}


function additem(e){

    e.preventDefault();

    //gets input
    let newitem = document.getElementById('item').value;
    let newbutton = document.createElement('button');
    newbutton.className = 'btn btn-danger btn-sm float-right delete';


    var li = document.createElement('li');

    li.className = 'list-group-item';
    console.log(li);

    li.textContent = newitem;
    newbutton.appendChild(document.createTextNode("X"));
  
  
    li.appendChild(newbutton);
    itemlist.appendChild(li);

}
