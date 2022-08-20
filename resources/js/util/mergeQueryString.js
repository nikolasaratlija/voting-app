// appends a new object to the query string
export function mergeQueryString(key, value) {
    const entries = new URLSearchParams(window.location.search).entries() // gets query string from URL

    // creates an object from the current query string
    const queryStringObject = {}
    for (const [key, value] of entries)
        queryStringObject[key] = value

    if (key in queryStringObject && !value)
        delete queryStringObject[key] // deletes key if value the is empty
    else
        queryStringObject[key] = value // append value to object

    return queryStringObject
}
