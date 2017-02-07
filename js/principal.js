//**Llamada a gestión**//
var oGestion= new Gestion();
//********************//
//**Cragar datos desde XML**//
function loadXMLDoc(filename)
{
    if (window.XMLHttpRequest)
      {
      xhttp=new XMLHttpRequest();
      }
    else // code for IE5 and IE6
      {
      xhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xhttp.open("GET",filename,false);
    
    xhttp.send();
    
    return xhttp.responseXML;
} 

//--Cargar Centros--//
var oXML = loadXMLDoc("xml/centros.xml");
var oCentros = oXML.getElementsByTagName("centro");

for (var i = 0; i < oCentros.length; i++) 
{
    var id = oCentros[i].getElementsByTagName("id")[0].textContent;
    var nombre = oCentros[i].getElementsByTagName("nombre")[0].textContent;
    var localizacion = oCentros[i].getElementsByTagName("localizacion")[0].textContent;
    
   var oCentro= new Centro(id,nombre,localizacion);
   var aux = oGestion.darAltaCentro(oCentro);
}

//--Cargar Cursos--//
var oXML = loadXMLDoc("xml/cursos.xml");
var oCursos = oXML.getElementsByTagName("curso");

for (var i = 0; i < oCursos.length; i++) 
{
    var id = oCursos[i].getElementsByTagName("id")[0].textContent;
    var nombre = oCursos[i].getElementsByTagName("nombre")[0].textContent;
    var fecha_ini = oCursos[i].getElementsByTagName("fecha_ini")[0].textContent;
    var fecha_fin = oCursos[i].getElementsByTagName("fecha_fin")[0].textContent;
    var descripcion = oCursos[i].getElementsByTagName("descripcion")[0].textContent;
    var precio = oCursos[i].getElementsByTagName("precio")[0].textContent;
    
   var oCurso= new Curso(id,nombre,fecha_ini,fecha_fin,descripcion,precio);
   var aux = oGestion.darAltaCurso(oCurso);
}

//--Cargar Profesor--//
var oXML = loadXMLDoc("xml/alumnos.xml");
var oProfesores = oXML.getElementsByTagName("profesor");

for (var i = 0; i < oProfesores.length; i++) 
{
    var id = oProfesores[i].getElementsByTagName("dni")[0].textContent;
    var nombre = oProfesores[i].getElementsByTagName("nombre")[0].textContent;
    var apellidos = oProfesores[i].getElementsByTagName("apellidos")[0].textContent;
    var edad = oProfesores[i].getElementsByTagName("edad")[0].textContent;
    var fecha_nac = oProfesores[i].getElementsByTagName("fecha_nac")[0].textContent;
    var telefono = oProfesores[i].getElementsByTagName("telefono")[0].textContent;
    var direccion = oProfesores[i].getElementsByTagName("direccion")[0].textContent;


   var oProfesor= new Profesor(id,nombre,apellidos,edad,fecha_nac,telefono, direccion);
   var aux = oGestion.darAltaProfesor(oProfesor);
}


//--Cargar Alumnos--//
var oXML = loadXMLDoc("xml/alumnos.xml");
var oAlumnos= oXML.getElementsByTagName("alumno");

for (var i = 0; i < oAlumnos.length; i++) 
{
    var id = oAlumnos[i].getElementsByTagName("dni")[0].textContent;
    var nombre = oAlumnos[i].getElementsByTagName("nombre")[0].textContent;
    var apellidos = oAlumnos[i].getElementsByTagName("apellidos")[0].textContent;
    var edad = oAlumnos[i].getElementsByTagName("edad")[0].textContent;
    var fecha_nac = oAlumnos[i].getElementsByTagName("fecha_nac")[0].textContent;
    var telefono = oAlumnos[i].getElementsByTagName("telefono")[0].textContent;
    var direccion = oAlumnos[i].getElementsByTagName("direccion")[0].textContent;


   var oAlumno= new Alumno(id,nombre,apellidos,edad,fecha_nac,telefono, direccion);
   var aux = oGestion.darAltaAlumno(oAlumno);
}



//--Cargar Grupos--//
var oXML = loadXMLDoc("xml/grupos.xml");
var oGrupos = oXML.getElementsByTagName("grupo");

for (var i = 0; i < oGrupos.length; i++) 
{
   var id = oGrupos[i].getElementsByTagName("id")[0].textContent;
   var nombre = oGrupos[i].getElementsByTagName("nombre")[0].textContent;    
   var oGrupo= new Grupo(id,nombre);
   var aux = oGestion.darAltaGrupo(oGrupo);

}

//--Cargar Asignaturas--//
var oXML = loadXMLDoc("xml/asignaturas.xml");
var oAsignaturas = oXML.getElementsByTagName("asignatura");

for (var i = 0; i < oAsignaturas.length; i++) 
{
   var id = oAsignaturas[i].getElementsByTagName("id")[0].textContent;
   var nombre = oAsignaturas[i].getElementsByTagName("nombre")[0].textContent;    
   var oAsignatura= new Asignatura(id,nombre);
   var aux = oGestion.darAltaAsignatura(oAsignatura);
   
}






//**************************//
/**---------------------OCULTAR Y MOSTRAR LOS FORMULARIOS-------------*/
/*--------Formularios de alta*/
document.getElementById("btnAltaAlumno").addEventListener('click',btnAltaAlumno);
document.getElementById("btnAltaProfesor").addEventListener("click",btnAltaProfesor);
document.getElementById("btnAltaGrupo").addEventListener("click",btnAltaGrupo);
document.getElementById("btnAltaCurso").addEventListener("click",btnAltaCurso);
document.getElementById("btnAltaCentro").addEventListener("click",btnAltaCentro);
document.getElementById("btnAltaAsignatura").addEventListener("click",btnAltaAsignatura);
/*-----Formularios de baja*/
document.getElementById("btnBajaAlumno").addEventListener('click',btnBajaAlumno);
document.getElementById("btnBajaProfesor").addEventListener("click",btnBajaProfesor);
document.getElementById("btnBajaGrupo").addEventListener("click",btnBajaGrupo);
document.getElementById("btnBajaCurso").addEventListener("click",btnBajaCurso);
document.getElementById("btnBajaCentro").addEventListener("click",btnBajaCentro);
document.getElementById("btnBajaAsignatura").addEventListener("click",btnBajaAsignatura);


function btnAltaAlumno(){
    eliminarListadosYMensajes();
    ocultarFormularios();
	document.formuAltaAlum.style.display="block";

}
function btnAltaProfesor(){
    eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaProfe.style.display="block";

}
function btnAltaGrupo(){
    eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaGrupo.style.display="block";
}
function btnAltaCurso(){
    eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaCurso.style.display="block";
}
function btnAltaCentro(){
    eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaCentro.style.display="block";	
}
function btnAltaAsignatura(){
    eliminarListadosYMensajes();
	ocultarFormularios();
	document.formuAltaAsignatura.style.display="block";
}
/*----------Funciones de baja-----*/
function btnBajaAlumno(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaAlum.style.display="block";

}
function btnBajaProfesor(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaProfe.style.display="block";

}
function btnBajaGrupo(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaGrupo.style.display="block";
}
function btnBajaCurso(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaCurso.style.display="block";
}
function btnBajaCentro(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaCentro.style.display="block"; 
}
function btnBajaAsignatura(){
    eliminarListadosYMensajes();
    ocultarFormularios();
    document.formuBajaAsignatura.style.display="block";
}
/*----------Funciones de Listados-----*/

var listaAlumnos = document.getElementById("btnListaAlumnos");
listaAlumnos.addEventListener("click",tablaAlumnos);

var listaProfesores = document.getElementById("btnListaProfesores");
listaProfesores.addEventListener("click",tablaProfesor);

var listaCursos = document.getElementById("btnListaCursos");
listaCursos.addEventListener("click",tablaCursos);

var listaGrupos = document.getElementById("btnListaGrupos");
listaGrupos.addEventListener("click",tablaGrupos);

document.getElementById("btnListaCentros").addEventListener('click',tablaCentros);
document.getElementById("btnListaAsignaturas").addEventListener('click',tablaAsignaturas);

document.getElementById("btnAnadirAlumGrupo").addEventListener('click',btnAnadirAlumGrupo);
document.getElementById("btnAnadirGrupoCurso").addEventListener('click',btnAnadirGrupoCurso);
document.getElementById("btnAsignarAsignaturasProfesor").addEventListener('click',btnAsignarAsignaturasProfesor);
document.getElementById("btnAnadirCursoCentro").addEventListener('click',btnAnadirCursoCentro);
document.getElementById("btnAnadirAsignaturas").addEventListener('click',btnAnadirAsignaturas);
document.getElementById("btnModificarCurso").addEventListener('click',btnModificarCurso);


function btnAnadirAlumGrupo(){
    ocultarFormularios();
    eliminarListadosYMensajes();
    var nAlumnos = oGestion.alumnos.length;
    var nGrupos = oGestion.grupos.length;

    
    if(nAlumnos>0 && nGrupos>0){
        var oForm = document.createElement('form');
        oForm.className="formu form-horizontal";
        oForm.setAttribute('name','formuAnadirAlumGrupo');
        var oCapa = document.createElement('div');
        oCapa.className="form-group";
        var oCapa2 = document.createElement('div');
        oCapa.className="form-group";
        
        var oSubCapa = document.createElement('div');
        oSubCapa.className="col-sm-6";
        var msg = document.createElement('h3');
        var txt = document.createTextNode("Seleccione el alumno a añadir");
        msg.appendChild(txt);
        oSubCapa.appendChild(msg);
        var selectAlum = document.createElement('select');
        selectAlum.setAttribute("id","select_nombreAlum");        
        selectAlum.multiple="multiple";
        // selectAlum.setAttribute('value',"alumnos[]")
        selectAlum.className="form-control";
        for(var i=0;i<nAlumnos;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.alumnos[i].sDni;
            var oNombre = oGestion.alumnos[i].sNombre;
            oOption.value=oValor;            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectAlum.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa.appendChild(selectAlum);
        oCapa.appendChild(oSubCapa);

        var oSubCapa2 = document.createElement('div');
        oSubCapa2.className="col-sm-6";        
        var selectGrup = document.createElement('select');
        selectGrup.setAttribute("id","select_nombreGrupo");
        selectGrup.className="form-control";
        for(var i=0;i<nGrupos;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.grupos[i].iId;
            var oNombre = oGestion.grupos[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectGrup.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa2.appendChild(selectGrup);
        oCapa2.appendChild(oSubCapa2);
        oForm.appendChild(oCapa);
        oForm.appendChild(oCapa2);
        var btnEnviar = document.createElement('input');
        btnEnviar.setAttribute('type',"button");
        btnEnviar.className="ocultar btn btn-primary";
        btnEnviar.setAttribute('id',"btnEnviarAnadirAlumGrupo");
        btnEnviar.setAttribute('value',"Enviar");
        var btnReset = document.createElement('input');
        btnReset.setAttribute('type',"button");
        btnReset.className="ocultar btn btn-default";
        btnReset.setAttribute('name',"btnResetAnadirAlumGrupo");
        btnReset.setAttribute('value',"Resetear campos");
        var contenido = document.querySelector("#contenido");
        contenido.appendChild(selectAlum);
        contenido.appendChild(selectGrup);
        contenido.appendChild(btnEnviar);
        contenido.appendChild(btnReset);
        // anadirAlumGrupo();
        document.getElementById("btnEnviarAnadirAlumGrupo").addEventListener('click',anadirAlumGrupo);


        
    }
    else{
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Alumnos ni Grupos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);
    }   

}

function anadirAlumGrupo()
{
    var grupo = document.getElementById("select_nombreGrupo").value;
    var alumno =document.getElementById("select_nombreAlum");
    var arrayOpt= [];

    //recorremos las opciones y guardamos las seleccionadas en arrayOpt
    for (var i = 0; i < alumno.options.length; i++){
        if (alumno.options[i].selected){
            arrayOpt.push(alumno.options[i].value);        
        }
    }

    var alumnoEncontrado=false;//para saber si el alumno ya está en el grupo
    var gIndice=0;//indice del grupo seleccionado
    
    

    for(var i=0;i<oGestion.grupos.length;i++)
    {//recorremos los grupos en busca de los alumnos seleccionados
        //recorremos los alumnos del grupo
        for(var j=0;j<oGestion.grupos[i].alumnos.length;j++)
        {//recorremos el array con los sDni de los alumnos seleccionados
            for(var q=0;q<arrayOpt.length;q++)
            {//si coincide el dni el alumno ya está en un grupo.
                if(oGestion.grupos[i].alumnos[j].sDni==arrayOpt[q])
                {
                    alumnoEncontrado=true;
                }
            }
        }
    }

    //si los alumnos no pertenecen a ningún grupo
    if(!alumnoEncontrado)
    {   
        //variable con el grupo seleccionado 
        var grupoElegido=buscarGrupo(grupo);
        for (var i = 0; i < arrayOpt.length; i++) 
        {
            var alumnoEncontrado= buscarAlumno(arrayOpt[i]);
          
            grupoElegido.alumnos.push(alumnoEncontrado);
        }
        toastr.success("Alumnos añadidos correctamente");
    }
    else
    {
        toastr.warning("Uno o más de los alumnos ya están en un grupo");
    }

}

function buscarGrupo(sId)
{
    var grupos= oGestion.grupos;
    var grupoDevolver=null;

    grupos.forEach(function(grupos)
    {
        if (grupos.iId==sId) 
        {
            grupoDevolver=grupos;
            //para salid del loop
            return false;
        }
    })   
    return grupoDevolver;
}

function btnAnadirGrupoCurso(){
    ocultarFormularios();
    eliminarListadosYMensajes();    
    var nGrupos = oGestion.grupos.length;
    var nCursos = oGestion.cursos.length;

    
    if(nGrupos>0 && nCursos>0){
        var oForm = document.createElement('form');
        oForm.className="formu form-horizontal";
        oForm.setAttribute('name','formuAnadirGrupoCurso');
        var oCapa = document.createElement('div');
        oCapa.className="form-group";
        var oCapa2 = document.createElement('div');
        oCapa.className="form-group";
        
        var oSubCapa = document.createElement('div');
        oSubCapa.className="col-sm-6";
        var msg = document.createElement('h3');
        var txt = document.createTextNode("Seleccione el grupo a añadir");
        msg.appendChild(txt);
        oSubCapa.appendChild(msg);
        var selectGrupo = document.createElement('select');
        selectGrupo.setAttribute("id","select_nombreGrupo");
        selectGrupo.multiple="multiple";
        selectGrupo.className="form-control";
        for(var i=0;i<nGrupos;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.grupos[i].iId;
            var oNombre = oGestion.grupos[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectGrupo.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa.appendChild(selectGrupo);
        oCapa.appendChild(oSubCapa);

        var oSubCapa2 = document.createElement('div');
        oSubCapa2.className="col-sm-6";        
        var selectCurso = document.createElement('select');
        selectCurso.setAttribute("id","select_nombreCurso");        
        selectCurso.className="form-control";
        for(var i=0;i<nCursos;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.cursos[i].sId;
            var oNombre = oGestion.cursos[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectCurso.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa2.appendChild(selectCurso);
        oCapa2.appendChild(oSubCapa2);
        oForm.appendChild(oCapa);
        oForm.appendChild(oCapa2);
        var btnEnviar = document.createElement('input');
        btnEnviar.setAttribute('type',"button");
        btnEnviar.className="ocultar btn btn-primary";
        btnEnviar.setAttribute('id',"btnEnviarAnadirGrupoCurso");
        btnEnviar.setAttribute('value',"Enviar");
        var btnReset = document.createElement('input');
        btnReset.setAttribute('type',"button");
        btnReset.className="ocultar btn btn-default";
        btnReset.setAttribute('name',"btnResetAnadirGrupoCurso");
        btnReset.setAttribute('value',"Resetear campos");
        var contenido = document.querySelector("#contenido");
        contenido.appendChild(selectGrupo);
        contenido.appendChild(selectCurso);
        contenido.appendChild(btnEnviar);
        contenido.appendChild(btnReset);
        document.getElementById("btnEnviarAnadirGrupoCurso").addEventListener('click',anadirGrupoCurso);


        
    }
    else{
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Alumnos ni Grupos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);
    }

}
function btnAnadirAsignaturas()
{
    ocultarFormularios();
    eliminarListadosYMensajes();    
    var nAsignaturas = oGestion.asignaturas.length;
    var nCursos = oGestion.cursos.length;

    
    if(nAsignaturas>0 && nCursos>0){
        var oForm = document.createElement('form');
        oForm.className="formu form-horizontal";
        oForm.setAttribute('name','formuAnadirAsignatura');
        var oCapa = document.createElement('div');
        oCapa.className="form-group";
        var oCapa2 = document.createElement('div');
        oCapa.className="form-group";
        
        var oSubCapa = document.createElement('div');
        oSubCapa.className="col-sm-6";
        var msg = document.createElement('h3');
        var txt = document.createTextNode("Seleccione la asignatura a añadir");
        msg.appendChild(txt);
        oSubCapa.appendChild(msg);
       
        var selectAsignatura= cargarSelectAsignaturas();
        var selectCurso =cargarSelectCursos();

        oSubCapa.appendChild(selectAsignatura);
        oCapa.appendChild(oSubCapa);

        var oSubCapa2 = document.createElement('div');
        oSubCapa2.className="col-sm-6";        
        

        oSubCapa2.appendChild(selectCurso);
        oCapa2.appendChild(oSubCapa2);
        oForm.appendChild(oCapa);
        oForm.appendChild(oCapa2);
        var btnEnviar = document.createElement('input');
        btnEnviar.setAttribute('type',"button");
        btnEnviar.className="ocultar btn btn-primary";
        btnEnviar.setAttribute('id',"btnEnviarAnadirAsignatura");
        btnEnviar.setAttribute('value',"Enviar");
        var btnReset = document.createElement('input');
        btnReset.setAttribute('type',"button");
        btnReset.className="ocultar btn btn-default";
        btnReset.setAttribute('name',"btnResetAnadirAsignatura");
        btnReset.setAttribute('value',"Resetear campos");
        var contenido = document.querySelector("#contenido");
        contenido.appendChild(selectAsignatura);
        contenido.appendChild(selectCurso);
        contenido.appendChild(btnEnviar);
        contenido.appendChild(btnReset);
        document.getElementById("btnEnviarAnadirAsignatura").addEventListener('click',anadirAsignaturas);


        
    }
    else{
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Alumnos ni Grupos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);
    }

}
function cargarSelectAsignaturas()
{
    var selectAsignatura = document.createElement('select');
    selectAsignatura.setAttribute("id","select_nombreAsignatura");
    selectAsignatura.multiple="multiple";
    selectAsignatura.className="form-control";

    for(var i=0;i<oGestion.asignaturas.length ;i++)
    {
        var oOption = document.createElement('option');
        var oValor = oGestion.asignaturas[i].iIdAsignatura;
        var oNombre = oGestion.asignaturas[i].sNombreAsignatura;
        oOption.setAttribute('value',oValor);            
        var texto = document.createTextNode(oNombre);
        oOption.appendChild(texto);
        selectAsignatura.appendChild(oOption);
    }
        return selectAsignatura;
}
function anadirAsignaturas()
{

    var sId= document.getElementById("select_nombreCurso").value;
    var asignaturas =document.getElementById("select_nombreAsignatura");
    var arrayOpt= [];
    
    //recorremos el select y guardamos las asignaturas seleccionadas en arrayOpt
    for (var i = 0; i < asignaturas.options.length; i++)
    {
        if (asignaturas.options[i].selected)
        {
            arrayOpt.push(asignaturas.options[i].value);        
        }
    }

    var asignaturaEncontrado=false;
    var cursoSeleccionado=buscarCurso(sId);

    //recorremos las asignaturas del cursoSeleccionado 
    for(var j=0;j<cursoSeleccionado.asignaturas.length;j++)
    {//recorremos el array con las asignaturas seleccionadas
        for(var q=0;q<arrayOpt.length;q++)
        {//si se encuentran las asignaturas seleccionadas en el curso
            if(cursoSeleccionado.asignaturas[j].iIdAsignatura==arrayOpt[q])
            {
                asignaturaEncontrado=true;
            }
        }
    }

    //si el curso seleccionado no contiene las asignaturas seleccionadas
    if(asignaturaEncontrado==false)
    {//recorremos las asignaturas para agregarlas al curso
        for(var i=0;i<oGestion.asignaturas.length;i++)
        {//buscamos las asignaturas en la gestion
            for(var j=0;j<arrayOpt.length;j++)
            {//si coincide el id , nos quedamos con la asignatura y la añadimos al curso
                if(oGestion.asignaturas[i].iIdAsignatura==arrayOpt[j])
                {

                    cursoSeleccionado.asignaturas.push(oGestion.asignaturas[i]);
                }    
            }    
        }

        //recorremos los objetos asignaturas y los añadimos a los alumnos del grupo
        //recorremos los grupos del curso
        for (var i = 0; i < cursoSeleccionado.grupos.length; i++) 
        {
            for (var j = 0; j < cursoSeleccionado.grupos[i].alumnos.length; j++) 
            {
                cursoSeleccionado.grupos[i].alumnos[j].asignaturas=arrayAsignaturasSeleccionados.slice(0);
                /*****************AÑADIR array asignaturas alumno a array notas alumno******************/
                var nota= new aNota( cursoSeleccionado.grupos[i].alumnos[j].asignaturas[j],0);

                for (var f = 0; f < cursoSeleccionado.grupos[i].alumnos[j].asignaturas.length; f++) 
                {
                    var nota = new aNota(cursoSeleccionado.grupos[i].alumnos[j].asignaturas[f],0);
                    cursoSeleccionado.grupos[i].alumnos[j].aNotas.push(nota);
                }
            }
        }
        toastr.success("Asignaturas añadidas correctamente");
    }
    else
    {
        toastr.warning("No se puede repetir una asignatura en un curso");
    }

}

function btnAnadirCursoCentro()
{
    ocultarFormularios();
    eliminarListadosYMensajes();    
    var nCentros = oGestion.centros.length;
    var nCursos = oGestion.cursos.length;

    
    if(nCentros>0 && nCursos>0)
    {
        var oForm = document.createElement('form');
        oForm.className="formu form-horizontal";
        oForm.setAttribute('name','formuAnadirCursoCentro');
        var oCapa = document.createElement('div');
        oCapa.className="form-group";
        var oCapa2 = document.createElement('div');
        oCapa.className="form-group";
        
        var oSubCapa = document.createElement('div');
        oSubCapa.className="col-sm-6";
        var msg = document.createElement('h3');
        var txt = document.createTextNode("Seleccione el curso a añadir");
        msg.appendChild(txt);
        oSubCapa.appendChild(msg);
        var selectCentro = document.createElement('select');        
        selectCentro.setAttribute("id","select_nombreCentro");
        
        selectCentro.className="form-control";
        for(var i=0;i<nCentros;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.centros[i].iId;
            var oNombre = oGestion.centros[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectCentro.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa.appendChild(selectCentro);
        oCapa.appendChild(oSubCapa);

        var oSubCapa2 = document.createElement('div');
        oSubCapa2.className="col-sm-6";        
        var selectCurso = document.createElement('select');
        selectCurso.setAttribute("id","select_nombreCurso");
        selectCurso.multiple="multiple";
        selectCurso.className="form-control";
        for(var i=0;i<nCursos;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.cursos[i].sId;
            var oNombre = oGestion.cursos[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectCurso.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa2.appendChild(selectCurso);
        oCapa2.appendChild(oSubCapa2);
        oForm.appendChild(oCapa);
        oForm.appendChild(oCapa2);
        var btnEnviar = document.createElement('input');
        btnEnviar.setAttribute('type',"button");
        btnEnviar.className="ocultar btn btn-primary";
        btnEnviar.setAttribute('id',"btnEnviarAnadirCursoCentro");
        btnEnviar.setAttribute('value',"Enviar");
        var btnReset = document.createElement('input');
        btnReset.setAttribute('type',"button");
        btnReset.className="ocultar btn btn-default";
        btnReset.setAttribute('name',"btnResetAnadirCursoCentro");
        btnReset.setAttribute('value',"Resetear campos");
        var contenido = document.querySelector("#contenido");
        contenido.appendChild(selectCurso);
        contenido.appendChild(selectCentro);
        contenido.appendChild(btnEnviar);
        contenido.appendChild(btnReset);
        document.getElementById("btnEnviarAnadirCursoCentro").addEventListener('click',anadirCursoCentro);
        // anadirGrupoCurso();


        
    }
    else{
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Cursos o Centros registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);
    }

}
function anadirCursoCentro(){
    var centro = document.getElementById("select_nombreCentro").value;
    var curso =document.getElementById("select_nombreCurso");
    var arrayOpt= [];
    for (var i = 0; i < curso.options.length; i++){
        if (curso.options[i].selected){
            arrayOpt.push(curso.options[i].value);        
        }
    }
    var cursoEncontrado=false;
    var gIndice=0;
    var cursosDefinitivos=[];
    for(var i=0;i<oGestion.centros.length;i++){
        if(oGestion.centros[i].iId==centro)
            gIndice=i;
        
    }
    for(var j=0;j<oGestion.centros[gIndice].cursos.length;j++){
            for(var q=0;q<arrayOpt.length;q++){
                if(oGestion.centros[gIndice].cursos[j].sId==arrayOpt[q]){
                    cursoEncontrado=true;
                }
            }
    }
    var arrayCursosSeleccionados=[];
    if(cursoEncontrado==false){
        for(var i=0;i<oGestion.cursos.length;i++){
            for(var j=0;j<arrayOpt.length;j++){
                if(oGestion.cursos[i].sId==arrayOpt[j]){
                    arrayCursosSeleccionados.push(oGestion.cursos[i]);
                }    
            }    
            
        }
        for(var i=0;i<arrayCursosSeleccionados.length;i++){
            oGestion.centros[gIndice].cursos.push(arrayCursosSeleccionados[i]);
        }
        toastr.success("Cursos añadidos correctamente");
    }
    else{
        toastr.warning("No se puede repetir un curso en el mismo centro");
    }

}


document.querySelector("#btnAsignarNota").addEventListener("click",btnAsignarNota);

function btnAsignarNota()
{
    ocultarFormularios();
    eliminarListadosYMensajes();    
   
    var selectAlumnos = cargarSelectAlumnos();
    selectAlumnos.setAttribute("id","select_Alumnos_asignaturas");  
    var label = document.createElement("label");
    var etiqueta= document.createTextNode("Selecciona Alumno");
    label.appendChild(etiqueta);
    label.setAttribute("class","ocultar");
    var h3 =document.createElement("h3");
    var oTexto= document.createTextNode("Asignar Nota a alumno");  
    h3.appendChild(oTexto);  
    contenido.appendChild(h3);
    contenido.appendChild(label);
    contenido.appendChild(selectAlumnos);
    selectAlumnos.addEventListener("change",cargarSelectAsignaturasAlumno);
    //cargarAsignaturas(alumnoSeleccionado);
    //cargarSelectAsignaturasAlumno(sDni);
}
function cargarSelectAsignaturasAlumno(oEvento)
{
    var oE = window.event || oEvento;
    var sDni= oE.target.value;

    var alumno = buscarAlumno(sDni);
    var contenido=document.querySelector("#contenido");
    //inputs en tabla con las asignaturas y su id
     //creamos la tabla y tbody
    var oTabla=document.createElement("table");
    oTabla.id="tablaAsignarNota";
    if (alumno.aNotas.length>0) 
    {
            var thead = document.createElement("thead");
            //creamos los th
            var th1 = document.createElement("th");
            var id=document.createTextNode("ID");
            th1.appendChild(id);
            thead.appendChild(th1);

            var th2 = document.createElement("th");
            var nombre=document.createTextNode("Nombre");
            th2.appendChild(nombre);
            thead.appendChild(th2);
            oTabla.appendChild(thead);

            var th3 = document.createElement("th");
            var nombre=document.createTextNode("Nota");
            th3.appendChild(nombre);
            thead.appendChild(th3);
            oTabla.appendChild(thead);

        var tbody = document.createElement("tbody");
        for (var i = 0; i < alumno.aNotas.length; i++) 
        {
            if (i%2==0) 
            {
                //creamos filas
                var tr =document.createElement("tr");
                //creamos las celdas
                    //td con ID
                var td =tr.insertCell(-1);
                var nota =alumno.aNotas[i];
                var iId= nota.iIdAsignatura;
                var oTexto = document.createTextNode(iId);
                td.appendChild(oTexto);
                tr.appendChild(td);
                    //td con sNombre
                var td =tr.insertCell(-1);
                var sNombre =nota.sNombreAsignatura;
                var oTexto = document.createTextNode(sNombre);
                td.appendChild(oTexto);
                tr.appendChild(td);

                //td con input para nota

                var td =tr.insertCell(-1);
                var fNota= alumno.aNotas[i+1];
                var input =document.createElement("input");
                input.dataset.nota;
                input.value=fNota;
                td.appendChild(input);
                tr.appendChild(td);
                //AÑADIMOS LOS TR con sus td al tbody
                tbody.appendChild(tr);
            }    
        }
            oTabla.appendChild(tbody);
            //atributos de la tabla
            oTabla.setAttribute('border','1');
            oTabla.classList.add("tablasDinamicas")
            oTabla.classList.add("table");
            oTabla.classList.add("table-striped");
            //Añadimos la tabla de Profesor al documento
            var contenido=document.querySelector("#contenido");
            var titulo="Introduce las Notas del alumno";
            var oTexto2 = document.createTextNode(titulo);
            var h3 = document.createElement("h3");
            h3.id="tituloAsignarNota";
            h3.appendChild(oTexto2);
            contenido.appendChild(h3);
            contenido.appendChild(oTabla);

            var btnAñadirNota=document.createElement("button");
            btnAñadirNota.id="btnAñadirNota";
            btnAñadirNota.addEventListener("click",añadirNotaAlumno);
            var contenidoBtn=document.createTextNode("Añadir Notas");
            btnAñadirNota.appendChild(contenidoBtn);
            contenido.appendChild(btnAñadirNota);
    }
    else
    {
        if (contenido.querySelector("#tablaAsignarNota")!=null) 
        {
            var tablaAsignarNota=contenido.querySelector("#tablaAsignarNota");
            contenido.removeChild(tablaAsignarNota);
            var h3=contenido.querySelector("#contenido #tituloAsignarNota");
            contenido.removeChild(h3);
            var btn= contenido.querySelector("#btnAñadirNota");
            contenido.removeChild(btn);
        }
    }
    
}

function añadirNotaAlumno()
{
/*Se debe almacenar en un array las nuevas notas*/

//y se debe actualizar la aNotas.fNotas de las asignaturas;
}


function buscarAlumno(sDni)
{
    var alumnos= oGestion.alumnos;
    var alumnoDevolver=null;
    alumnos.forEach(function(alumnos)
    {
        if (alumnos.sDni==sDni) 
        {
            alumnoDevolver=alumnos;
            //para salir del loop
        }

    })   
    return alumnoDevolver;
}
function cargarSelectAlumnos()
{
    
    var selectAlumnos = document.createElement('select');
    selectAlumnos.setAttribute("id","select_Alumnos");        
    selectAlumnos.className="form-control";
    var oOptionDefault=document.createElement('option');
    var oNombreDefault = document.createTextNode("selecciona un Alumno");
    oOptionDefault.setAttribute("value","default");
    oOptionDefault.appendChild(oNombreDefault);
    selectAlumnos.appendChild(oOptionDefault);
    for(var i=0;i<oGestion.alumnos.length;i++)
    {
        var oOption = document.createElement('option');
        var oValor = oGestion.alumnos[i].sDni;
        var oNombre = oGestion.alumnos[i].sNombre;
        oOption.setAttribute('value',oValor);            
        var texto = document.createTextNode(oNombre);
        oOption.appendChild(texto);
        selectAlumnos.appendChild(oOption);
       
    }
     return selectAlumnos;
}
// function cargarAsignaturas(alumnoSeleccionado)
// {
//     var comboAsignaturas = document.createElement("select");
//     var sDni = alumnoSeleccionado.sDni;
//     var arrayAsignaturas= [ ];
//     for (var i = 0; i < oGestion.alumnos.length; i++) 
//     {
//         if ( oGestion.alumnos[i].sDni==sDni) 
//         {
//             var alumnoSeleccionado=oGestion.alumnos[i];
//              //buscamos el grupo
//             for (var j = 0; j < oGestion.grupos.length; j++) 
//             {
//                for (var k = 0 ; k < oGestion.grupos[j].alumnos.length; k++)
//                {
//                     if (oGestion.grupos[j].alumnos[k].sDni==sDni) 
//                     {
//                         var sIdGrupo=oGestion.grupos[j].sId;
//                         //una vez encontrado el grupo del alumno
//                         for (var l = 0; l < oGestion.cursos.length; l++) 
//                         {
//                             for (var m = 0; m <oGestion.cursos[l].grupos.length;m++) 
//                             {
//                                 if (oGestion.cursos[l].grupos[m].sId==sId) 
//                                 {
//                                     //encontrado curso al que pertenece el grupo
//                                    for(var n = 0 ; n < oGestion.cursos[l].asignaturas.length ;n++)
//                                    {
//                                     var idAs=oGestion.cursos[l].asignaturas[n].iIdAsignatura;
//                                     var nombreAsig = oGestion.cursos[l].asignaturas[n].sNombreAsignatura;
//                                     var asig = new Asignatura(idAs,nombreAsig);
//                                     arrayAsignaturas.push(asig);
//                                    }                                                                      
//                                 }
//                             }
//                         }

//                     }

//                }
//             }

//             //Creamos los inputs con el nombre de la asignaturas y otro para la nota
//             for (var i = 0; i < arrayAsignaturas.length; i++) 
//             {
//                 var nombre = arrayAsignaturas[i].sNombreAsignatura;
//                 var sId = arrayAsignaturas[i].iIdAsignatura;
//                 var input = document.createElement("input");
//                 input.type="text";
//                 input.setAttribute("name",sId);
//                 input.setAttribute("data-id",sID);
//                 contenido.appendChild(input);
//             }






//         }

//     }


// }




function btnAsignarAsignaturasProfesor()
{
    ocultarFormularios();
    eliminarListadosYMensajes();    
    var nAsignaturas = oGestion.asignaturas.length;
    var nProfesores = oGestion.profesores.length;

    
    if(nAsignaturas>0 && nProfesores>0)
    {
        var oForm = document.createElement('form');
        oForm.className="formu form-horizontal";
        oForm.setAttribute('name','formuAnadirAsignaturaProfesor');
        var oCapa = document.createElement('div');
        oCapa.className="form-group";
        var oCapa2 = document.createElement('div');
        oCapa.className="form-group";
        
        var oSubCapa = document.createElement('div');
        oSubCapa.className="col-sm-6";
        var msg = document.createElement('h3');
        var txt = document.createTextNode("Seleccione el profesor a añadir");
        msg.appendChild(txt);
        oSubCapa.appendChild(msg);
        var selectProfesor = document.createElement('select');
        selectProfesor.setAttribute("id","select_nombreProfesor");
        selectProfesor.className="form-control";
        for(var i=0;i<nProfesores;i++)
        {
            var oOption = document.createElement('option');
            var oValor = oGestion.profesores[i].sDni;
            var oNombre = oGestion.profesores[i].sNombre;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectProfesor.appendChild(oOption);
            // oSelect.appendChild(oOption);    
        }
        oSubCapa.appendChild(selectProfesor);
        oCapa.appendChild(oSubCapa);

        var oSubCapa2 = document.createElement('div');
        oSubCapa2.className="col-sm-6";        
        var selectAsignatura = document.createElement('select');
        selectAsignatura.setAttribute("id","select_nombreAsignatura");
        selectAsignatura.multiple="multiple";
        selectAsignatura.className="form-control";
        for(var i=0;i<nAsignaturas;i++){
            var oOption = document.createElement('option');
            var oValor = oGestion.asignaturas[i].iIdAsignatura;
            var oNombre = oGestion.asignaturas[i].sNombreAsignatura;
            oOption.setAttribute('value',oValor);            
            var texto = document.createTextNode(oNombre);
            oOption.appendChild(texto);
            selectAsignatura.appendChild(oOption);
            // oSelect.appendChild(oOption);
        }
        oSubCapa2.appendChild(selectAsignatura);
        oCapa2.appendChild(oSubCapa2);
        oForm.appendChild(oCapa);
        oForm.appendChild(oCapa2);
        var btnEnviar = document.createElement('input');
        btnEnviar.setAttribute('type',"button");
        btnEnviar.className="ocultar btn btn-primary";
        btnEnviar.setAttribute('id',"btnEnviarAsignarAsignaturasProfesor");
        btnEnviar.setAttribute('value',"Enviar");
        var btnReset = document.createElement('input');
        btnReset.setAttribute('type',"button");
        btnReset.className="ocultar btn btn-default";
        btnReset.setAttribute('name',"btnResetAnadirProfesorGrupo");
        btnReset.setAttribute('value',"Resetear campos");
        var contenido = document.querySelector("#contenido");
        contenido.appendChild(selectAsignatura);
        contenido.appendChild(selectProfesor);
        contenido.appendChild(btnEnviar);
        contenido.appendChild(btnReset);
        document.getElementById("btnEnviarAsignarAsignaturasProfesor").addEventListener('click',asignarAsignaturasProfesor)
        // asignarProfesorGrupo();


        
    }
    else{
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay profesores o asignaturas";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);
    }

}
function asignarProfesorGrupo(){
    var grupo = document.getElementById("select_nombreGrupo").value;
    var profesor = document.getElementById("select_nombreProfesor").value;
    var pEnc=false;
    var pIndice=0;
    for(var i=0;i<oGestion.profesores.length;i++){
        if(oGestion.profesores[i].sDni==profesor){
            pEnc=true;
            pIndice = i;
        }
    }
    if(oGestion.profesores[pIndice].grupo==null){
        oGestion.profesores[pIndice].grupo=grupo;
        toastr.success("Profesor asignado correctamente");
    }
    else{
        toastr.warning("Ese profesor ya tiene un grupo asignado");


    }

    var nGrupoCurso = oGestion.cursos[cIndice].grupos.length;
    var gEnc=false;
    for(var i=0;i<nGrupoCurso;i++){
        if(oGestion.cursos[cIndice].grupos[i].iId==grupo){
            gEnc=true;
        }
    }
    if(!gEnc){
        var grupoEnc;
        for(var i=0;i<oGestion.grupos.length;i++){
            if(oGestion.grupos[i].iId==grupo)
                var grupoEnc=oGestion.grupos[i];
        }
        oGestion.cursos[cIndice].grupos.push(grupoEnc);
        toastr.success("Grupo añadido correctamente");
    }
    else
        toastr.warning("Grupo añadido previamente");

}
function asignarAsignaturasProfesor()
{
    var profesor = document.getElementById("select_nombreProfesor").value;
    var asignatura =document.getElementById("select_nombreAsignatura");
    var arrayOpt= [];
    for (var i = 0; i < asignatura.options.length; i++){
        if (asignatura.options[i].selected){
            arrayOpt.push(asignatura.options[i].value);        
        }
    }
    var asignaturaEncontrado=false;
    var gIndice=0;
    var asignaturaDefinitivos=[];
    for(var i=0;i<oGestion.profesores.length;i++){
        if(oGestion.profesores[i].sDni==profesor)
            gIndice=i;
        
    }
    for(var j=0;j<oGestion.profesores[gIndice].asignaturas.length;j++){
            for(var q=0;q<arrayOpt.length;q++){
                if(oGestion.profesores[gIndice].asignaturas[j].iIdAsignatura==arrayOpt[q]){
                    asignaturaEncontrado=true;
                }
            }
    }
    var arrayAsignaturasSeleccionados=[];
    if(asignaturaEncontrado==false){
        for(var i=0;i<oGestion.asignaturas.length;i++){
            for(var j=0;j<arrayOpt.length;j++){
                if(oGestion.asignaturas[i].iIdAsignatura==arrayOpt[j]){
                    arrayAsignaturasSeleccionados.push(oGestion.asignaturas[i]);
                }    
            }    
            
        }
        for(var i=0;i<arrayAsignaturasSeleccionados.length;i++){
            oGestion.profesores[gIndice].asignaturas.push(arrayAsignaturasSeleccionados[i]);
        }
        toastr.success("Asignaturas añadidas correctamente");
    }
    else{
        toastr.warning("No se puede repetir una asignatura en el mismo profesor");
    }

}

function anadirGrupoCurso()
{
    var curso = document.getElementById("select_nombreCurso").value;
    var grupo =document.getElementById("select_nombreGrupo");
    var arrayOpt= [];

    for (var i = 0; i < grupo.options.length; i++)
    {
        if (grupo.options[i].selected)
        {
            arrayOpt.push(grupo.options[i].value);        
        }
    }

    var grupoEncontrado=false;
    //recorro los cursos en busca de grupos
    for(var i=0;i<oGestion.cursos.length;i++)
    {//recorremos los grupo del curso
        for (var j = 0; i < oGestion.cursos[i].grupos.length; j++) 
        {
            //recorremos los grupos seleccionados
            for(var q=0;q<arrayOpt.length;q++)
            {   
                if(oGestion.cursos[i].grupos[q].sId==arrayOpt[q])
                {//si encontramos el grupo seleccionado dentro del curso seleccionado
                    grupoEncontrado=true;
                }
            }
        }
    }    

    var cursoSeleccionado = buscarCurso(curso);
    //si este curso no contiene ha este grupo
    if(grupoEncontrado==false)
    {//recorremod los grupos
        
        for(var j=0;j<arrayOpt.length;j++)
        {//buscamos el grupo a añadir
            var grupoSeleccionado=buscarGrupo(arrayOpt[j])
            cursoSeleccionado.grupos.push(grupoSeleccionado);
            //añadimos a los alumnos del grupo las asignaturas del curso
            for (var i = 0; i < cursoSeleccionado.asignaturas.length; i++) 
            {
                var asig =cursoSeleccionado.asignaturas[i];
                for (var k = 0; k < grupoSeleccionado.alumnos.length; k++) 
                {
                    var nueva=new Asignatura(asig.iIdAsignatura,asig.sNombreAsignatura);
                    grupoSeleccionado.alumnos[k].aNotas.push(nueva,0);
                }
            }
        }    
        toastr.success("Grupos añadidos correctamente");
    }
    else
    {
        toastr.warning("Un grupo solo puede estar en un curso");
    }  
}

function tablaAlumnos(){

    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes()
    var nAlumnos = oGestion.alumnos.length;
    if (nAlumnos>0) 
    {
        //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var thead = document.createElement("thead");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("DNI");
        th1.appendChild(id);
        thead.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        thead.appendChild(th2);

        var th3 = document.createElement("th");
        var nombre=document.createTextNode("Apellidos");
        th3.appendChild(nombre);
        thead.appendChild(th3);

        var th4 = document.createElement("th");
        var nombre=document.createTextNode("Edad");
        th4.appendChild(nombre);
        thead.appendChild(th4);

        var th5 = document.createElement("th");
        var nombre=document.createTextNode("Fecha de Nacimiento");
        th5.appendChild(nombre);
        thead.appendChild(th5);

        var th6 = document.createElement("th");
        var nombre=document.createTextNode("Teléfono");
        th6.appendChild(nombre);
        thead.appendChild(th6);

        var th7 = document.createElement("th");
        var nombre=document.createTextNode("Direccion");
        th7.appendChild(nombre);
        thead.appendChild(th7);

        oTabla.appendChild(thead);

           
        var tbody=document.createElement("tbody");
        //creamos las celdas
        for (var i = 0; i < nAlumnos; i++) 
        {
           // creamos filas
            var tr =oTabla.insertRow(-1);
            
            //creamos las celdas
                //td con ID
            var td =tr.insertCell(-1);
            var sDni =oGestion.alumnos[i].sDni;
            var oTexto = document.createTextNode(sDni);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =tr.insertCell(-1);
            var sNombre =oGestion.alumnos[i].sNombre;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);

            var td =tr.insertCell(-1);
            var sApellido =oGestion.alumnos[i].sApellido;
            var oTexto = document.createTextNode(sApellido);
            td.appendChild(oTexto);
            tr.appendChild(td);

            var td =tr.insertCell(-1);
            var dFecha =oGestion.alumnos[i].dFechaNacimiento;
            var oTexto = document.createTextNode(dFecha);
            td.appendChild(oTexto);
            tr.appendChild(td);

            var td =tr.insertCell(-1);
            var iTelefono =oGestion.alumnos[i].iTelefono;
            var oTexto = document.createTextNode(iTelefono);
            td.appendChild(oTexto);
            tr.appendChild(td);

            
            var td =tr.insertCell(-1);
            var iEdad =oGestion.alumnos[i].iEdad;
            var oTexto = document.createTextNode(iEdad);
            td.appendChild(oTexto);
            tr.appendChild(td);

            var td =tr.insertCell(-1);
            var sDireccion =oGestion.alumnos[i].sDireccion;
            var oTexto = document.createTextNode(sDireccion);
            td.appendChild(oTexto);
            tr.appendChild(td);

            //AÑADIMOS LOS TR con sus td al tbody
            tbody.appendChild(tr);
        }

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.id="tablaAlumnos";
        //Añadimos la tabla de Profesor al documento
        var contenido=document.querySelector("#contenido");
        var titulo="Listado de Alumnos";
        var oTexto2 = document.createTextNode(titulo);
        var h3 = document.createElement("h3");
        h3.appendChild(oTexto2);
        contenido.appendChild(h3);
        

        //***Filtro de busqueda***//
        var dni ="";
        var nombre ="";
        //select de alumnos
        var select= document.createElement("select");

        for (var i = 0; i < oGestion.alumnos.length; i++) 
        {
            var option = document.createElement("option");

            sDni =oGestion.alumnos[i].sDni;
            sNombre =oGestion.alumnos[i].sNombre;
            var oTexto= document.createTextNode(sNombre);
            option.value=sDni;
            option.appendChild(oTexto);

            select.appendChild(option);

        }

        //creamos boton ver Notas Alumno
        //***Añadimos el select a la capa contenido***//
        var btnBuscarAlumno= document.createElement("button");
        var texto=document.createTextNode("Ver Notas");
        btnBuscarAlumno.appendChild(texto);
        btnBuscarAlumno.id="btnBuscarAlumno";
        btnBuscarAlumno.addEventListener("click",tablaAlumnoAsignatura)
        btnBuscarAlumno.classList.add("ocultar","btn", "btn-default","input-lg");

        select.classList.add("input-lg","col-sm-12", "col-md-6", "col-lg-6");
        select.setAttribute("id","select_aluNota"); 
        select.id="select_aluNota";
        contenido.appendChild(select);
        contenido.appendChild(btnBuscarAlumno);     
        contenido.appendChild(oTabla);
    }
    else
    {
        eliminarListadosYMensajes()
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Alumnos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }
}


function tablaAlumnoAsignatura()
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();

    if (oGestion.alumnos.length==0) 
    {
        toastr.error("No hay alumnos");
    }
    else
    {
    //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var thead = document.createElement("thead");
        
        var th1 = document.createElement("th");
        var id=document.createTextNode("Id Asignatura");
        th1.appendChild(id);
        thead.appendChild(th1);


        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre Asignatura");
        th2.appendChild(nombre);
        thead.appendChild(th2);

        var th3 = document.createElement("th");
        var nota=document.createTextNode("Nota");
        th3.appendChild(nota);
        thead.appendChild(th3);

        oTabla.appendChild(thead);

            //buscamos alumno y sacamos las asignaturas
            var selectAlumno = document.getElementById("select_aluNota");
            var sDni= selectAlumno.value;
            var tbody = document.createElement("tbody");

            var alumnoSeleccionado= buscarAlumno(sDni);

        //creamos las celdas
        for (var i = 0; i < alumnoSeleccionado.aNotas.length; i++) 
        {
            //creamos filas
            var tr =oTabla.insertRow(-1);
            //creamos las celdas
                //td con sNombre
            if (i%2==0) 
            {
                var td =tr.insertCell(-1);
                //si es par es la asignatura
                var nota =alumnoSeleccionado.aNotas[i];
                var oTexto = document.createTextNode(nota.iIdAsignatura);
                td.appendChild(oTexto);
                tr.appendChild(td);

                var td =tr.insertCell(-1);
                //si es par es la asignatura
                var nota =alumnoSeleccionado.aNotas[i];
                var oTexto = document.createTextNode(nota.sNombreAsignatura);
                td.appendChild(oTexto);
                tr.appendChild(td);
                tbody.appendChild(tr);
                //es una nota
                var td =tr.insertCell(-1);
                var nota =alumnoSeleccionado.aNotas[i+1];
                var oTexto = document.createTextNode(nota);
                td.appendChild(oTexto);
                tr.appendChild(td);
                tbody.appendChild(tr);
            }
            
        }
        oTabla.id="tablaAsignaturasAlumno";
        oTabla.appendChild(tbody);

        if (contenido.querySelector("#tablaAsignaturasAlumno")!=null) 
        {
            contenido.removeChild(contenido.querySelector("#tablaAsignaturasAlumno"));
        }
        contenido.insertBefore(oTabla, contenido.querySelector("#tablaAlumnos"));
        

    }
}








function tablaProfesor() 
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes();
    var nProfesores = oGestion.profesores.length;
    if (nProfesores>0) 
    {
       //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var thead = document.createElement("thead");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("DNI");
        th1.appendChild(id);
        thead.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        thead.appendChild(th2);

        var th3 = document.createElement("th");
        var nombre=document.createTextNode("Apellidos");
        th3.appendChild(nombre);
        thead.appendChild(th3);

        var th4 = document.createElement("th");
        var nombre=document.createTextNode("Edad");
        th4.appendChild(nombre);
        thead.appendChild(th4);

        var th5 = document.createElement("th");
        var nombre=document.createTextNode("Fecha de Nacimiento");
        th5.appendChild(nombre);
        thead.appendChild(th5);

        var th6 = document.createElement("th");
        var nombre=document.createTextNode("Teléfono");
        th6.appendChild(nombre);
        thead.appendChild(th6);

        var th7 = document.createElement("th");
        var nombre=document.createTextNode("Direccion");
        th7.appendChild(nombre);
        thead.appendChild(th7);

        oTabla.appendChild(thead);

        var tbody = document.createElement("tbody");
        //creamos las celdas
        for (var i = 0; i < nProfesores; i++) 
        {
            //creamos filas
            var tr =oTabla.insertRow(-1);
            //creamos las celdas
                //td con ID
            var td =tr.insertCell(-1);
            var sDni =oGestion.profesores[i].sDni;
            var oTexto = document.createTextNode(sDni);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =tr.insertCell(-1);
            var sNombre =oGestion.profesores[i].sNombre;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);

            var td =tr.insertCell(-1);
            var sApellido =oGestion.profesores[i].sApellido;
            var oTexto = document.createTextNode(sApellido);
            td.appendChild(oTexto);
            tr.appendChild(td);

            var td =tr.insertCell(-1);
            var dFecha =oGestion.profesores[i].dFechaNacimiento;
            var oTexto = document.createTextNode(dFecha);
            td.appendChild(oTexto);
            tr.appendChild(td);

            var td =tr.insertCell(-1);
            var iTelefono =oGestion.profesores[i].iTelefono;
            var oTexto = document.createTextNode(iTelefono);
            td.appendChild(oTexto);
            tr.appendChild(td);

            var td =tr.insertCell(-1);
            var iEdad =oGestion.profesores[i].iEdad;
            var oTexto = document.createTextNode(iEdad);
            td.appendChild(oTexto);
            tr.appendChild(td);

            var td =tr.insertCell(-1);
            var sDireccion =oGestion.profesores[i].sDireccion;
            var oTexto = document.createTextNode(sDireccion);
            td.appendChild(oTexto);
           
            //AÑADIMOS LOS TR con sus td al tbody
            tbody.appendChild(tr);
        }

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        //Añadimos la tabla de Profesor al documento
        var contenido=document.querySelector("#contenido");
        var titulo="Listado de Profesores";
        var oTexto2 = document.createTextNode(titulo);
        var h3 = document.createElement("h3");
        h3.appendChild(oTexto2);
        contenido.appendChild(h3);
        contenido.appendChild(oTabla);
    }
    else
    {
        eliminarListadosYMensajes();
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Profesores registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }

}


function btnModificarCurso()
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes();
    var contenido=document.querySelector("#contenido");
    var h3=document.createElement("h3");
    var titulo= document.createTextNode("Seleccione el Curso a Modificar");
    contenido.appendChild(h3);
    h3.appendChild(titulo);
    var oSelectCursos = cargarSelectCursos();
    oSelectCursos.addEventListener("change",mostrarDatosCurso);
    contenido.appendChild(oSelectCursos);
}
function eliminarTabla(oTabla)
{
    var padre= oTabla.parentNode;
    padre.removeChild(oTabla);

}
function mostrarDatosCurso(oEvento)
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    if (document.querySelector("#tablaModCurso")!=null) 
    {
        var tablaRm=document.querySelector("#tablaModCurso");
        eliminarTabla(tablaRm);
    }

    var oE= window.event || oEvento;
    var sIdCursoSeleccionado= oE.target.value; 

    var cursoSeleccionado =buscarCurso(sIdCursoSeleccionado);

    if (cursoSeleccionado!=null) 
    {
        //mostramos una tabla con inputs
         //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        oTabla.id="tablaModCurso";
        var thead = document.createElement("thead");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("ID");
        th1.appendChild(id);
        thead.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        thead.appendChild(th2);

        var th3 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Inicio");
        th3.appendChild(fecha);
        thead.appendChild(th3);

        var th4 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Fin");
        th4.appendChild(fecha);
        thead.appendChild(th4);

        var th5 = document.createElement("th");
        var descripcion=document.createTextNode("Descripcion");
        th5.appendChild(descripcion);
        thead.appendChild(th5);

        var th6 = document.createElement("th");
        var precio=document.createTextNode("Precio");
        th6.appendChild(precio);
        thead.appendChild(th6);
        oTabla.appendChild(thead);

        var tbody = document.createElement("tbody");


        //creamos filas
        var tr =document.createElement("tr");
            
        //creamos las celdas
            //td con ID
        var td =tr.insertCell(-1);
        var sId = cursoSeleccionado.sId;
        //creamos el input
            var input= document.createElement("input");
            input.setAttribute("type","text")
            input.readOnly=true;
            input.value=sId;
            input.name="sId";
            td.appendChild(input);
            tr.appendChild(td);
                //td con sNombre
            var td =tr.insertCell(-1);
            var sNombre =cursoSeleccionado.sNombre;
            //creamos el input
            var input= document.createElement("input");
            input.setAttribute("type","text")
            input.readOnly.true;
            input.value=sNombre;
            input.name="sNombre";
            td.appendChild(input);
            tr.appendChild(td);
                //td con fecha ini
            /////////////////
            var td =tr.insertCell(-1);
            var dFecha =cursoSeleccionado.dFecha_ini;
           //creamos el input
            var input= document.createElement("input");
            input.setAttribute("type","date");
            input.value=dFecha;
            input.readOnly.true;
            input.name="fecha_ini";
            td.appendChild(input);
            tr.appendChild(td);
                //td con fecha fin
            var td =tr.insertCell(-1);
            var dFecha =cursoSeleccionado.dFecha_fin;
            //creamos el input
            var input= document.createElement("input");
            input.setAttribute("type","date");
            input.value=dFecha;
            input.readOnly.true;
            input.name="fecha_fin";
            td.appendChild(input);
            tr.appendChild(td);
                //td con descripcion
            var td =tr.insertCell(-1);
            var sDescripcion =cursoSeleccionado.sDescripcion;
           //creamos el input
            var input= document.createElement("textarea");
            input.setAttribute("type","text");
            input.value=sDescripcion;
            input.name="descripcion";
            td.appendChild(input);
            tr.appendChild(td);
            //td con precio
            var td =tr.insertCell(-1);
            var fPrecio =cursoSeleccionado.fPrecio;
            //creamos el input
            var input= document.createElement("input");
            input.setAttribute("type","text");
            input.value=fPrecio;
            input.name="precio";
            td.appendChild(input);
            tr.appendChild(td);
            //AÑADIMOS LOS TR con sus td al tbody
            tbody.appendChild(tr);
        

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        //Añadimos la tabla de Profesor al documento
        var contenido=document.querySelector("#contenido");
        contenido.appendChild(oTabla);

        //btn guardar cambios
        if (document.querySelector("#btnGuardarCambios")!=null) 
        {
            var padre =document.querySelector("#btnGuardarCambios").parentNode;
            padre.removeChild("#btnGuardarCambios");
        }
        var btnGuardarCambios= document.createElement("button");
        btnGuardarCambios.setAttribute("class","btn-primary ocultar");
        btnGuardarCambios.id="btnGuardarCambios";
        var texto=document.createTextNode("Guardar Cambios");
        btnGuardarCambios.appendChild(texto);
        btnGuardarCambios.addEventListener("click",validarModCurso);
        contenido.appendChild(btnGuardarCambios);



    }
}

function validarModCurso()
{
    var s="";
    var id=document.querySelector("input[name='sId']").value;
    var nombre = document.querySelector("input[name='sNombre']").value;
    var fecha_ini= document.querySelector("input[name='fecha_ini']").value;
    var fecha_fin= document.querySelector("input[name='fecha_fin']").value;
    var descripcion= document.querySelector("textarea[name='descripcion']").value;
    var precio = parseFloat(document.querySelector("input[name='precio']").value);
    
    var bValido = true;
    var sErrores = "";

    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false)
    {
        if(bValido == true)
        {
            bValido = false;         
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        nombre.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        nombre.className = "form-control";    

    }

       //Fecha inicio
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_ini) == false)
    {
        if(bValido == true)
        {
            bValido = false;        
        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        fecha_ini.className = "form-control input-md error"; 
    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        var fecha_nac = new Date (Date.parse(fecha_ini));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            fecha_ini.className = "form-control input-md error"; 
        }
        else
        {
            fecha_ini.className = "form-control "; 
        }
    }

    //Fecha Fin
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_fin) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        
        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        fecha_fin.className = "form-control input-md error"; 

    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        var fecha_nac = new Date (Date.parse(fecha_fin));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            fecha_fin.className = "form-control input-md error"; 
        }
        else
        {
            fecha_fin.className = "form-control "; 
        }
    }


    if (fecha_ini>fecha_fin) 
    {
        sErrores += "\nFecha inicio > fecha fin<br>";
        bValido=false;
        fecha_fin.className = "form-control input-md error";
        fecha_ini.className = "form-control input-md error";
    }

    //Descripcion 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(descripcion) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nDescripción incorrecta<br>";
        
        //Marcar error
        descripcion.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        descripcion.className = "form-control";    

    }
    //Precio 
    oExpReg = /^[0-9]/;
    if (oExpReg.test(precio) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nPrecio incorrecto<br>";
        
        //Marcar error
        precio.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        precio.className = "form-control";    

    } 


     //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        
        //datos del Curso
        var id=document.querySelector("input[name='sId']").value;
        var nombre = document.querySelector("input[name='sNombre']").value;
        var fecha_ini= document.querySelector("input[name='fecha_ini']").value;
        var fecha_fin= document.querySelector("input[name='fecha_fin']").value;
        var descripcion= document.querySelector("textarea[name='descripcion']").value;
        var precio = parseFloat(document.querySelector("input[name='precio']").value);
    
        //Buscamos curso y lo modificamos 
       
        var cursoCambiar=buscarCurso(id);
        cursoCambiar.sNombre=nombre;
        cursoCambiar.dFecha_ini=fecha_ini;
        cursoCambiar.dFecha_fin=fecha_fin;
        cursoCambiar.sDescripcion=descripcion;
        cursoCambiar.fPrecio=precio;
        if (!s) 
        {
            toastr.success("Curso Modificado correctamente");
        }
        else
        {
          toastr.warning("Este Curso ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada


}

function buscarCurso(sId)
{
    // var nCursos=oGestion.cursos.length
    // for (var i = 0; i < nCursos; i++) 
    // {
    //     if (oGestion.cursos[i].sId==sId) 
    //     {
    //         oGestion.cursos[i];
    //     }
    // }
    var cursos= oGestion.cursos;
    var cursoDevolver=null;
    cursos.forEach(function(cursos)
    {
        if (cursos.sId==sId) 
        {
            cursoDevolver=cursos;
            return false;
        }

    })   
    return cursoDevolver;
}

function cargarSelectCursos()
{
    var selectCurso = document.createElement('select');
    selectCurso.setAttribute("id","select_nombreCurso");        
    selectCurso.className="form-control";
    var oOptionDefault=document.createElement('option');
    var oNombreDefault = document.createTextNode("selecciona un Curso");
    oOptionDefault.setAttribute("value","default");
    oOptionDefault.appendChild(oNombreDefault);
    selectCurso.appendChild(oOptionDefault);
    for(var i=0;i<oGestion.cursos.length;i++)
    {
        var oOption = document.createElement('option');
        var oValor = oGestion.cursos[i].sId;
        var oNombre = oGestion.cursos[i].sNombre;
        oOption.setAttribute('value',oValor);            
        var texto = document.createTextNode(oNombre);
        oOption.appendChild(texto);
        selectCurso.appendChild(oOption);
    }
     return selectCurso;
}



function tablaGrupos() 
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes();
    var nGrupos = oGestion.grupos.length;
    if (nGrupos>0) 
    {
        //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var thead = document.createElement("thead");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("ID");
        th1.appendChild(id);
        thead.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        thead.appendChild(th2);

        oTabla.appendChild(thead);

        var tbody = document.createElement("tbody");
        //creamos las celdas
        for (var i = 0; i < nGrupos; i++) 
        {
            //creamos filas
            var tr =document.createElement("tr");
            
            //creamos las celdas
                //td con ID
            var td =tr.insertCell(-1);
            var iId =oGestion.grupos[i].iId;
            var oTexto = document.createTextNode(iId);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =tr.insertCell(-1);
            var sNombre =oGestion.grupos[i].sNombre;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);
            //AÑADIMOS LOS TR con sus td al tbody
            tbody.appendChild(tr);
        }

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        //Añadimos la tabla de Profesor al documento
        var contenido=document.querySelector("#contenido");
        var titulo="Listado de Grupos";
        var oTexto2 = document.createTextNode(titulo);
        var h3 = document.createElement("h3");
        h3.appendChild(oTexto2);
        contenido.appendChild(h3);
        contenido.appendChild(oTabla);
    }
    else
    {
        eliminarListadosYMensajes()
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Cursos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }

}

