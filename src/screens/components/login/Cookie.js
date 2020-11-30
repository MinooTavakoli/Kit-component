import React from 'react';

export default function CookieTest() {
    document.cookie = "test1=Hello";
    document.cookie = "test2=World";

    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('test2'))
        .split('=')[1];

    function alertCookieValue() {
        alert(cookieValue);
    }
    return (
        <div>y
            <button onClick={alertCookieValue}>Show cookie value</button>
        </div>
    );
}