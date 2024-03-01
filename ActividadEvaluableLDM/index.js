let inputnombre = document.querySelector("input#input-nombre");
let inputapellido = document.querySelector("input#input-apellido");
let inputcorreo = document.querySelector("input#input-correo");
let selectdepartamento = document.querySelector("select#select-departamento");
let boton = document.querySelector("#boton-enviar");
let botonbusqueda=document.querySelector("#boton-busqueda");
let parrafoit =document.querySelector("#it");
let parrafomrk =document.querySelector("#mrk");
let parrafovnt =document.querySelector("#vnt");
let parrafoadm =document.querySelector("#adm");
let listaTrabajadores = document.querySelector("#lista-trabajadores");
let contadorcoincidencias= {
  IT:0,
  Marketing:0,
  Ventas:0,
  Administracion:0
};


boton.addEventListener("click", () => {
    if(inputnombre.value.length>0 && inputapellido.value.length>0 && inputcorreo.value.length>0 && selectdepartamento.value.length>0){
    let nodo=document.createElement("li");
    nodo.textContent=`${inputnombre.value} ${inputapellido.value} ${inputcorreo.value} ${selectdepartamento.value}`;
   nodo.className="animated__animated animate__bounceIn list-group-item";
   listaTrabajadores.append(nodo);
   inputnombre.value="";
    inputapellido.value="";
    inputcorreo.value="";
    selectdepartamento.value="Selecciona un departamento";
    Swal.fire({
        title: '¡Muy bien!',
        text: 'Trabajador añadido correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }else{
        Swal.fire({
            title: '¡Error!',
            text: 'Campos vacíos',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
})

botonbusqueda.addEventListener("click", () => {
  let departamentoSeleccionado=selectdepartamento.value;
  contadorcoincidencias[departamentoSeleccionado]++;
   if(selectdepartamento.value==="IT"){
    parrafoit.textContent=`Número de selecciones para IT: ${contadorcoincidencias.IT}`;
   }else if (selectdepartamento.value==="Marketing"){
      parrafomrk.textContent=`Número de selecciones para Marketing: ${contadorcoincidencias.Marketing}`;
    }else if(selectdepartamento.value==="Ventas"){
        parrafovnt.textContent=`Número de selecciones para Ventas: ${contadorcoincidencias.Ventas}`;
      } else{
        parrafoadm.textContent=`Número de selecciones para Administración: ${contadorcoincidencias.Administracion}`;
      }
      Swal.fire({
        title: '¡Muy bien!',
        text: 'Departamentos contados correctamente',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      });