function tablaCursos() 
{
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes();
    var nCursos = oGestion.cursos.length;
    if (nCursos>0) 
    {
        //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var thead = document.createElement("thead");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("ID");
        th1.appendChild(id);
        thead.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        thead.appendChild(th2);

        var th3 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Inicio");
        th3.appendChild(fecha);
        thead.appendChild(th3);

        var th4 = document.createElement("th");
        var fecha=document.createTextNode("Fecha Fin");
        th4.appendChild(fecha);
        thead.appendChild(th4);

        var th5 = document.createElement("th");
        var descripcion=document.createTextNode("Descripcion");
        th5.appendChild(descripcion);
        thead.appendChild(th5);

        var th6 = document.createElement("th");
        var precio=document.createTextNode("Precio");
        th6.appendChild(precio);
        thead.appendChild(th6);
        oTabla.appendChild(thead);

        var tbody = document.createElement("tbody");
        //creamos las celdas
        for (var i = 0; i < nCursos; i++) 
        {
            //creamos filas
            var tr =document.createElement("tr");
            
            //creamos las celdas
                //td con ID
            var td =tr.insertCell(-1);
            var sId =oGestion.cursos[i].sId;
            var oTexto = document.createTextNode(sId);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =tr.insertCell(-1);
            var sNombre =oGestion.cursos[i].sNombre;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con fecha ini
            /////////////////
            var td =tr.insertCell(-1);
            var dFecha =oGestion.cursos[i].dFecha_ini;
            var oTexto = document.createTextNode(dFecha);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con fecha fin
            var td =tr.insertCell(-1);
            var dFecha =oGestion.cursos[i].dFecha_fin;
            var oTexto = document.createTextNode(dFecha);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con descripcion
            var td =tr.insertCell(-1);
            var sDescripcion =oGestion.cursos[i].sDescripcion;
            var oTexto = document.createTextNode(sDescripcion);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con precio
            var td =tr.insertCell(-1);
            var fPrecio =(oGestion.cursos[i].fPrecio).toString();
            var oTexto = document.createTextNode(fPrecio);
            td.appendChild(oTexto);
            tr.appendChild(td);
            //AÑADIMOS LOS TR con sus td al tbody
            tbody.appendChild(tr);
        }

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        //Añadimos la tabla de Profesor al documento
        var contenido=document.querySelector("#contenido");
        var titulo="Listado de Cursos";
        var oTexto2 = document.createTextNode(titulo);
        var h3 = document.createElement("h3");
        h3.appendChild(oTexto2);
        contenido.appendChild(h3);
        contenido.appendChild(oTabla);
    }
    else
    {
        eliminarListadosYMensajes()
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Cursos registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }

}
function tablaCentros(){
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes()
    var nCentros = oGestion.centros.length;
    if (nCentros>0)     
    {
        //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var thead = document.createElement("thead");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("ID");
        th1.appendChild(id);
        thead.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        thead.appendChild(th2);

        var th3 = document.createElement("th");
        var fecha=document.createTextNode("Localización");
        th3.appendChild(fecha);
        thead.appendChild(th3);
        oTabla.appendChild(thead);       


        var tbody = document.createElement("tbody");
        //creamos las celdas
        for (var i = 0; i < nCentros; i++) 
        {
            //creamos filas
            var tr =document.createElement("tr");
            
            //creamos las celdas
                //td con ID
            var td =tr.insertCell(-1);
            var sId =oGestion.centros[i].iId;
            var oTexto = document.createTextNode(sId);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =tr.insertCell(-1);
            var sNombre =oGestion.centros[i].sNombre;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con fecha ini
            /////////////////
            var td =tr.insertCell(-1);
            var localizacion =oGestion.centros[i].sLocalizacion;
            var oTexto = document.createTextNode(localizacion);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con fecha fin
            
            //AÑADIMOS LOS TR con sus td al thead
            tbody.appendChild(tr);
        }

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        //Añadimos la tabla de Profesor al documento
        var contenido=document.querySelector("#contenido");
        var titulo="Listado de Centros";
        var oTexto2 = document.createTextNode(titulo);
        var h3 = document.createElement("h3");
        h3.appendChild(oTexto2);
        contenido.appendChild(h3);
        contenido.appendChild(oTabla);
    }
    else
    {
        eliminarListadosYMensajes()
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Centros registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }

}

