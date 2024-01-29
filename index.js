// https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
// https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo
// https://itunes.apple.com/search?term=family+guy&media=tvShow&sort=recent
const baseUrl = "https://itunes.apple.com/search?term=";

async function fetchITunesData(searchTerm) {
    // Encode the search term for the URL
    const encodedSearchTerm = encodeURI(searchTerm);
    const url = `${baseUrl}${encodedSearchTerm}`;

    try {
        // Fetch data from the API
        const response = await fetch(url);

        // Handle network errors
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        // Parse response as JSON
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Log any fetch errors
        console.error("Fetch error:", error.message);
    }
}

// Example usage
fetchITunesData("Star Wars");
