export async function GetSearchResult(searchQuery) {

    const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${searchQuery}&per_page=20&page=1`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '200704b6c5mshb43ca1d1bafb8dap12a0fejsnf1364f2f2442',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };

    let results = [];
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        results = result.hits.map((res) => {
            return {
                cover: res.result.header_image_url,
                name: res.result.title,
                artist: res.result.artist_names,
                year: res.result.release_date_for_display,
                id: res.result.id
            }
        });

    } catch (error) {
        console.error(error);
    }

    return results;
}


export async function GetSongLyrics(songId) {
    const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${songId}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '200704b6c5mshb43ca1d1bafb8dap12a0fejsnf1364f2f2442',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };

    let results = {};
    try {
        const response = await fetch(url, options);
        const result = await response.text();

        results = result.response.lyrics.lyrics.body.html;

    } catch (error) {
        console.error(error);
    }

    return results;
}