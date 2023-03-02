export const getToken = () => {
	return localStorage.getItem("token");
}

export const setToken = (token) => {
	localStorage.setItem("token", token);
}

export const getEmail = () => {
	return localStorage.getItem("email");
}

export const setEmail = (email) => {
	localStorage.setItem("email", email);
}

export const getName = () => {
	return localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
}

export const setFirstName = (firstName) => {
	localStorage.setItem("firstName", firstName);
}

export const setLastName = (lastName) => {
	localStorage.setItem("lastName",lastName);
}

export const deleteLocaleStorage = () => {
	// todo: delete only token, email, names
	localStorage.clear();
}

function LocalStorage() {


}

export default LocalStorage;