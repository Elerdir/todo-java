export const getToken = () => {
	return localStorage.getItem("token");
}

export const getEmail = () => {
	return localStorage.getItem("email");
}

export const getName = () => {
	return localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
}

function LocalStorage() {


}

export default LocalStorage;