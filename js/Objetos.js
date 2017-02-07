//---------- Objeto Gestion ----------
function Gestion(){
	this.centros= [ ];
	this.cursos= [ ];
	this.grupos= [ ];
	this.alumnos= [ ];
	this.profesores= [ ];
	this.asignaturas= [ ];
}

//---------- Métodos de Gestion ----------
Gestion.prototype.darAltaAlumno = function(oAlumno){
	var bEncontrado = false;
	//buscamos si el alumno esta ya registrado 
	for (var i = 0; i < this.alumnos.length; i++) 
	{
		if (this.alumnos[i].sDni==oAlumno.sDni) 
		{
			bEncontrado = true;
		}
	}

	//registramos el alumno
	if (!bEncontrado) 
	{
		this.alumnos.push(oAlumno);
	}

	return bEncontrado;

}

Gestion.prototype.darBajaAlumno = function(sDni){
	var bEncontrado = false;

	//buscamos si el alumno esta registrado 
	for (var i = 0; i < this.alumnos.length; i++) 
	{
		if (this.alumnos[i].sDni==sDni) 
		{
			bEncontrado = true;
			var indiceBorrar=i;

		}
	}

	//registramos el alumno
	if (bEncontrado) 
	{
		this.alumnos.splice(indiceBorrar,1);
	}

	return bEncontrado;
}

Gestion.prototype.darAltaProfesor= function(oProfesor){
	var bEncontrado = false;
	//buscamos si el alumno esta ya registrado 
	for (var i = 0; i < this.profesores.length; i++) 
	{
		if (this.profesores[i].sDni==oProfesor.sDni) 
		{
			bEncontrado = true;
		}
	}

	//registramos el alumno
	if (!bEncontrado) 
	{
		this.profesores.push(oProfesor);
	}

	return bEncontrado;
}
Gestion.prototype.darBajaProfesor = function(sDni){
	var bEncontrado = false;

	//buscamos si el alumno esta registrado 
	for (var i = 0; i < this.profesores.length; i++) 
	{
		if (this.profesores[i].sDni==sDni) 
		{
			bEncontrado = true;
			var indiceBorrar=i;

		}
	}

	//registramos el alumno
	if (bEncontrado) 
	{
		this.profesores.splice(indiceBorrar,1);
	}

	return bEncontrado;
}


Gestion.prototype.darAltaGrupo= function(oGrupo){
	var bEncontrado = false;
	//buscamos si el alumno esta ya registrado 
	for (var i = 0; i < this.grupos.length; i++) 
	{
		if (this.grupos[i].iId==oGrupo.iId) 
		{
			bEncontrado = true;
		}
	}

	//registramos el alumno
	if (!bEncontrado) 
	{
		this.grupos.push(oGrupo);
	}

	return bEncontrado;
}

Gestion.prototype.darAltaCurso= function(oCurso){
	var bEncontrado = false;
	//buscamos si el alumno esta ya registrado 
	for (var i = 0; i < this.cursos.length; i++) 
	{
		if (this.cursos[i].sId==oCurso.sId) 
		{
			bEncontrado = true;
		}
	}

	//registramos el curso
	if (bEncontrado==false) 
	{
		
		this.cursos.push(oCurso);
	}

	return bEncontrado;
}
Gestion.prototype.darBajaCurso = function(sId){
	var bEncontrado = false;

	//buscamos si el cursos esta registrado 
	for (var i = 0; i < this.cursos.length; i++) 
	{
		if (this.cursos[i].sId==sId) 
		{
			bEncontrado = true;
			var indiceBorrar=i;

		}
	}

	//registramos el alumno
	if (bEncontrado) 
	{
		this.cursos.splice(indiceBorrar,1);
	}

	return bEncontrado;
}

Gestion.prototype.darAltaCentro= function(oCentro){
	var bEncontrado = false;
	//buscamos si el alumno esta ya registrado 
	for (var i = 0; i < this.centros.length; i++) 
	{
		if (this.centros[i].iId==oCentro.iId) 
		{
			bEncontrado = true;
		}
	}

	//registramos el alumno
	if (!bEncontrado) 
	{
		this.centros.push(oCentro);
	}

	return bEncontrado;
}

Gestion.prototype.darAltaAsignatura= function(oAsignatura){
	var bEncontrado = false;
	//buscamos si el alumno esta ya registrado 
	for (var i = 0; i < this.asignaturas.length; i++) 
	{
		if (this.asignaturas[i].iIdAsignatura==oAsignatura.iIdAsignatura) 
		{
			bEncontrado = true;
		}
	}

	//registramos el alumno
	if (bEncontrado==false) 
	{
		this.asignaturas.push(oAsignatura);
	}

	return bEncontrado;
}

Gestion.prototype.formulari
//********** Fin Objeto Gestion **********












//---------- Objeto Persona ----------
function Persona(sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,iEdad,sDireccion){
	
	this.sDni=sDni;
	this.sNombre=sNombre;
	this.sApellido=sApellido;
	this.dFechaNacimiento=dFechaNacimiento;
	this.iTelefono=iTelefono;
	this.iEdad= iEdad;
	this.sDireccion=sDireccion;

}

