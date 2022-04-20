const addUser = async() => {
    const url = "/.netlify/functions/adduser";
    const res = await fetch(url);
    const resJson = await res.json();
    //console.log({resJson});


    const userId = resJson.userid;
    console.log(userId);

    let idField = document.getElementById("useridField");
    idField.innerText = `${userId}`;
}
