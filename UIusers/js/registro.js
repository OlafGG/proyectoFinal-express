window.onload = init;
var headers = {};
var url = "http://localhost:3000";


function init() {

    if (localStorage.getItem("token")){
        headers = {
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token") 
            }
        }
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "users.html"
        });
        
        document.querySelector('.btn-primary').addEventListener('click', singin);
    }
    else{
        window.location.href = "users.html"
    }
}

function agregar(){
    axios.post(url + "/user/userpost", headers)
    .then(singin())
    .catch(function(err){
        console.log(err);
    })
}

function singin(){
    var mail = document.getElementById('input-mail').value;
    var name = document.getElementById('input-name').value;
    var name2 = document.getElementById('input-name2').value;
    var number = document.getElementById('input-number').value;
    var adress = document.getElementById('input-adress').value;

    console.log("Pasando por aqui");
    console.log(mail, name, name2, number, adress, headers);

    axios(        
        {
        method: 'post',
        headers,
        url: 'http://localhost:3000/user/userpost',        
        data: {
            correo_elecctronico : mail,
            empleado_name : name,
            empleado_apellido : name2,
            empleado_telefono : number,
            empleado_direccion : adress
        }
    }).then(function(res){
        console.log(res);
        alert("Registro exitoso");
        window.location.href = "users.html";
    }).catch(function(err){

        console.log(err);
    })
}