const api = `14d4b642acmsh8181f0c991bcd81p150df1jsn7e168dac9ad0`;

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
                songName: res.result.full_title,
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
        const result = await response.json();

        results = result.lyrics.lyrics.body.html;

    } catch (error) {
        console.error(error);
    }

    return results;
}

export async function GetSongDetails(songId) {
    const url = `https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=${songId}`;
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

        let youtube_url = result.song.youtube_url;
        youtube_url = youtube_url.replace('http://www.youtube.com/watch?v=', '');

        const lyrics = await GetSongLyrics(songId);
        const artistID = result.song.primary_artist.id;
        const artistResult = await GetArtistDetails(artistID);

        results = {
            description: result.song.description_preview,
            videoId: youtube_url,
            artist: result.song.artist_names,
            songName: result.song.title,
            lyrics: lyrics,
            artistDesc : artistResult.description
        };

    } catch (error) {
        console.error(error);
    }

    return results;
}

async function GetArtistDetails(artistId) {
    const url = `https://genius-song-lyrics1.p.rapidapi.com/artist/details/?id=${artistId}`;
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
        const result = await response.json();
       
        results = {
            description : result.artist.description_preview
        };
    } catch (error) {
        console.error(error);
    }

    return results;
}