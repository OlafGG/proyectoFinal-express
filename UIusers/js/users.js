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

        document.querySelector('.btn_cerrar').addEventListener('click', function(){
            var opcion = confirm("¿Desea cerrar la sesion activa?");
            if(opcion == true){
                alert("Cerrando Sesion");
                localStorage.removeItem("token");
                window.location.href="index.html";
            }else{
                
            }
            
        });
        
        

        //document.querySelector('.btn-buscar').addEventListener('click', BuscarUser());
        //document.querySelector('.btn_cerrar').addEventListener('click', cerrando());
        //document.querySelector('.btn-quaternary').addEventListener('click', login);
    }else{
        window.location.href = "login.html";
    }
    
    
}
/* document.querySelector('.btn_cerrar').addEventListener('click', function cerrando(){
    localStorage.removeItem("token");
    window.location.href="index.html";
}); */

let dt;

function agregar(numid){
    dt = numid;
    guardarCL(dt);
    
}

function guardarCL(idt){
    var gdt = idt;
    localStorage.setItem("id_p", gdt);
    //console.log(gdt);
    window.location.href ="modif.html";
}

function BuscarUser(user2){
    var name_b = document.getElementById('input-buscar').value;


    axios({
        method: 'post',
        url: 'http://localhost:3000/user/oneuser',
        data: {
            empleado_nombre : name_b
        }
    }).then(function(res){
        console.log(res.data);
        var personal = name_b;
        if(res.data.code === 200){
            (function (personal){
                var body = document.querySelector("tbody");
                body.innerHTML +=  `<tr>
                <td>${user2.empleado_id}</td>
                <td>${user2.correo_electronico}</td>
                <td>${user2.empleado_nombre}</td>
                <td>${user2.empleado_apellido}</td>
                <td>${user2.empleado_telefono}</td> 
                <td>${user2.empleado_direccion}</td> 
                <td>
                <button href="../modif.html" id="${[i]}" class="mod">Modificar</button>
                <button href="" class="del">Eliminar</button>
                </td></tr>`;
            });
           
        }else{
            alert("Usuario y/o contraseña incorrectos");
        }
    }).catch(function(err){
        console.log(err);
    })
}

function deleteUser(numid){
    var id = numid;
    console.log("aqui estoy 2vnjksfhgkvsj");
    alert("Se eliminara este Empleado con id: "+id);
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
    var body = document.querySelector("tbody");
    for(var i = 0; i < user.length; i++){
        body.innerHTML += `<tr>
        <td>${user[i].empleado_id}</td>
        <td>${user[i].correo_electronico}</td>
        <td>${user[i].empleado_nombre}</td>
        <td>${user[i].empleado_apellido}</td>
        <td>${user[i].empleado_telefono}</td> 
        <td>${user[i].empleado_direccion}</td> 
        <td>
        <button onclick="agregar(${user[i].empleado_id})" class="mod">Modificar</button>
        <button onclick="deleteUser(${user[i].empleado_id})"class="btn6 btn-del">Eliminar</button>
        </td></tr>`;
    }
}