function tablaAsignaturas(){
    //ocultamos formularios y eliminamos listados anteriores
    ocultarFormularios();
    eliminarListadosYMensajes()
    var nAsignaturas = oGestion.asignaturas.length;
    if (nAsignaturas>0)
    {
        //creamos la tabla y tbody
        var oTabla=document.createElement("table");
        var thead = document.createElement("thead");
        //creamos los th
        var th1 = document.createElement("th");
        var id=document.createTextNode("ID");
        th1.appendChild(id);
        thead.appendChild(th1);

        var th2 = document.createElement("th");
        var nombre=document.createTextNode("Nombre");
        th2.appendChild(nombre);
        thead.appendChild(th2);
        oTabla.appendChild(thead);

           
        var tbody = document.createElement("tbody");
        //creamos las celdas
        for (var i = 0; i < nAsignaturas; i++) 
        {
            //creamos filas
            var tr =document.createElement("tr");
            
            //creamos las celdas
                //td con ID
            var td =tr.insertCell(-1);
            var sId =oGestion.asignaturas[i].iIdAsignatura;
            var oTexto = document.createTextNode(sId);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con sNombre
            var td =tr.insertCell(-1);
            var sNombre =oGestion.asignaturas[i].sNombreAsignatura;
            var oTexto = document.createTextNode(sNombre);
            td.appendChild(oTexto);
            tr.appendChild(td);
                //td con fecha ini
            /////////////////
            
                //td con fecha fin
            
            //AÑADIMOS LOS TR con sus td al tbody
            tbody.appendChild(tr);
        }

        oTabla.appendChild(tbody);
        //atributos de la tabla
        oTabla.setAttribute('border','1');
        oTabla.classList.add("tablasDinamicas")
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        //Añadimos la tabla de Profesor al documento
        var contenido=document.querySelector("#contenido");
        var titulo="Listado de Asignaturas";
        var oTexto2 = document.createTextNode(titulo);
        var h3 = document.createElement("h3");
        h3.appendChild(oTexto2);
        contenido.appendChild(h3);
        contenido.appendChild(oTabla);
    }
    else
    {
        eliminarListadosYMensajes()
        //si no hay datos que listar
        var contenido = document.querySelector("#contenido");
        var h3 = document.createElement("h3");
        var titulo = "No hay Centros registrados";
        var oTexto = document.createTextNode(titulo);
        h3.appendChild(oTexto);
        contenido.appendChild(h3);

    }
}




