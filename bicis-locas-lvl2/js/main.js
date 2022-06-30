
function validateForm() {
	const name_input = document.querySelector("#name").value.trim();
	const last_name = document.querySelector("#lastname").value.trim();
	const email = document.querySelector("#input-email").value.trim();
	const password = document.querySelector("#input-password").value.trim();
	const type_bike = document.querySelector("select").value;
	const patternA_Z = /[a-zA-Z]/;
	const pattern_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	//creamos el span
	var span = document.createElement("span");
	//llamamos al div principal para juntarlo con nodo hijo
	var input_box = document.getElementsByClassName("input-box");
	//borramos los spans cada vez que se da click en registrar
	var spans = document.getElementsByTagName("span");
	for (var i = 0; i < spans.length; i++) {
		spans[i].parentNode.removeChild(spans[i]);
	}
	// Validación nombres
	if (name_input.length == 0) {
		input_box[0].appendChild(span);
		span.innerHTML = "Ingrese un nombre";
		return false;
	}//Sólo se permiten letras
	else if (!name_input.match(patternA_Z)) {
		input_box[0].appendChild(span);
		span.innerHTML = "Solo se permiten letras de la A-Z";
		return false;
	}//Primera letra en mayúsucla
	else if (name_input.charAt(0) != name_input.charAt(0).toUpperCase()) {
		input_box[0].appendChild(span);
		span.innerHTML = "El nombre debe comenzar con mayúsucula";
		return false;
	}//Validación apellidos
	else if (last_name.length == 0) {
		input_box[1].appendChild(span);
		span.innerHTML = "Ingrese un apellido";
		return false;
	}//sólo letras en apellido
	else if (!last_name.match(patternA_Z)) {
		input_box[1].appendChild(span);
		span.innerHTML = "Solo se permiten letras de la A-Z";
		return false;
	}//primera letra apellido mayúscula
	else if (last_name.charAt(0) != last_name.charAt(0).toUpperCase()) {
		input_box[1].appendChild(span);
		span.innerHTML = "El nombre debe comenzar con mayúsucula";
		return false;
	} //Validación correo
	else if (email.length == 0) {
		input_box[2].appendChild(span);
		span.innerHTML = "Ingrese correo electrónico";
		return false;
	}//email válido
	else if (!email.match(pattern_email)) {
		input_box[2].appendChild(span);
		span.innerHTML = "Correo electrónico inválido";
		return false;
	}//contraseña
	else if (password.length == 0) {
		input_box[3].appendChild(span);
		span.innerHTML = "Ingrese su contraseña";
		return false;
	}//contraseña de al menos 6 caracteres
	else if (password.length < 6) {
		input_box[3].appendChild(span);
		span.innerHTML = "La contraseña debe tener al menos 6 caracteres";
		return false;
	}//password no igual a "password" ó "123456" ó "098754"
	else if ((password == "password") || (password == "123456") || (password == "098754")) {
		input_box[3].appendChild(span);
		span.innerHTML = "La contraseña es muy débil";
		return false;
	}//opción bicis válida
	else if (type_bike === '0') {
		input_box[4].appendChild(span);
		span.innerHTML = "Seleccione un tipo de bici";
		return false;
	}
	return true;
}