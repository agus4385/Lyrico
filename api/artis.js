export default ({artistId}) => {
    return fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
}