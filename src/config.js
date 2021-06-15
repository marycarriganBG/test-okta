const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`
    issuer: 'https://billgo-carrigan.okta.com/oauth2/default',
    clientId: '0oa10e0i9kBYcJfbj5d7',
    redirectUri: window.location.origin + '/login/callback',
};

const oktaSignInConfig = {
    baseUrl: 'https://billgo-carrigan.okta.com',
    clientId: '0oa10e0i9kBYcJfbj5d7',
    redirectUri: window.location.origin + '/login/callback',
    logo: '//logo.clearbit.com/billgo.com',
    authParams: {
        // If your app is configured to use the Implicit flow
        // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
        // you will need to uncomment the below line
        // pkce: false
    },
    // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
    customButtons: [
        {
            title: 'Go to BillGO!',
            className: 'btn-customAuth',
            click: function() {
                // clicking on the button navigates to another page
                window.location.href = 'https://billgo.com';
            }
        }
        ]
};

export { oktaAuthConfig, oktaSignInConfig };
