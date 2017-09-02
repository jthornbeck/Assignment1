# Introduction to Front-end development with Angular.js
We will continue to build upon our directory application by creating a front-end interface with Angular.js to display listings, as well as the ability to add new listings and delete old ones.

### HTML/CSS
HTML (HyperText Markup Language) is a [**markup language**](https://en.wikipedia.org/wiki/Markup_language) most commonly used to create web pages. CSS (Cascading Style Sheets) is used to describe the presentation of our HTML pages. HTML and CSS are used along with Javascript to create web applications both simple and complex alike.

Please go through [this tutorial](http://learn.shayhowe.com) to learn the fundamentals of these two web technologies before continuing to the Bootstrap section. Keep in mind that this tutorial is very detailed and may take some time. Make sure to pay specific attention to:

- The semantic nature of HTML
- Layering CSS styles in a modular fashion using multiple classes
- The box model
- Positioning content with CSS

### Bootstrap
While we could create our web application with just HTML, CSS, and Javascript, writing all of our styles from scratch would be tedious.

Say we have an application that will be used by desktop, tablet, and mobile users alike. Our CSS would have to be **responsive**, changing the layout of the page depending on the user's device. Luckily, we have [**Bootstrap**](http://getbootstrap.com/), a responsive HTML/CSS/JS framework made by Twitter, to style our web applications. Bootstrap provides a [grid system](http://getbootstrap.com/css/#grid) for easy layout and [many components](http://getbootstrap.com/components/#nav) that will give the application a clean, modern, and consistent look.

Bootstrap's documentation is extensive, so don't worry about memorizing everything Bootstrap has to offer. If you understand the fundamentals of HTML and CSS, you should feel comfortable with the mechanics of the grid system and using classes to add styles to your HTML components. It'll be a better use of time to just refer back to the documentation whenever you need to add a new component to your webpage.

### Model-View-Controller (MVC) Architecture
A common design pattern used for developing user interfaces is the **model-view-controller** architecture. As the name suggests, in this architecture the application is broken up into three main components:

- The **model** is where the application's main data objects are stored.
- The **view** presents models to the user, and allows the user to interact with the models
- The **controller** interfaces between the model and the view
    - it updates models according to input provided by the user in the view
    - it updates the view when a model changes

The MVC concept has many variations and often does not *exactly* follow the pattern described above. You can take a look at [this page](https://developer.chrome.com/apps/app_frameworks) for more information, or simply go a Google search for MVC architecture.

### Angular.js
[**Angular.js**](https://angularjs.org/) is a MVC-based framework (maintained by Google) for developing web applications. Angular makes it (relatively) easy to start building an application by extending HTML so that the markup can describe not only the static webpage but also dynamic behavior.

Angular would be difficult to succintly describe in this readme. The framework certainly has a learning curve, and you should take some time going through tutorials to understand the basics. Below is a list of resources that may be helpful.

- **Code School**: [Shaping up with AngularJS](https://www.codeschool.com/courses/shaping-up-with-angular-js)
- **Code Academy**: [Learn AngularJS](https://www.codecademy.com/learn/learn-angularjs)
- [Tutorial provided from the AngularJS website](https://docs.angularjs.org/tutorial)
- **Egghead.io's** [videos on AngularJS](https://egghead.io/technologies/angularjs)

You *do not* need to go through all of these, just start to get familiar enough with Angular-specific concepts to complete this assignment, particularly the following:
- [ng-model](https://docs.angularjs.org/api/ng/directive/ngModel)
- [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)
    - $index
- [ng-click](https://docs.angularjs.org/api/ng/directive/ngClick)
- [$scope](https://docs.angularjs.org/guide/scope)

### Assignment
As before, We have provided skeleton code that will help guide you in completing this assignment.
##### Files provided in Assignment #2
- index.html
- app.js
- listingController.js
- listingFactory.js
- README
- style.css
- package.json
##### Orientation to the files provided for this assignment:
- In basic static HTML websites, **index.html** is the "homepage" or "landing page" when you visit a website. In node web applications, both index.html and app.js are used.
- **Index.html** has a basic template for the page and references the CSS frameworks
is used to control the style of the content on the landing page. Thus, the index.html is the view that the user sees.
- **app.js** registers the dependencies (i.e., modules needed to run the app).
- **style.css** - is the style formatting used to design the look and feel of the index.html page
- **listingController.js** - is a file that holds the code that Angular.js uses to control what is rendered on the browser in response to a user's interaction with the website
- **listingFactory.js** - is that same content that we had in our listings.json file for Assignment #1 but formatted into an object that Angular.js can manipulate
- **README** - You already know what this file contains.

#### Assignment Objectives
Your objective is to create the front-end of our UF Directory App that will display the listings and allow the user to add and delete old ones.
To accomplish this you will:
- modify the **listingController.js** file to  display listings, as well as the ability to add new listings and delete old ones.
-
### Tasks
Take a look at the source code provided to you, and map out how the different files communicate with one another. You will notice there is a *factory*, a *controller*, and a *view* (provided by the index.html page). It is your responsibility to:

1. Complete the methods in the controller
2. Implement the prompts in the HTML view to make the application functional

# Instructions:
1. Fork this repository and then navigate to it on your local machine's terminal
2. Implement the tasks listed above
3. Check your that it works by looking at the index.html file in your favorit browser
4. Points towards Project Bidding - Style your page using CSS

Note: Project Bidding Points give your group an edge over other groups for priority in choosing projects
=======
# Introduction to HTTP and Asynchronous Programming using Node.js
In this assignment we will start to build our UF Directory application. We will use [Node.js](https://en.wikipedia.org/wiki/Node.js) and some of its built in modules to implement a server that provides directory data to clients.
### What is HTTP? (Make sure to read [this](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177))
HTTP (Hypertext Transfer Protocol) is a **stateless** protocol that allows computers to communicate with each other. We use HTTP to allow our client application (the one users see) to communicate with a server that stores and manipulates data relevant to the user.

HTTP basically boils down to a *request* and a *response*. A client makes a request to either retreive, add, delete, or modify data in some fashion. The host recieves this request, and will provide an appropriate response back to the client. In our case, the server will handle requests for directory listings by responding with listing data in the [JSON](http://stackoverflow.com/questions/383692/what-is-json-and-why-would-i-use-it) format.

### What is Node.js?
Node.js is a Javascript runtime environment built on Google's V8 engine. In other terms, it is a program that interprets Javascript. If I made a file named `hello.js` with the line
```javascript
console.log('Hello, world!');
```
and then typed the command `node hello.js` in my terminal, I should expect to see the text
`Hello, world!` printed on the screen.

Node is well known for its ability to run code **asynchronously**.  This means that input and output are non-blocking, and the process of one function does not stop the execution of another. The way this asynchronous code is implemented is through **callback** functions, which are called after a certain process has been completed. The best way to illustrate this is through example.

This is a simple server that responds to all requests with the text `Request received!`.

```javascript
var http = require('http');
var port = 8080;

var requestHandler = function(request, response) {
  response.end('Request received!');
};

// a server is created, but not started
var server = http.createServer(requestHandler);

// the server is now started, listening for requests on port 8080
server.listen(port, function() {
  //once the server is listening, this callback function is executed
  console.log('Server listening on: http://127.0.0.1:' + port);
});
console.log('Is the server started?');
```
Which log statement do you expect to be printed first? Answer this, then type the command `node simpleServer.js` and see if the results match up with what you were thinking. `Is the server started?` gets printed first is because the call to `server.listen()` is asynchronous in nature. While server.listen() is not finished, the control flow gets passed to the next line of the program. Once server.listen() is finished, it executes the *callback*, defined by the anonymous function:
```javascript
function() {
    console.log('Server listening on: http://127.0.0.1:' + port);
}
```
Before continuing to the assignment, [these](http://www.theprojectspot.com/tutorial-post/Node-js-for-beginners-part-1-hello-world/2) [two](http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4) tutorials will help you further understand how Node is used to create servers and the nature of callback functions.

As you may imagine, the utility of the above server is quite low, since it has no ability to differentiate between requests and respond in the appropriate fashion.

## Assignment
Your objective is to create a server that provides listing data from a JSON file. To accomplish this, you will:
- use the File System module to load `listings.json` into memory  
- create a request handler with the URL module to send the listing data on a GET request to `localhost:8080/listings`
- use the HTTP module to create a server that makes use of this request handler

We have provided skeleton code that will help guide you in completing this assignment. There is also a file named `server.tests.js` containing unit tests to test your server once completed.

# Instructions:

1. Make sure you have [Node.js](https://nodejs.org/en/) installed
2. Clone this repository and then navigate to it on your local machine's terminal
  See Link for details on how to clone repository - (https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
3. Install the mocha testing framework with the command `npm install -g mocha`
4. Use `npm install` to download all necessary dependencies
5. Implement the server by filling in code blocks found in `server.js`, then test your implementation with the command `mocha server.tests.js`. (make sure your server is running before trying to run the tests!)

Some resources you may find useful:
- [Creating an HTTP server in Node.js](http://www.sitepoint.com/creating-a-http-server-in-node-js/)
- URL [Parsing](https://nodejs.org/api/url.html#url_url_parsing)
- The [HTTP module](https://nodejs.org/api/http.html)
    - [response.writeHead()](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)
    - [response.end()](https://nodejs.org/api/http.html#http_response_end_data_encoding_callback)
- The File System's [readFile() method](https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback)
