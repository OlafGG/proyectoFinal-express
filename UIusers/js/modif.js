window.onload = init;
var headers = {};
var id_b;
var url = "http://localhost:3000";

function init() {
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token") 
            }
        }
        
        
        loadUsers();

             
    }else{
        window.location.href = "login.html";
    }
}

function loadUsers(){
    id_b = localStorage.getItem("id_p");
    axios(
        {
            headers,
            method: 'get',
            url: 'http://localhost:3000/user',        
            data: {
                empleado_id : id_b
            }
        }
    )
    .then(function(res){
        console.log(res);
        displayUsers(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
    
    console.log("Esta sera la id que necesito para modificar: "+id_b);
   
}

function displayUsers(user) {
    console.log("Esto entro hasta aca; "+user);
    var body = document.querySelector("div .input-on");
    
    body.innerHTML += `<input type="email" class="form-control" id="input-mail" placeholder="correo@dominio.ext" value="${user[id_b].correo_electronico}">`;

    // for(var i = 0; i < user.length; i++){
}

