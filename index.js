showNotes();
    // storing the element which having id=addBtn in var. addBtn(which give us button)
let addBtn=document.getElementById("addBtn");
    // We applying eventlistener click on the var.addBtn
addBtn.addEventListener('click',function(e){
    // in this function if anyone click var.addBtn then
    // here we take here we take element which having id=addTxt in var. addTxt(which give us textArea);   
let addTxt=document.getElementById("addTxt");
// here below we make a var notes which get the values from localStorage which having the key=notes;
let notes=localStorage.getItem("notes");
//and then we put condition on it if var notes don't have any value than intilize the notesObj as array(!important)
if(notes==null){
    notesObj=[];
}
// else "Change the string which is in the notes into array(JSON.parse(notes)"
else{
    // we convert the notes string to array and storing in notesObj's array
    notesObj=JSON.parse(notes);
}
//here we push the textArea's text(string:addTxt.values) in notesObj(array) as an element  
notesObj.push(addTxt.value);
// here we set item in local storage 
localStorage.setItem("notes",JSON.stringify(notesObj));
// reset the text area field(intilize the text area field)    
addTxt.value="";
// now we call the show function
showNotes();
})

// function to show the element from local Storage
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
        
    }
    // here we take a var.html and intilize is as a string
    let html="";
    // we take notesObj(which is an array) and apply in loop for getting its element
    notesObj.forEach(function(element,index){
        // here we call card'dom for each element of notesObj
        // it give us card for each element of notesObj(array)and function print as its var. element
        // so by this every element of array print in different cards 
        html+=`
        <div class="noteCard card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Notes ${index+1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Node</button>
        </div></div>`;
    });
    // here we take html element in notesEle var. 
    let notesEle=document.getElementById('notes');
    // if notesObj till don't have empty inject var.html values in place of value of notesEle  
    if(notesObj.length!=0){
        notesEle.innerHTML=html;
    }
    else{
        // else print below  
        notesEle.innerHTML=`Nothing to show!Use "Add a Note" section above to add notes`;
    }
}
function deleteNode(index){
console.log("i am delete note",index);
let notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}
// console.log("before delete");
// console.log(notesObj);
// here we remove the element from notesobj onclick of button delete note
notesObj.splice(index,1);
// console.log("after delete");
// console.log(notesObj);
// after removing element from notesObj we update the notes's(key) value(notesObj) in local Storage
localStorage.setItem("notes",JSON.stringify(notesObj));
// now showNotes function update the your notes section
showNotes();
}
// for searching the notes-------------->
// get element which having id=searchTxt
let search=document.getElementById('searchTxt');
//applying event listener of input type(input Eventlistener listen the event when you write somthing)
// and when write somthing through search(var.)element function is called  
search.addEventListener("input",function(){
    //take var.inputVal and put the value of search in this var. with changing in lowercase
    let inputVal=search.value.toLowerCase();
    // console.log("input event fired",inputVal);
    // get all elements of class which having name searchTxt(ClassName=searchTxt)
    let noteCard=document.getElementsByClassName("noteCard");
    console.log(noteCard);
    // here we take all elements of noteCard Class in a array
    // Array.from(noteCard).forEach(function(element){
        // if the var. element have p tag we convert it into string and then.....
        // let cardTxt=element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        // .....we apply if conditon for matching string of inputVal with the cardTxt
        // if matched then we display the block
    //     if(cardTxt.includes(inputVal)){
            
    //         element.style.display="block";
    //     }
    //     else{
    //         element.style.display="none";
    //     }

    // })
 
})