import API from "./api";

export async function login(username, password) {

    const response = await API.post("/auth/login", {

        username,

        password

    });

    localStorage.setItem("token", response.data.token);

    return response.data;

}

export function logout() {

    localStorage.removeItem("token");

}

export function isAuthenticated() {

    return localStorage.getItem("token") !== null;

}

export function getToken() {

    return localStorage.getItem("token");

}