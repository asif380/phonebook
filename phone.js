class info{
    constructor(name,email,phone,birthday){
        this.name = name
        this.email = email
        this.phone = phone
        this.birthday= birthday

       let booklist= document.querySelector('#contact-list')
        let elm = document.createElement('tr');
        elm.innerHTML =`
        <td>${this.name}</td>
        <td>${this.email}</td>
        <td>${this.phone}</td>
        <td>${this.birthday}</td>
        <td> <a href='#' id='rmv'>Remove</a></td>
        `
        booklist.appendChild(elm)   
        // localstore(elm.innerText)
           
    }
     
}



document.querySelector('#mbtn').addEventListener('click',()=>{
let nam = document.querySelector('#name').value
let email = document.querySelector('#email').value
let phone = document.querySelector('#phone').value
let birthday = document.querySelector('#birthday').value

if(nam||email|| phone|| birthday !== ''){
    new info(nam,email,phone,birthday)
}
else{
    alert('Please input all the field')

}
document.querySelector('#name').value=''
document.querySelector('#email').value=''
document.querySelector('#phone').value=''
document.querySelector('#birthday').value=''

})
 document.querySelector('.progress').style.display = 'none'


 document.querySelector('#contact-list').addEventListener('click',(e)=>{
let target = e.target
     
if(target.hasAttribute('href')){
    document.querySelector('.progress').style.display = 'block';
setTimeout(function(){
    document.querySelector('.progress').style.display = 'none';
},3000)
    if(confirm('Are you sure?')){
target.parentElement.parentElement.remove()

    }
}
})

document.querySelector('#search').addEventListener('keyup',()=>{
    let val = document.querySelector('#search').value
    let contact = document.querySelectorAll('#contact-list tr')
contact.forEach(function(row){
if(row.children[0].textContent.indexOf(val)!= -1){
    row.style.display = 'table-row'
}else{
    row.style.display = 'none'

}
    })
    
})




 

