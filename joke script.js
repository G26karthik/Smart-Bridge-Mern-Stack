document.getElementById('get-joke-btn').addEventListener('click', fetchJoke);

async function fetchJoke() {
    const jokeContainer = document.getElementById('joke-container');
    try {
        jokeContainer.textContent = 'Loading...';
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
            throw new Error('Failed to fetch the joke');
        }
        const joke = await response.json();
        jokeContainer.textContent = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        jokeContainer.textContent = 'Oops! Could not fetch a joke right now. Please try again later.';
    }
}
