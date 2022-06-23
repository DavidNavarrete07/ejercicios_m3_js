function validateForm() {
	const name = document.querySelector("#name");
	let fist_word_name = name.value;
	const last_name = document.querySelector("#lastname");
	let first_word_lastname = last_name.value;
	const email = document.querySelector("#input-email");
	const password = document.querySelector("#input-password");
	const type_bike = document.querySelector("select");
	const patternA_Z = /^[A-Za-z]+$/;
	const pattern_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

	// Validacion nombre
	if (name.value === "") {
		document.querySelector(".name-container").insertAdjacentHTML("beforeend", "<span>Campo obligatorio</span>");
	} else if (!name.value.match(patternA_Z)) {
		document.querySelector(".name-container").insertAdjacentHTML("beforeend", "<span>Solo se permiten letras [A-Z]</span>");
	} else if (fist_word_name.charAt(0) != fist_word_name.charAt(0).toUpperCase()) {
		document.querySelector(".name-container").insertAdjacentHTML("beforeend", "<span>La primera letra debe ser mayúscula</span>");
	}

	// Validacion apellido
	if (last_name.value === "") {
		document.querySelector(".lastname-container").insertAdjacentHTML("beforeend", "<span>Campo obligatorio</span>");
	} else if (!last_name.value.match(patternA_Z)) {
		document.querySelector(".lastname-container").insertAdjacentHTML("beforeend", "<span>Solo se permiten letras [A-Z]</span>");
	} else if (first_word_lastname.charAt(0) != first_word_lastname.charAt(0).toUpperCase()) {
		document.querySelector(".lastname-container").insertAdjacentHTML("beforeend", "<span>La primera letra debe ser mayúscula</span>");
	}

	// Validacion correo
	if (email.value === "") {
		document.querySelector(".email-container").insertAdjacentHTML("beforeend", "<span>Campo obligatorio</span>");
	} else if (!email.value.match(pattern_email)) {
		document.querySelector(".email-container").insertAdjacentHTML("beforeend", "<span>Ingrese un correo electrónico válido</span>");
	}

	// Validacion password
	if (password.value === "") {
		document.querySelector(".form-group").insertAdjacentHTML("beforeend", "<span>Campo obligatorio</span>");
	} else if (password.value.length < 6) {
		document.querySelector(".form-group").insertAdjacentHTML("beforeend", "<span>La contraseña debe tener al menos 6 caracteres</span>");
	} else if (password.value === "password" || password.value === "123456" || password.value === "098754") {
		document.querySelector(".form-group").insertAdjacentHTML("beforeend", "<span>La contraseña es muy débil</span>");
	}

	// Validacion select
	if (type_bike.value === "0") {
		document.querySelector("select").insertAdjacentHTML("afterend", "<span>Seleccione un tipo de bici</span>");
	}
}