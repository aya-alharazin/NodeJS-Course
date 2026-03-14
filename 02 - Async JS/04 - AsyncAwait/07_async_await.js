function fetchUser() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ name: "Aya", age: 25 });
        }, 2000);
    });
}

async function getUser() {
    console.log("A - before await");
    const user = await fetchUser();
    console.log("B - got user:", user.name);
}

getUser();
console.log("C - after calling getUser");
