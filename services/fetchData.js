export function fetchLocations() {

    return fetch('/api/locations').then((res) => res.json())

}

export function fetchLocation(id) {

    return fetch(`/api/locations/${id}`).then((res) => res.json())

}