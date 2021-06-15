import React from 'react';

const Protected = () => {
    return (
        <>
            <h1>Protected</h1>
            <h3>This page is only visible once the user has been authenticated by Okta.</h3>
        </>
    );
}
export default Protected;