let url =
    "https://niravkpatel28.github.io/json-data-server/employees/employees.json";


export const getUsers = async(url) => {
    let response = await axios.get(url);
    console.log(response.data);
    return response.data;
};

export let userList = getUsers(url);
console.log(userList);