	const name = document.querySelector("#name");
	let first_word_name = name.value.trim();
	const last_name = document.querySelector("#lastname");
	let first_word_lastname = last_name.value.trim();
	const email = document.querySelector("#input-email");
	const password = document.querySelector("#input-password");
	const type_bike = document.querySelector("select");
	const patternA_Z = /^[A-Za-z]+$/;
	const pattern_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

	function validateForm() {

		// Validacion nombre
		if (name.value.trim() === "") {
			document.querySelector(".name-container").insertAdjacentHTML("beforeend", "<span>Campo obligatorio</span>");
		} else if (!name.value.match(patternA_Z)) {
			document.querySelector(".name-container span").remove();
			document.querySelector(".name-container").insertAdjacentHTML("beforeend", "<span>Solo se permiten letras [A-Z]</span>");
		} else if (first_word_name.charAt(0) != first_word_name.charAt(0).toUpperCase()) {
			document.querySelector(".name-container span").remove();
			document.querySelector(".name-container").insertAdjacentHTML("beforeend", "<span>La primera letra debe ser mayúscula</span>");
		} else {
			document.querySelector(".name-container span").remove();
		}

		// Validacion apellido
		if (last_name.value.trim() === "") {
			document.querySelector(".lastname-container").insertAdjacentHTML("beforeend", "<span>Campo obligatorio</span>");
		} else if (!last_name.value.match(patternA_Z)) {
			document.querySelector(".lastname-container span").remove();
			document.querySelector(".lastname-container").insertAdjacentHTML("beforeend", "<span>Solo se permiten letras [A-Z]</span>");
		} else if (first_word_lastname.charAt(0) != first_word_lastname.charAt(0).toUpperCase()) {
			document.querySelector(".lastname-container span").remove();
			document.querySelector(".lastname-container").insertAdjacentHTML("beforeend", "<span>La primera letra debe ser mayúscula</span>");
		} else {
			document.querySelector(".lastname-container span").remove();
		}

		// Validacion correo
		if (email.value.trim() === "") {
			document.querySelector(".email-container").insertAdjacentHTML("beforeend", "<span>Campo obligatorio</span>");
		} else if (!email.value.trim().match(pattern_email)) {
			document.querySelector(".email-container span").remove();
			document.querySelector(".email-container").insertAdjacentHTML("beforeend", "<span>Ingrese un correo electrónico válido</span>");
		} else {
			document.querySelector(".email-container span").remove();
		}

		// Validacion password
		if (password.value.trim() === "") {
			document.querySelector(".form-group").insertAdjacentHTML("beforeend", "<span>Campo obligatorio</span>");
		} else if (password.value.length < 6) {
			document.querySelector(".form-group span").remove();
			document.querySelector(".form-group").insertAdjacentHTML("beforeend", "<span>La contraseña debe tener al menos 6 caracteres</span>");
		} else if (password.value === "password" || password.value === "123456" || password.value === "098754") {
			document.querySelector(".form-group span").remove();
			document.querySelector(".form-group").insertAdjacentHTML("beforeend", "<span>La contraseña es muy débil</span>");
		} else {
			document.querySelector("span").remove();
		}

		// Validacion select
		if (type_bike.value === "0") {
			document.querySelector("select").insertAdjacentHTML("afterend", "<span>Seleccione un tipo de bici</span>");
		} else {
			document.querySelector(".form-group select span").remove();
		}
	}