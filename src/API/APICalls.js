export async function GetSearchResult(searchQuery) {
    
    const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${searchQuery}&per_page=20&page=1`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `923ca8d630msh4011bbe65fa9509p1cd530jsn5a01`,
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };

    let results = [];
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        //console.log(result);
        results = result.hits.map((res)=>{
            return {
                cover : res.result.header_image_url,
                name : res.result.title,
                artist : res.result.artist_names,
                year : res.result.release_date_for_display
            }
        });

    } catch (error) {
        console.error(error);
    }

    return results;
}