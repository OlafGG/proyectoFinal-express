window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token") 
            }
        }
        loadUsers();

        document.querySelector('.btn-primary').addEventListener('click', deleteUser());
        //document.querySelector('.btn-quaternary').addEventListener('click', login);
    }else{
        window.location.href = "login.html";
    }
    
    
}

function deleteUser(){
    console.log("aqui estoy 2vnjksfhgkvsj")
    
}

function loadUsers() {
    axios.get(url + "/user", headers)
    .then(function(res){
        console.log(res);
        displayUsers(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
}

function displayUsers(user) {
    var body = document.querySelector("body");
    for(var i = 0; i < user.length; i++){
        body.innerHTML += `<h3>${user[i].user_name}</h3>`;
    }
}