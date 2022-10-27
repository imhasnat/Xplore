import React from 'react';

const Blog = () => {
    return (
        <div className="w-11/12 md:w-9/12 mx-auto my-28 overflow-hidden">
            <div className="container max-w-4xl p-10 md:p-20 mx-auto rounded-lg shadow-sm bg-gray-100 text-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">October 27, 2022</span>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold">What is cors?</p>
                    <p className="mt-2">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers. The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.</p>
                </div>
                <div className="mt-5">
                    <p className="text-2xl font-bold">Why are you using firebase? What other options do you have to implement authentication?</p>
                    <p className="mt-2">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Other authentication are: STYTCH,Ory,Supabase,Okta,PingIdentity,Keycloak,Frontegg,Authress,Auth0,Amazon Cognito,OneLogin</p>
                </div>
                <div className="mt-5">
                    <p className="text-2xl font-bold">How does the private route work?</p>
                    <p className="mt-2">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated thats mean Logged in.</p>
                </div>
                <div className="mt-5">
                    <p className="text-2xl font-bold">What is Node? How does Node work?</p>
                    <p className="mt-2">Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;