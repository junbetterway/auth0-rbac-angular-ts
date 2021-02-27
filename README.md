# Angular 11 With Role-Based Access Control Using [Auth0](https://auth0.com/) 
__[Auth0](https://auth0.com/)__ has simplified the process of securing single-page applications (SPAs). 

This repository serves as a basic example on how to secure your SPA using __[Angular 11](https://angular.io/)__. Also, this tutorial focuses on role-based access control which is supported by __[Auth0](https://auth0.com/)__ - see [Auth0 - Role-Based Access Control](https://auth0.com/docs/authorization/rbac) tutorial.

__[Auth0](https://auth0.com/)__ Angular SDK has simplified the login integration, authentication service, http intereceptors (and more) with your SPA. See [Auth0 Quickstart for Angular](https://auth0.com/docs/quickstart/spa/angular) for more details on how to setup your application.

Lastly, please clone the __[backend module](https://github.com/junbetterway/auth0-rbac-spring-sec)__ which is readily integrated to this front-end repository.

# What is Auth0?
__[Auth0](https://auth0.com/)__ helps anyone to do the following:

* Add authentication with multiple authentication sources, either social like Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others, or enterprise identity systems like Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider.
* Add authentication through more traditional username/password databases.
* Add support for linking different user accounts with the same user.
* Support for generating signed Json Web Tokens to call your APIs and flow the user identity securely.
* And many more ...

# Create a Free Auth0 Account
1. Go to __[Auth0](https://auth0.com/)__ and click __Sign Up__.
2. Use Google, GitHub or Microsoft Account to login.

# Customize [Auth0](https://auth0.com/) Configuration
After you have setup your Auth0 account and the above linked tutorials, make sure to udpate the __auth_config.json__.

```
{
    "domain": "<Auth0 DOmain>",
    "clientId": "<Client ID of the Application - SPA type>",
    "audience": "<API Identifier for claims>",
    "serverUrl": "<BackendUrl:PortNo>"
}
```

# Run The Application
1. Make sure to download all dependencies 

```
npm install
```

2. Run the application

```
ng serve
```

## Powered By
Contact me at [junbetterway](mailto:jkpminon12@yahoo.com)

Happy coding!!!