function eliminarListadosYMensajes()
{
    var contenido = document.querySelector("#contenido");
    var oTablas = document.querySelectorAll("table");
    for (var i = 0; i < oTablas.length; i++){
        contenido.removeChild(oTablas[i]);
    }
    //borramos mensajes anteriores
    var mensajes = document.querySelectorAll("h3");
    for (var i = 0; i < mensajes.length; i++){ 
        contenido.removeChild(mensajes[i]);
    }
    var oSelect = document.querySelectorAll('select');
    for(var i=0;i<oSelect.length;i++){
        contenido.removeChild(oSelect[i]);
    }
    var oButton = document.querySelectorAll('.ocultar');
    for(var i=0;i<oButton.length;i++)
    {
        contenido.removeChild(oButton[i]);
    }
    // while(contenido.firstChild){
    //     contenido.removeChild(contenido.firstChild);

    // }


}


/*----------Fin de Listados-----*/
function ocultarFormularios(){
	document.formuAltaAlum.style.display="none";
	document.formuAltaProfe.style.display="none";
	document.formuAltaGrupo.style.display="none";
	document.formuAltaCurso.style.display="none";
	document.formuAltaCentro.style.display="none";
	document.formuAltaAsignatura.style.display="none";

    document.formuBajaAlum.style.display="none";
    document.formuBajaProfe.style.display="none";
    document.formuBajaGrupo.style.display="none";
    document.formuBajaCurso.style.display="none";
    document.formuBajaCentro.style.display="none";
    document.formuBajaAsignatura.style.display="none";
}
/*-----------FIN DE MOSTRAR Y OCULTAR FORMULARIOS-------------*/

