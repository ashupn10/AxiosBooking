let form = document.getElementById('form');
let input=form.querySelectorAll('input');
let users=document.getElementById('users');
// let ul=document.getElementById('list');
// console.log(ul);
function myobj(username,email){
    this.username=username;
    this.email=email;
}
// console.log(user);
input[2].addEventListener('click',()=>{
    let username=input[0].value;
    let email=input[1].value;
    // let usernamestring=tooString(username);
    // let user=JSON.stringify(new myobj(username,email));
    axios.post('https://crudcrud.com/api/ebbcc4db023f4037b44e5fc902a35b59/Bookings',{
        username: username,
        email: email
    })
    .then(res=>console.log(res,"  Done  "))
    .catch(err=>console.log(err));
})
