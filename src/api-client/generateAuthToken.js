import { awsS3BaseUrl } from "../config"

export default async function generateAuthToken() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username": "biswanath2",
        "password": "80016912991"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`${awsS3BaseUrl}/api/v2/login`, requestOptions)
        .then(response => {
            const accessToken = response.headers.get('access-token');
            sessionStorage.setItem("access-token", accessToken);
            return response.json()
        })
        .then(result => result)
        .catch(error => console.log('error', error));
}