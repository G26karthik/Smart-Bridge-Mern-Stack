async function fetchUserData() {
    const userContainer = document.getElementById('userContainer');
    try {
        // Fetch data from the API
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const user = data.results[0];
        
        // Display the user's data
        userContainer.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture" width="100" height="100">
            <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
        `;
    } catch (error) {
        // Handle errors
        userContainer.innerHTML = `<p>Oops! Something went wrong. Please try again later.</p>`;
        console.error('Error fetching data:', error);
    }
}