/*-----------VALIDACIONES FORMULARIOS--------------*/
document.formuAltaAlum.btnEnviarAltaAlumno.addEventListener('click',validarAltaAlumno);
document.formuAltaProfe.btnEnviarAltaProfesor.addEventListener('click',validarAltaProfesor);
document.formuAltaGrupo.btnEnviarAltaGrupo.addEventListener('click',validarAltaGrupo);
document.formuAltaCurso.btnEnviarAltaCurso.addEventListener('click',validarAltaCurso);
document.formuAltaCentro.btnEnviarAltaCentro.addEventListener('click',validarAltaCentro);
document.formuAltaAsignatura.btnEnviarAltaAsignatura.addEventListener('click',validarAltaAsignatura);
/*---------Validaciones de baja--------*/
document.formuBajaAlum.btnEnviarBajaAlumno.addEventListener('click',validarBajaAlumno);
document.formuBajaProfe.btnEnviarBajaProfesor.addEventListener('click',validarBajaProfesor);
document.formuBajaGrupo.btnEnviarBajaGrupo.addEventListener('click',validarBajaGrupo);
document.formuBajaCurso.btnEnviarBajaCurso.addEventListener('click',validarBajaCurso);
document.formuBajaCentro.btnEnviarBajaCentro.addEventListener('click',validarBajaCentro);
document.formuBajaAsignatura.btnEnviarBajaAsignatura.addEventListener('click',validarBajaAsignatura);
document.formuAltaAlum.btnResetearAltaAlumno.addEventListener('click',resetAltaAlumno);
//en proceso el borrado
function resetAltaAlumno(){
    var oForm = document.formuBajaAlum;
    var sDni = oForm.dni_Alumno.value;
     //Dni 
    var oExpReg = /^[0-9]{8}[a-zA-Z]{1}$/;
    
    if (oExpReg.test(sDni) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
        sErrores += "\nDni incorrecto<br>";
        //Marcar error
        oForm.dni_Alumno.className = "form-control input-md error";
    }
    else 
    {
        //Desmarcar error
        oForm.dni_Alumno.className = "form-control";    
    }
}


