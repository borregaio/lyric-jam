const api = `uODKK-hhq00en1ijK6sQrXwqsdmvOsyZnW4LV9EXv8WL90_H1kTa5mxBJAVZFaq5`;

export async function GetSearchResult(searchQuery) {
    
    const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${searchQuery}&per_page=20&page=1`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': api,
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
                songName : res.result.full_title,
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
            'X-RapidAPI-Key': api,
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