//---------- Métodos Objeto Persona ----------
Persona.prototype.toHTMLRow=function(){
	
	return    "<td>" + this.sDni + "</td>"
			+ "<td>" + this.sNombre + "</td>"
	  		+ "<td>" + this.sApellido + "</td>"
	   		+ "<td>" + this.dFechaNacimiento + "</td>"
	   		+ "<td>" + this.iTelefono + "</td>"
	   		+ "<td>" + this.iEdad + "</td>"
	   		+ "<td>" + this.sDireccion + "</td>";

}
//********** Fin Objeto Persona **********

//---------- Objeto Profesor ----------
function Profesor (sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,iEdad,sDireccion){
	Persona.call(this,sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,iEdad,sDireccion);
	this.asignatura = [ ];//array vacio que contine a objetos asignatura
}

Profesor.prototype = Object.create(Profesor.prototype);

Profesor.prototype.toHTMLRow=function(){

	var tdDatosProfesor=    "<td>" + this.sDni + "</td>"
					 	  + "<td>" + this.sNombre + "</td>"
	  					  + "<td>" + this.sApellido + "</td>"
	   				 	  + "<td>" + this.dFechaNacimiento + "</td>"
	   				 	  + "<td>" + this.iTelefono + "</td>"
	   				 	  + "<td>" + this.iEdad + "</td>"
	   				 	  + "<td>" + this.sDireccion + "</td>";
	
	

	//recorremos las asignaturas del profesor y almacenarlas en td
	var tdDatosAsgnaturas = "<td>";
	for (var i = 0; i < this.aAsignatura.length; i++) {
	  		 	
	    tdDatosAsgnaturas+= this.aAsignatura[i].sNombreAsignatura+"\n";
	}  		
	tdDatosAsgnaturas += "<td/>"; 

	var tdProfesor= tdDatosProfesor+tdDatosAsgnaturas;


	return tdProfesor;
}
//********** Fin Objeto Profesor **********

//---------- Objeto Asignatura ----------
function Asignatura (iIdAsignatura,sNombreAsignatura){
	this.iIdAsignatura = iIdAsignatura;
	this.sNombreAsignatura= sNombreAsignatura;
}
//---------- Métodos Objeto Asignatura ----------

Asignatura.prototype.toHTMLRow=function(){

	return    "<td>" + this.sNombreAsignatura + "</td>"; 

}
//********** Fin Objeto Asignatura **********

function Nota(oAsignatura,fNota)
{
	this.asignatura=oAsignatura;
	this.fNota=fNota;
}
//---------- Objeto Alumno ----------
function Alumno (sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,iEdad,sDireccion){
	Persona.call(this,sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,iEdad,sDireccion);
	this.aNotas = [ ];//array vacio que contine a objetos Notas
}

//---------- Métodos Objeto ALumno ----------
Alumno.prototype = Object.create(Alumno.prototype);

Alumno.prototype.toHTMLRow = function(){

	var tdDatosAlumno=     "<td>" + this.sDni + "</td>"
					 	  + "<td>" + this.sNombre + "</td>"
	  					  + "<td>" + this.sApellido + "</td>"
	   				 	  + "<td>" + this.dFechaNacimiento + "</td>"
	   				 	  + "<td>" + this.iTelefono + "</td>"
	   				 	  + "<td>" + this.iEdad + "</td>"
	   				 	  + "<td>" + this.sDireccion + "</td>";
	
	

	//recorremos las asignaturas del profesor y almacenarlas en td
	var tdDatosNota = "<td>";
	for (var i = 0; i < this.aNotas.length; i++) {
	  		 	 
	    tdDatosNota += this.aNotas[i].sNombreNota;
	}  		
	tdDatosNota += "<td/>"; 

	var tdAlumno = tdDatosAlumno+tdDatosNota;


	return tdAlumno;

}
//********** Fin Objeto Alumno **********



//------------Objeto Curso--------------
function Curso(sId,sNombre,dFecha_ini,dFecha_fin,sDescripcion,fPrecio){
	this.sId=sId;
	this.sNombre=sNombre;
	this.dFecha_ini=dFecha_ini;
	this.dFecha_fin=dFecha_fin;
	this.sDescripcion=sDescripcion;
	this.fPrecio=fPrecio;
	this.asignaturas=[ ];
	this.grupos=[ ];
}
Curso.prototype.toHTMLRow=function(){
	
	return    "<td>" + this.sId + "</td>"
			+ "<td>" + this.sNombre + "</td>"
	  		+ "<td>" + this.dFecha_ini + "</td>"
	   		+ "<td>" + this.dFecha_fin + "</td>"
	   		+ "<td>" + this.sDescripcion + "</td>"
	   		+ "<td>" + this.fPrecio + "</td>";

}
//------------Objeto Centro--------------
function Centro(id,sNombre,sLocalizacion){
	this.iId=id;
	this.sNombre=sNombre;
	this.cursos=[ ];//array de cursos
	this.sLocalizacion=sLocalizacion;

}
Centro.prototype.toHTMLRow = function(){
	return    "<td>" + this.iId + "</td>"
			+ "<td>" + this.sNombre + "</td>"
	  		+ "<td>" + this.sLocalizacion + "</td>";
	   		
}
//------------Objeto Grupo--------------
function Grupo(id,sNombre,alumnos){
	this.iId=id;
	this.sNombre=sNombre;
	this.alumnos=[];

}
Grupo.prototype.toHTMLRow = function(){
	return    "<td>" + this.iId + "</td>"
			+ "<td>" + this.sNombre + "</td>"
	  		+ "<td>" + this.alumnos + "</td>";
	   		
}