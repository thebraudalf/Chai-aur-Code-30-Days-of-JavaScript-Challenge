// Using Third-Party Modules

// Installing third party module "lodash" using npm
import _ from "lodash";

let func = _.spread((val1, val2) => val1 + val2)

console.log(func([4, 4]));


// Installing third party module "axious" using npm to make network request
import axios from "axios";

async function fetchData() {
    try {
        const response = await axios.get("https://api.github.com/users/thebraudalf");
        const data = await response.data;
        console.log(data.id);
    } catch (error) { console.log(`${error}, was found.`)}
}

fetchData();
