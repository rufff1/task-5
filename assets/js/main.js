













var btn_add=document.getElementById('btn_add');



btn_add.onclick=function() {
   
    var text=document.getElementById('inp').value;
    var h3=document.createElement('h3');
    var div=document.createElement('div');
    var icon=document.createElement('i');
    icon.setAttribute('id','delete');
    div.setAttribute('class','box')
    icon.setAttribute('class','fa-solid fa-trash-can'); 
    h3.innerHTML=text;
    var todo=document.getElementById('todo');
    div.appendChild(h3);
    div.appendChild(icon);
    todo.appendChild(div);

   
   
    var i_delete=document.querySelectorAll('#delete');
    for (let i= 0; i < i_delete.length; i++) {

    i_delete[i].onclick=function(e){
            var parent=e.target.parentElement;
               parent.remove(); 
    }
   
   }


}