function validarAltaAlumno(){

    var s="";
    var oForm = document.formuAltaAlum;
    var dni = oForm.dni_Alumno.value;
    var nombre = oForm.nombre_Alumno.value;
    var apellidos = oForm.apellidos_Alumno.value;
    var fecha_nac = oForm.fechaNac_Alumno.value;
    var telefono = oForm.telefono_Alumno.value;
    var edad = oForm.edad_Alumno.value;
    var direccion = oForm.direccion_Alumno.value;
    
    var bValido = true;
    var sErrores = "";
    //Dni 
    var oExpReg = /^[0-9]{8}[a-zA-Z]{1}$/;
    if (oExpReg.test(dni) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nDni incorrecto<br>";
        
        //Marcar error
        oForm.dni_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.dni_Alumno.className = "form-control";    

    }
    //Nombre : cualquier letra entre a-z case insensitive y de 3-40 caracteres
    oExpReg = /^[a-z]{3,40}$/i;
    if (oExpReg.test(nombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        oForm.nombre_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Alumno.className = "form-control";    

    }
    //Apellidos 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(apellidos) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nApellidos incorrectos<br>";
        
        //Marcar error
        oForm.apellidos_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.apellidos_Alumno.className = "form-control";    

    }

    //Fecha nacimiento 
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_nac) == false){
    
        if(bValido == true)
        {
            bValido = false;        

        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        oForm.fechaNac_Alumno.className = "form-control input-md error"; 
        
    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        fecha_nac = new Date (Date.parse(oForm.fechaNac_Alumno.value));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            oForm.fechaNac_Alumno.className = "form-control input-md error"; 
        }
        else
        {
            oForm.fechaNac_Alumno.className = "form-control "; 
        }

        
    }


    //Telefono 
    oExpReg = /^[0-9]{9}$/;
    if (oExpReg.test(telefono) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        

        }
        sErrores += "\nTeléfono incorrecto<br>";
        //Marcar error
        oForm.telefono_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.telefono_Alumno.className = "form-control";    

    }
    //Edad 
    oExpReg = /^[0-9]/;
    if (oExpReg.test(edad) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nEdad incorrecta<br>";
        
        //Marcar error
        oForm.edad_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.edad_Alumno.className = "form-control";    

    }
    //Direccion
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(direccion) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nDirección incorrecta<br>";
        
        //Marcar error
        oForm.direccion_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.direccion_Alumno.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir alumno

    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        
        //datos del alumno
        var oFrom=document.formuAltaAlum;
        var sDni = oForm.dni_Alumno.value.trim();
        var sNombre = oForm.nombre_Alumno.value.trim();
        var sApellido = oForm.apellidos_Alumno.value.trim();
        var dFechaNacimiento = oForm.fechaNac_Alumno.value;
        var iTelefono = parseInt(oForm.telefono_Alumno.value);
        var iEdad = parseInt(oForm.edad_Alumno.value);
        var sDireccion = oForm.direccion_Alumno.value.trim();

        //Creamos alumno
        var oAlumno= new Alumno(sDni,sNombre,sApellido,dFechaNacimiento,iTelefono,iEdad,sDireccion);
        s=oGestion.darAltaAlumno(oAlumno);
        if (!s) 
        {
            toastr.success("Alumno registrado correctamente");
        }
        else
        {
          toastr.warning("Este Alumno ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada


}

function validarAltaProfesor(){
	var s="";
	var oForm = document.formuAltaProfe;
    var dni = oForm.dni_Profesor.value;
    var nombre = oForm.nombre_Profesor.value;
    var apellidos = oForm.apellidos_Profesor.value;
    var fecha_nac =oForm.fechaNac_Profesor.value;
    var telefono = oForm.telefono_Profesor.value;
    var edad = oForm.edad_Profesor.value;
    var direccion = oForm.direccion_Profesor.value;
    
    var bValido = true;
    var sErrores = "";
    //Dni 
    var oExpReg = /^[0-9]{8}[a-zA-Z]{1}$/;
    if (oExpReg.test(dni) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nDni incorrecto<br>";
        
        //Marcar error
        oForm.dni_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.dni_Profesor.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        oForm.nombre_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Profesor.className = "form-control";    

    }
    //Apellidos 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(apellidos) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nApellidos incorrectos<br>";
        
        //Marcar error
        oForm.apellidos_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.apellidos_Profesor.className = "form-control";    

    }
    
    //Fecha nacimiento 
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_nac) == false){
    
        if(bValido == true)
        {
            bValido = false;        

        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        oForm.fechaNac_Profesor.className = "form-control input-md error"; 
    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        fecha_nac = new Date (Date.parse(oForm.fechaNac_Profesor.value));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            oForm.fechaNac_Profesor.className = "form-control input-md error"; 
        }
        else
        {
            oForm.fechaNac_Profesor.className = "form-control "; 
        }
    }


    //Telefono 
    oExpReg = /^[0-9]{9}$/;
    if (oExpReg.test(telefono) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nTeléfono incorrecto<br>";
        
        //Marcar error
        oForm.telefono_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.telefono_Profesor.className = "form-control";    

    }
    //Edad 
    oExpReg = /^[0-9]/;
    if (oExpReg.test(edad) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nEdad incorrecta<br>";
        
        //Marcar error
        oForm.edad_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.edad_Profesor.className = "form-control";    

    }
    //Direccion
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(direccion) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nDirección incorrecta<br>";
        
        //Marcar error
        oForm.direccion_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.direccion_Profesor.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir profesor

    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        
        //datos del Profesor
        var oForm=document.formuAltaProfe;
        var sDni = oForm.dni_Profesor.value.trim();
        var sNombre = oForm.nombre_Profesor.value.trim();
        var sApellido = oForm.apellidos_Profesor.value.trim();
        var dFechaNacimiento = oForm.fechaNac_Profesor.value;
        var iTelefono = parseInt(oForm.telefono_Profesor.value);
        var iEdad = parseInt(oForm.edad_Profesor.value);
        var sDireccion = oForm.direccion_Profesor.value;

        //Creamos Profesor
        var oProfesor= new Profesor(sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,iEdad,sDireccion);
        s=oGestion.darAltaProfesor(oProfesor);
        if (!s) 
        {
            toastr.success("Profesor registrado correctamente");
        }
        else
        {
          toastr.warning("Este Profesor ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarAltaGrupo(){
    var s="";
    var oForm = document.formuAltaGrupo;
    var id = oForm.id_Grupo.value;
    var nombre = oForm.nombre_Grupo.value;
    var fecha_ini=oForm.fecha_ini_curso;
    
    var bValido = true;
    var sErrores = "";
    //Dni 
    var oExpReg = /^[0-9]{3}[a-zA-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Grupo.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Grupo.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        oForm.nombre_Grupo.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Grupo.className = "form-control";    

    }
    //mensaje de error o de confirmación
    //y llamada a método para añadir grupo
    if(bValido==false){
        s=sErrores;
        toastr.error(s);
    }
    else{
        //datos del Grupo
        var oFrom=document.formuAltaGrupo;
        var iId = oForm.id_Grupo.value.trim();
        var sNombre = oForm.nombre_Grupo.value.trim();

        //Creamos Grupo
        var oGrupo= new Grupo(iId,sNombre);
        s=oGestion.darAltaGrupo(oGrupo);
        if (!s) 
        {
            toastr.success("Grupo registrado correctamente");
        }
        else
        {
          toastr.warning("Este Grupo ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada


}
function validarAltaCurso(){
    var s="";
    var oForm = document.formuAltaCurso;
    var id = oForm.id_Curso.value;
    var nombre = oForm.nombre_Curso.value;
    var fecha_ini= oForm.fecha_ini_Curso.value;
    var fecha_fin=oForm.fecha_fin_Curso.value;
    var descripcion = oForm.descripcion_Curso.value;
    var precio = parseFloat(oForm.precio_Curso.value);
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true)
        {
            bValido = false;        
       
        }
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        //Marcar error
        oForm.id_Curso.className = "form-control input-md error";
    }
    else {
        //Desmarcar error
        oForm.id_Curso.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        oForm.nombre_Curso.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Curso.className = "form-control";    

    }

       //Fecha inicio
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_ini) == false)
    {
        if(bValido == true)
        {
            bValido = false;        
        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        oForm.fecha_ini_Curso.className = "form-control input-md error"; 
    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        fecha_nac = new Date (Date.parse(oForm.fecha_ini_Curso.value));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            oForm.fecha_ini_Curso.className = "form-control input-md error"; 
        }
        else
        {
            oForm.fecha_ini_Curso.className = "form-control "; 
        }
    }

    //Fecha Fin
    oExpReg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
    if (oExpReg.test(fecha_fin) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        
        }
        sErrores += "\nFormato fecha yyyy-mm-dd<br>";        
        //Marcar error
        oForm.fecha_fin_Curso.className = "form-control input-md error"; 

    }
    else {
        //Desmarcar error
        //comprobamos que la fecha sea correcta
        fecha_nac = new Date (Date.parse(oForm.fecha_fin_Curso.value));
        if (fecha_nac=="Invalid Date") 
        {
             sErrores += "\nFecha incorrecta<br>";
             bValido=false;
            oForm.fecha_fin_Curso.className = "form-control input-md error"; 
        }
        else
        {
            oForm.fecha_fin_Curso.className = "form-control "; 
        }
    }


    if (fecha_ini>fecha_fin) 
    {
        sErrores += "\nFecha inicio > fecha fin<br>";
        bValido=false;
        oForm.fecha_fin_Curso.className = "form-control input-md error";
        oForm.fecha_ini_Curso.className = "form-control input-md error";
    }

    //Descripcion 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(descripcion) == false)
    {
    
        if(bValido == true)
        {
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nDescripción incorrecta<br>";
        
        //Marcar error
        oForm.descripcion_Curso.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.descripcion_Curso.className = "form-control";    

    }
    //Precio 
    oExpReg = /^[0-9]/;
    if (oExpReg.test(precio) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nPrecio incorrecto<br>";
        
        //Marcar error
        oForm.precio_Curso.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.precio_Curso.className = "form-control";    

    } 


     //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        
        //datos del Curso
        var oFrom=document.formuAltaCurso;
        var iId = oForm.id_Curso.value.trim();
        var sNombre = oForm.nombre_Curso.value.trim();
        var dFecha_inicio = oForm.fecha_ini_Curso.value;
        var dFecha_fin = oForm.fecha_fin_Curso.value;
        var sDescripcion = oForm.descripcion_Curso.value.trim();
        var fPrecio = parseFloat(oForm.precio_Curso.value.trim());
        //Creamos Curso
        var oCurso= new Curso(iId,sNombre,dFecha_inicio,dFecha_fin,sDescripcion,fPrecio);
        s=oGestion.darAltaCurso(oCurso);
        if (!s) 
        {
            toastr.success("Curso registrado correctamente");
        }
        else
        {
          toastr.warning("Este Curso ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarAltaCentro(){
    
    var bValido = true;
    var sErrores = "";
    var oForm = document.formuAltaCentro;
    var iId = oForm.id_Centro.value;
    var snombre = oForm.nombre_Centro.value.trim();
    var slocalizacion = oForm.localizacion_Centro.value.trim();
    
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(iId) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Centro.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Centro.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(sNombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto<br>";
        
        //Marcar error
        oForm.nombre_Centro.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Centro.className = "form-control";    

    }
    //Localización 
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(sLocalizacion) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNumSegSocial.focus();       
        }
    
        sErrores += "\nLocalización incorrecta<br>";
        
        //Marcar error
        oForm.localizacion_Centro.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.localizacion_Centro.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        
        //datos del Centro
        var oFrom=document.formuAltaCentro;
        var iId = oForm.id_Centro.value.trim();
        var sNombre = oForm.nombre_Centro.value.trim();
        var sLocalizacion = oForm.localizacion_Centro.value.trim();
       
        //Creamos Centro
        var oCentro= new Centro(iId,sNombre,sLocalizacion);
        s=oGestion.darAltaCentro(oCentro);
        if (!s) 
        {
            toastr.success("Centro registrado correctamente");
        }
        else
        {
          toastr.warning("Este Centro ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada
}
function validarAltaAsignatura(){
    var s="";
    var oForm = document.formuAltaAsignatura;
    var id = oForm.id_Asignatura.value.trim();
    var nombre = oForm.nombre_Asignatura.value.trim();
    
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Asignatura.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Asignatura.className = "form-control";    

    }
    //Nombre
    oExpReg = /^[a-zA-Z\s]/;
    if (oExpReg.test(nombre) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNombrePaciente.focus();       
        }
    
        sErrores += "\nNombre incorrecto";
        
        //Marcar error
        oForm.nombre_Asignatura.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.nombre_Asignatura.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        //datos del Asignatura
        var oFrom=document.formuAltaAsignatura;
        var iId = oForm.id_Asignatura.value.trim();
        var sNombre = oForm.nombre_Asignatura.value.trim();
       
        //Creamos Asignatura
        var oAsignatura= new Asignatura(iId,sNombre);
        s=oGestion.darAltaAsignatura(oAsignatura);
        if (!s) 
        {
            toastr.success("Asignatura registrado correctamente");
        }
        else
        {
          toastr.warning("Este Asignatura ya existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada
}

/*--Funciones validar Bajas--*/
function validarBajaAlumno(){
    var s="";
    var oForm = document.formuBajaAlum;
    var dni = oForm.dni_Alumno.value; 
    
    var bValido = true;
    var sErrores = "";
    //Dni 
    var oExpReg = /^[0-9]{8}[a-zA-Z]{1}$/;
    if (oExpReg.test(dni) == false)
    {
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "Dni incorrecto<br>";
        
        //Marcar error
        oForm.dni_Alumno.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.dni_Alumno.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        //datos del Alumno
        var oFrom=document.formuBajaAlumno;
        var sDni = oForm.dni_Alumno.value.trim();
        s=oGestion.darBajaAlumno(sDni);

        if (s) 
        {
            toastr.success("Alumno Eliminado correctamente");
        }
        else
        {
          toastr.warning("Este Alumno No existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarBajaProfesor(){
    var s="";
    var oForm = document.formuBajaProfe;
    var dni = oForm.dni_Profesor.value; 
    
    var bValido = true;
    var sErrores = "";
    //Dni 
    var oExpReg = /^[0-9]{8}[a-zA-Z]{1}$/;
    if (oExpReg.test(dni) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nDni incorrecto<br>";
        
        //Marcar error
        oForm.dni_Profesor.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.dni_Profesor.className = "form-control";    

    }

    //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        //datos del Profesor
        var oFrom=document.formuBajaProfesor;
        var sDni = oForm.dni_Profesor.value.trim();
        s=oGestion.darBajaProfesor(sDni);

        if (s) 
        {
            toastr.success("Profesor Eliminado correctamente");
        }
        else
        {
          toastr.warning("Este Profesor No existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarBajaCurso(){
    var s="";
    var oForm = document.formuBajaCurso;
    var id = oForm.id_Curso.value.trim();
    var bValido = true;
    var sErrores = "";

    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Curso.className = "form-control input-md error";
    
    }
    else 
    {//Desmarcar error
        oForm.id_Curso.className = "form-control";   
    }
    
    //mensaje de error o de confirmación
    //y llamada a método para añadir curso
    if(bValido==false){
        s=sErrores;
        toastr.error(s);

    }
    else{
        //datos del Curso
        var oFrom=document.formuBajaCurso;
        var sId = oForm.id_Curso.value.trim();
        s=oGestion.darBajaCurso(sId);
        if(s) 
        {
            toastr.success("Curso Eliminado correctamente");
        }
        else
        {
          toastr.warning("Este Curso No existe");  
        }
    }
    //Fin Mensajes de error confirmación y llamada

}
function validarBajaGrupo(){
    var s="";
    var oForm = document.formuBajaGrupo;
    var id = oForm.id_Grupo.value;
    
    
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Grupo.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Grupo.className = "form-control";    

    }
    


    if(bValido==false){
        s=sErrores;
    }else{
        s="Sin errores";
    }
    toastr.warning(s);

}
function validarBajaCentro(){
    var s="";
    var oForm = document.formuBajaCentro;
    var id = oForm.id_Centro.value;
    
    
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Centro.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Centro.className = "form-control";    

    }
    


    if(bValido==false){
        s=sErrores;
    }else{
        s="Sin errores";
    }
    toastr.warning(s);

}
function validarBajaAsignatura(){
    var s="";
    var oForm = document.formuBajaAsignatura;
    var id = oForm.id_Asignatura.value;
    
    
    
    var bValido = true;
    var sErrores = "";
    //Id 
    var oExpReg = /^[0-9]{3}[A-Z]{1}$/;
    if (oExpReg.test(id) == false){
    
        if(bValido == true){
            bValido = false;        
            //Este campo obtiene el foco
            // top.frames[1].document.frmAltaPaciente.txtNIFPaciente.focus();       
        }
    
        sErrores += "\nEl id debe tener este formato: XXXA<br>";
        
        //Marcar error
        oForm.id_Asignatura.className = "form-control input-md error";
    
    }
    else {
        //Desmarcar error
        oForm.id_Asignatura.className = "form-control";    

    }
    


    if(bValido==false){
        s=sErrores;
    }else{
        s="Sin errores";
    }
    toastr.warning(s);

}