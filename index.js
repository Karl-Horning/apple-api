// https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
// https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo
// https://itunes.apple.com/search?term=family+guy&media=tvShow&sort=recent

/**
 * Base URL for the iTunes Search API.
 * @type {string}
 */
const baseUrl = "https://itunes.apple.com/search?term=";

/**
 * Generates the iTunes API URL for a given search term.
 * @param {string} searchTerm - The term to search for on iTunes.
 * @returns {string} The complete iTunes API URL.
 */
const generateITunesUrl = (searchTerm) => {
    // Encode the search term for the URL
    const encodedSearchTerm = encodeURI(searchTerm);
    return `${baseUrl}${encodedSearchTerm}`;
};

/**
 * Fetches data from the iTunes Search API based on the provided search term.
 * @param {string} searchTerm - The term to search for on iTunes.
 */
const fetchITunesData = async (searchTerm) => {
    const url = generateITunesUrl(searchTerm);

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
};

// Example usage
fetchITunesData("Star Wars");
