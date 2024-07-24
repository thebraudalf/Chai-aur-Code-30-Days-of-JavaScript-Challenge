// Fetch Data from an API

const url = "https://api.github.com/users/theBraudalf";

// Using fetch API to get a data from a public API using promises. 
fetch(url)
.then((response) => response.json())
.then((data) => console.log(data.twitter_username))
.catch((error) => console.log(error));


// Using fetch API to get a data from a public API using async/await.
async function fetchData() {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`Network Error! ${response.status}`);
        }

        const data = await response.json();
        console.log(data.name);
    } catch(error) { console.log(error) }
}

fetchData();
