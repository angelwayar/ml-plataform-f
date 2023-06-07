import { NextResponse } from "next/server";

export async function registerUser(data) {
    const response = await fetch(
        "http://127.0.0.1:8000/users/",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        },
    );

    const res = await response.json();

    return NextResponse.json({ res });
}

export async function login(data) {
    var formBody = [];
    for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    const response = await fetch(
        "http://127.0.0.1:8000/users/login/",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody,
        },
    );


    const res = await response.json();
    // console.log(res);

    return res;
    // return NextResponse.json(response);
}