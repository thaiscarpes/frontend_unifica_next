export function fetchLocations() {
    return fetch('/api/locations').then((res) => res.json())
}

export function fetchLocation(id) {
    return fetch(`/api/locations/${id}`).then((res) => res.json())
}

export function searchLocation(searchTerm) {
    return fetch(`/api/search?query=${searchTerm}`, { cache: 'no-cache' })
}

export function editLocation(id, formData) {
    return fetch(`/api/locations/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
}

export function newLocation(formData) {
    return fetch('/api/locations/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
}

export function fetchUser(email) {
    return fetch(`/api/users/${email}`).then((res) => res.json())
}

export function fetchUsers() {
    return fetch(`/api/users`).then((res) => res.json())
}