export function mergeQueryString(key, value) {
    let entries = new URLSearchParams(window.location.search).entries()

    const result = {}
    for (const [key, value] of entries)
        result[key] = value

    result[key] = value

    return result
}
