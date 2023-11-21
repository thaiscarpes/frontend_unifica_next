//FUNÇÃO QUE PROCURA OS DADOS PARA O BACKEND, RESUMIDAMENTE PARA COMUNICAR COM A API
//O OBJETIVO É UNIFICAR TODAS AS REQUISIÇÕES PARA O BACKEND EM UM ÚNICO ARQUIVO

//FUNÇAO QUE BUSCA TODAS AS LOCALIZAÇÕES
export function fetchLocations() {
    return fetch('/api/locations').then((res) => res.json())
}

//FUNÇAO QUE BUSCA UMA LOCALIZAÇÃO ESPECIFICA
export function fetchLocation(id) {
    return fetch(`/api/locations/${id}`).then((res) => res.json())
}

//FUNÇÃO QUE PROCURA POR UMA LOCALIZAÇÃO A APRTIR DE TERMOS DE BUSCA
export function searchLocation(searchTerm) {
    return fetch(`/api/search?query=${searchTerm}`, { cache: 'no-cache' })
}

//FUNÇÃO QUE SOLICITA AO BACKEND A EDIÇÃO DE UM LOCAL
export function editLocation(id, formData) {
    return fetch(`/api/locations/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
}

//FUNÇAO QUE ENVIA PARA O BACKEND OS DADOS PARA O CADASTRI DE UM LOCAL 
export function newLocation(formData) {
    return fetch('/api/locations/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
}

//FUNÇÃO QUE PROCURA UM E-MAIL DE USUÁRIO DO BACKEND
export function fetchUser(email) {
    return fetch(`/api/users/${email}`).then((res) => res.json())
}

//FUNÇÃO QUE BUSCA TODOS OS USUÁRIOS
export function fetchUsers() {
    return fetch(`/api/users`).then((res) => res.json())
}