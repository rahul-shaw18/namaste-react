# namaste-react

## Episode 1

### 1. What is Emmet?

    Emmet is a web development tool. It is used to do coding faster efficiently. It generates a code
    snippet based on some abbreviations. It is available in many IDEs like Visual Studio Code, Atom.
    It enhances the productivity of web developers by simplyfying the process of writing HTML and CSS code.

### 2. Difference between a library & framework?

    Library is considered to be some set of files which is used to do some specific work. Libraries
    are usually not responsible for the overall structure or flow of an application.

    Framework is a collection of libraries which tells that if you use it some set of functionality
    will be imported in your project even though you are not using it. It provides a structured way
    of building applications

### 3. What is CDN? Why do we use it?

    Content Delivery Network(CDN) is used to serve the contents on internet fastly. We use it to serve
    some static files from CDN server to the client browser.Because it is fast the loading of static content
    will be quick. It is located in different geographic locations. CDNs are optimized to handle high traffic
    loads and provide better scalability and reliability. As user access some page then CDN closest to them
    will serve the static files.

### 4. Why is React known as React?

    React is known as react because it is reactive in nature. The term "reactive" refers to the ability of
    a program to react or respond to changes in its environment. The name "React" reflects the library's fundamental
    principle of reacting to changes in data and efficiently updating the UI

### 5. What is cross-origin in the script tag?

    The crossorigin attribute in script tags specifies the cross-origin policy for the script. The cross-origin
    policy determines how the browser handles requests for the script from other domains. The crossorigin
    attribute is only relevant when the script is retrieved from a third-party server. If the script is
    retrieved from the same server as the page, the crossorigin attribute will have no effect.

### 6. What is difference between React and ReactDOM?

    React and ReactDOM are two different JavaScript libraries that are used together to create React
    applications. React is responsible for creating the UI components, while ReactDOM is responsible
    for rendering those components to the DOM. ReactDOM act as a bridge between React and browser's DOM.

### 7. What is difference between react.development.js and react.production.js files via CDN?

    react.development.js - is used in development environment. this is not minified. in this easy to
    debug and develop application. features wise - Source maps, warnings, hot reloading

    react.production.js - is used in production environment. this is minified file. optimized for performance.

### 8. What are async and defer?

    Async - async attribute in script tag doesn't confirms the order of execution of scripts. whenever
    html parsing of html file happens in browser, then fetching or downloading of script file also
    happens i.e parallely. Once the fetching of script file completed it stop html parsing and start
    the execution of script files. After complete execution of script file, html parsing will continue.

    Defer - defer attribute in script tag maintains the order of execution of script files. Whenever
    html parsing of html file happens in browser, the fetch or downloading of script files also happen
    i.e. parallely. The execution of script file will happen only when html parsing gets completed.

## Episode 2

### 1. What is `NPM`?

mpm is a package manager, npm is used to download different javascript modules/packages present in the npm repository. It is a
command used to run from client box to download different packages or modules in there project.
So people call it `node package manager` but in npm documentation the full form of npm is never mentioned.
npm allows to update, install and manage javascript packages

### 2. What is Parcel/Webpack? Why do we need it?

Parcel or Webpack is javascript package that works as a bundler for javascript framework like
react js or vue or angular. It handles many other features like transpiling of code, minification
of js files. They provide cross browser support of ui framework. It bundles CSS or images into
one single js files. This file is then loaded by browser when your web page is opened.

### 3. What is `.parcel-cache`

.parcel-cache is a hidden folder that gets generated when we run parcel for building or development.
This folder contains information about the files that have been bundled, dependencies that have been resolved
cache of previous build files.

Whenever we run Parcel in development this folder gets regenerated so that you work with the latest version of code.
Whenevr we run Parcel in Production mode this folder doen't get regenerated. But it uses the exist code and rebuild only that
file which has any change since the last build.

The `.parcel-cache` folder is used by Parcel to improve the performance of your project. When you
build your project, Parcel will first check the .parcel-cache folder to see if the files that you
need have already been built. If they have, Parcel will simply load the files from the cache, which
can save a lot of time.

### 4. What is `npx`?

`npx` is a command-line tool that allows you to run Node.js packages without having to install them globally. This can be helpful for running one-off commands or for trying out new packages without cluttering up your system with unnecessary dependencies

### 5. what is difference between `dependencies` and `devDependencies`

dependencies - these are those dependency that is required to run my project if i deployed it in production.

npm install react

devDependencies - these are those dependency that is required while building my project. it actually helps
in building project or makes my life easy while doing development. these dependency are not shipped to the production build.

npm install -D parcel

### 6. What is `Tree Shaking`?

Tree shaking is a technique used to remove unused code from JavaScript bundles. This can improve the
performance of your application by reducing the size of the bundle.
Tree shaking works by analyzing the code in your bundle and identifying any code that is not used.
This code is then removed from the bundle, which can improve the performance of your application.
This is done by bundler like webpack/ parcel

### 7. What is `Hot Module Replacement`?

Hot module replacement is reflecting of cureently made changes in code to my dev server. While doing
development. if you made any changes in the code it will reflect that changes immediately to dev server
without any restarting of server required.

### 8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

1. hot module replacement
2. zero configuration
3. differential bundling
4. cross browser compatibility
5. Minification

`Zero-configuration`: Parcel is a zero-configuration bundler, which means that you don't need
to write any configuration files to use it. This makes it very easy to get started with Parcel.

`Hot module replacement`: Parcel supports hot module replacement (HMR), which allows you to make
changes to your code while your application is running. This can be very helpful for debugging
and development

`Minification`: it is a process of removing unnecessary characters from JavaScript code, such as
whitespace, comments, and unused code. This can make your code smaller and faster to load. Parcel
supports minification by default

### 9. What is `.gitignore`? What should we add and not add into it?

A .gitignore file is a text file that tells git which files and directories should be ignored
when tracking changes in a project. This can be helpful for excluding files that are not needed
in the repository.

files like -

node_modules/
dist/

should not be pushed to the git. so it should be added in gitignore file because these files can be
regenerated while building.

### 10. What is the difference between `package.json` and `package-lock.json`

The package.json file is a manifest file that describes your project's dependencies. It
lists the packages that your project depends on, as well as their versions. The package.json
file is used by Node.js to install the dependencies of your project when you run npm install.

The package-lock.json file is a lock file that records the exact versions of the packages
that were installed in your project. This is useful because it ensures that your project
always uses the same versions of the packages, even if the versions of the packages change
in the registry.

### 11. Why should i not modify `package-lock.json`

because it ensures that your project always uses the same versions of the packages, even if
the versions of the packages change in the registry.

### 12. What is `node_modules`? Is it a good idea to push that on git?

The node_modules folder is a directory that contains all of the JavaScript modules that are
installed in your project. These modules are used by your project to provide functionality.

No you should not push node_modules to git repository.

### 13. What is the `dist` folder?

dist folder is the folder generated by parcel when running or building the application.
this contains all bundled files with images being compressed or css being added into the js files.

### 14. What is `browserlists`?

A browserlist is a file that specifies which browsers your project should support. This is
important because it allows you to target specific browsers with your code, and it can help
you to avoid using features that are not supported by older browsers.

### Read about different bundlers: vite, webpack, parcel.

### Read about: ^ - caret and ~ - tilda

### Read about Script types in html(MDN Docs)

## Episode 3

### 1. What is JSX?

    JSX stands for javascript XML. It is XML/HTML like syntax. JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code.

### 2. Superpowers of JSX

    - JSX allows you to define and render React components using a syntax that looks similar to HTML tags.
    - You can embed JavaScript expressions within JSX using curly braces {}. This allows you to dynamically generate content.
    - JSX supports conditional rendering using JavaScript's conditional statements or ternary operators.

### 3. Role of type attribute in script tag? What options can i use there?

    The type attribute in the <script> tag specifies the type of scripting language used in the script.
        - In HTML5, JavaScript is the default scripting language. If you omit the type attribute, the browser assumes the content is JavaScript.
            ex - <script></script> // <script type="text/javascript"></script>
        - type="module" - This indicates that the script is a module, allowing you to use ES6 module syntax to import/export code

### 4. {TitleComponent} vs {`<TitleComponent />`} vs {`<TitleComponent></TitleComponent>`} in JSX

```
    {TitleComponent} - this tells that whatever is inside this is considered to be a javascript expression and it will get evaluated.
                       you can assign some variable inside {} to extract the value.
    {<TitleComponent />} - this tells the component returning the jsx value will be evaluated. so the `TitleComponent` component is function
                        which will return jsx. We define component within < />.
    {<TitleComponent></TitleComponent>} - this is similar to `{<TitleComponent />}`. We can write it like this.
    { TitleComponent() } - this is calling the `TitleComponent` and it will return jsx. so the o/p of it is same o/p as {<TitleComponent />}.
```

### 5. Create a nested header element using React.createElement(h1,h2,h3 inside div with class "title")

```
    const element = React.createElement("div", {}, [
            React.createElement("h1", { class: "title"}, "this is h1 tag"),
            React.createElement("h2", {class: "title"}, "this is h2 tag"),
            React.createElement("h3", {class: "title"}, "this is h3 element")
        ])

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element)
```

### 6. Create same element using JSX.

```
    const elem = <div>
      <h1 className="title">this is h1 tag</h1>
      <h2 className="title">this is h2 tag</h2>
      <h3 className="title">this is h3 tag</h3>
    </div>
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(elem)
```

### 7. Create a functional componentof the same with JSX. Pass attributes into the tag in JSX.

```
    const Elem = ({id}) => {
      return (
        <div>
          <h1 className="title">this is h1 tag {id}</h1>
          <h2 className="title">this is h2 tag {id}</h2>
          <h3 className="title">this is h3 tag {id}</h3>
        </div>
      )
    }
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<Elem id="2"/>)

```

### 8. Composition of Component(Add a component inside another)

```
const Child = () => {
  return (
    <div>
      <h3>Inside child component</h3>
    </div>
  )
}

const Parent = () => {
  return(
    <div>
      <p>This is component composition example</p>
      {Child()}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Parent/>)

```

### 9. Create a Header Component from scratch using Functional Components with JSX

        * Add a logo on left
        * Add a search bar in middle
        * Add user icon on right
        * Add CSS to make it look nice

```
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.logo {
    width: 120px;
    height: 120px;
}

.search-align {
    padding: 58px;
}

.profile {
    width: 60px;
    height: 60px;
    padding: 25px;
}

const Header = () => {
    return (<div className="container">
        <div className="logo-container">
            <img className="logo" alt="logo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100797/94312688-food-delivery-logo.jpg" />
        </div>
        <div className="search-align">
            Search: <input type="text" placeholder="Search"/>
        </div>
        <div>
            <img className="profile" alt="logo" src="https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-31634946729lnhivlto5f.png" />
        </div>
    </div>)
}

ReactDOM.createRoot(document.getElementById("root")).render(<Header />)
```

## Episode 4

### Is JSX mandatory for React?

No JSX is not mandatory for writing code in React. But the kind of flexibility it gives in writing code is what makes JSX favourite for developers.

### Is ES6 mandatory for React?

Yes we can use React without ES6. So to make it work we to use React.createElement() to make it work.

### {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX

```
    {TitleComponent} - this tells that whatever is inside this is considered to be a javascript expression and it will get evaluated.
                       you can assign some variable inside {} to extract the value.
    {<TitleComponent />} - this tells the component returning the jsx value will be evaluated. so the `TitleComponent` component is function
                        which will return jsx. We define component within < />.
    {<TitleComponent></TitleComponent>} - this is similar to `{<TitleComponent />}`. We can write it like this.
```

### How can i write comments in JSX?

    to comment the JSX code you have to wrap the code in `{/* */}` or `{ // }`

### What is <React.Fragment></React.Fragment> and <></> ?

    React component is suppose to return a single element tag. There can be a scenario that component doesn't return single but multiple element,
    so in that case we can use React.Fragment to return a single element even though there is multiple tags getting return from the component.

    <></> is shorthand syntax for <React.Fragment></React.Fragment>

### What is Virtual DOM ?

    Virtual DOM is a concept that is used in react to render only the specific dom element without loading of the page. React keeps the copy of the virtual dom in memory. and whenever any change happens in the dom then the diffing algorithm gets applied to the virtual dom and the copy virtual dom where the changes is being reflected. using diffing algorithm we identify the difference in both the dom and that specific part gets rendered in the react.

    When the state of the application changes, React updates the virtual DOM.
    The virtual DOM is a lightweight copy of the real DOM. It is a tree of JavaScript objects that represents the structure of the UI.
    React then uses a diffing algorithm to compare the previous and current virtual DOMs to determine which parts of the real DOM need to be updated.
    React then updates the real DOM in the most efficient way possible.

### What is Reconciliation in React ?

    Reconciliation is the process by which React updates the real DOM to match the virtual DOM. The virtual DOM is a lightweight in-memory representation of the real DOM

### What is React Fiber ?

    Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM. React Fiber is a complete rewrite of React's reconciliation algorithm. SO it basically does the same thing but in better way. Significant improvements to the performance and responsiveness of React applications :
         1. Key features of React Fiber is incremental rendering. This means that React can split the rendering work into chunks and spread it out over multiple frames. This is important because it allows React to keep the UI responsive, even when there is a lot of rendering work to be done.
         2. Another key feature of React Fiber is the ability to pause and resume rendering work. This is useful for things like animations and gestures. React Fiber can also prioritize different types of updates, which helps to ensure that the most important updates are applied first.

### Why we need keys in React ? When do we need keys in React ?

    we needs keys in react to uniquely identify the elements. React uses this key to check which element is being modified, delete or added.
    Keys are especially important when rendering lists that change frequently, such as a to-do list or a chat feed. We need keys in React whenever we are rendering a list of elements. This includes:

        1. Arrays
        2. Objects
        3. Iterators
        4. Fragments

### Can we use index as keys in React ?

    Yes we can use index as keys but it is not the recommended way to use index as keys while rendering the list of elements in react. For example, if we have a list of items and we use the index as the key, and then we reorder the list, React will have to re-render the entire list. This is because React will not be able to track which items have changed and which items have stayed the same.

### What is props in React ? Ways to

    Props on react is used to pass the value from one component to another component. we pass the value as attribute to the component tags and the attribute passed will be present as props of the component.

### What is a Config Driven UI ?

    Config driven ui is basically used for rendering the ui based on the api call. So the data to be shown in the ui will be access via rest api call.

## Episode 5

### What is the difference between Named export, Default export and \* as export?

    Default export - there is only one default export possible in js file. so only one variable can be exported as default one.
        Ex - // file name xyz.js
             const name = "sourav";
             default export name;
        we can import this variable in other file using
             import name from 'xyz.js'

    Named export - we can have a multiple named export in a js file.
        Ex - // filename xyz.js
             const name = "sourav"
             export {name}

        we can import named export variable using -
             import {name} from 'xyz.js'

    * as export - we use this type of export to expose all functions and variable in js file.
        Ex - // filename xyz.js

                const name = "sourav"

                export function add(a, b) {
                    return a + b;
                }

                export function subtract(a, b) {
                    return a - b;
                }

                export default function multiply(a, b) {
                    return a * b;
                }

                export * as utils from './utils';

        we can import this in other file in this way -

                import * as utils from './utils';

                const sum = utils.add(1, 2);
                const difference = utils.subtract(5, 3);
                const product = utils.multiply(2, 3);

### What is the importance of config.js file.

    The main purpose of the config.js file is to store static data that is need in over all application.

### What are React Hooks?

    React Hooks are a new feature introduced in React 16.8 that allow you to use state and other React features without writing a class component.

### Why do we need a useState hooks?

    This hook lets you declare a state variable and a function to update it. You can use multiple useState hooks in a single component to manage different pieces of state.

## Episode 6

### What is a Microservice?

    A microservice is a software architecture style where a single application is developed as a set of small, independent services. Each of these services represents a specific business capability and can be developed, deployed, and scaled independently. Microservices are designed to be loosely coupled and communicate with each other through well-defined APIs (Application Programming Interfaces).

    Key characteristics of microservices include:

    1. **Independence:** Each microservice operates independently and can be developed and deployed separately. This enables teams to work on   different services without interfering with each other.

    2. **Single Responsibility:** Microservices are designed to perform a specific business function, adhering to the Single Responsibility     Principle.

    3. **Scalability:** Microservices can be scaled independently based on the demand for their specific functionality. This allows for more    efficient resource utilization.

    4. **Resilience:** Failure in one microservice does not necessarily affect the entire application. The system can remain operational even   if some services are not available.

    5. **Technology Diversity:** Different microservices can be implemented using different technologies, languages, and frameworks based on    the specific requirements of each service.

    6. **Autonomous Deployment:** Microservices can be deployed independently of each other, allowing for continuous delivery and faster    release cycles.

    7. **Ease of Understanding and Maintenance:** Smaller codebases and clear service boundaries make it easier to understand, develop, and     maintain microservices.

    Microservices architecture is often contrasted with monolithic architecture, where an entire application is developed as a single,  tightly integrated unit. While microservices offer advantages in terms of flexibility, scalability, and resilience, they also introduce  challenges related to service communication, data consistency, and managing a distributed system. Successful implementation of   microservices requires careful consideration of these challenges and the adoption of appropriate tools and practices.

### What is Monolith architecture?

    Monolithic architecture is a traditional software design approach where an entire application is developed as a single, tightly integrated unit. In a monolithic architecture, all the components and modules of the application are interconnected and interdependent. The entire codebase is typically built, deployed, and scaled together.

    Key characteristics of monolithic architecture include:

    Single Codebase: The entire application is developed and maintained in a single codebase. All the components, modules, and functionalities are part of the same code.

    Tight Integration: Components and modules within the application are tightly integrated, often sharing the same code, libraries, and databases.

    Single Deployment Unit: The entire application is deployed as a single unit. When updates or changes are made to any part of the application, the entire application needs to be redeployed.

    Scalability: Scalability is achieved by replicating the entire application, rather than scaling individual components. This can lead to inefficient resource utilization.

    Technology Stack: A monolithic application typically uses a single technology stack, including a single programming language, framework, and database.

    Development and Deployment: Development, testing, and deployment are often centralized processes. Changes to different parts of the application are managed together.

    While monolithic architecture has been the traditional approach for many years and has some advantages, such as simplicity and ease of development, it also has drawbacks, especially as applications grow in size and complexity. Some of the challenges with monolithic architecture include:

    Scalability Issues: It can be challenging to scale specific components of the application independently. Scaling usually involves replicating the entire application.

    Limited Flexibility: Adding new features or technologies can be challenging as changes may impact the entire application.

    Maintenance Challenges: Large codebases can be difficult to maintain and update. Changes to one part of the application may have unintended consequences in other areas.

    Deployment Complexity: Deploying the entire application can be a complex and time-consuming process, especially for large-scale applications.

    In contrast to monolithic architecture, microservices architecture aims to address some of these challenges by breaking down the application into smaller, independently deployable services.

### What is the difference between Monolith and Microservice?

    Monolithic Architecture:

        Structure:
            Single Unit: The entire application is developed, deployed, and scaled as a single, tightly integrated unit.
            Tight Coupling: Components and modules within the application are tightly coupled, often sharing the same codebase, libraries, and databases.

        Development and Deployment:
            Centralized: Development, testing, and deployment processes are typically centralized.
            Single Deployment Unit: Changes to any part of the application require redeploying the entire monolith.

        Scalability:
            Horizontal Scaling: To scale, the entire monolith is replicated, which can be inefficient in terms of resource utilization.

        Technology Stack:
            Homogeneous Stack: A monolithic application usually uses a single technology stack, including a single programming language, framework, and database.

        Flexibility:
            Limited Flexibility: Adding new features or technologies can be challenging, as changes may impact the entire application.

    Microservices Architecture:

        Structure:
            Decentralized Services: The application is broken down into small, independently deployable services that communicate with each other.
            Loose Coupling: Services are loosely coupled, and each service has its own codebase, database, and dependencies.

        Development and Deployment:

            Decentralized Teams: Different teams can work on different services independently.
            Independent Deployment: Each service can be developed, deployed, and scaled independently of other services.

        Scalability:
            Granular Scaling: Specific services can be scaled independently based on demand, leading to more efficient resource utilization.

        Technology Stack:
            Diverse Stack: Different services within a microservices architecture can use different technologies, languages, and databases.

        Flexibility:
            Enhanced Flexibility: Adding new features or updating existing ones can be done more independently and with less impact on the overall system.

        Maintenance:
            Easier Maintenance: Services are smaller and focused, making them easier to understand, maintain, and update.

### Why do we need a useEffect Hook?

    The `useEffect` hook in React is used to perform side effects in function components. Side effects can include data fetching, subscriptions, manual DOM manipulations, and more. It allows you to run code after the component has rendered or when certain dependencies have changed.

    Here are some key reasons why the `useEffect` hook is important:

    1. **Asynchronous Operations:**
    - Many operations in a React component, such as data fetching or API calls, are asynchronous. The `useEffect` hook allows you to manage these asynchronous tasks.

    2. **Component Lifecycle Management:**
    - In class components, lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are used to manage side effects. `useEffect` combines these lifecycle methods into a single hook for better organization.

    3. **Avoiding Infinite Loops:**
    - By default, every render in a component triggers the execution of the `useEffect` function. It allows you to prevent infinite loops by specifying dependencies or using cleanup functions.

    4. **Dependency Tracking:**
    - You can pass an array of dependencies to `useEffect`. The effect will only re-run if any of the dependencies have changed. This helps in controlling when the effect should run.


    5. **Clean-Up Operations:**
    - `useEffect` can return a cleanup function, which will be executed when the component unmounts or when the dependencies change. This is useful for cleaning up resources or canceling subscriptions.


    6. **Fetching Data on Mount:**
    - `useEffect` is commonly used to fetch data when a component mounts. This ensures that the data is retrieved after the initial render.


    7. **Global State Synchronization:**
    - When dealing with global state management libraries like Redux, `useEffect` can be used to sync local component state with the global state.

    In summary, `useEffect` is a fundamental hook in React that enables you to manage side effects and perform actions at specific points in the component lifecycle. It promotes cleaner code organization and better control over asynchronous and lifecycle-related tasks in functional components.

### What is Optional Chaining?

    Optional Chaining, represented by ?. in JavaScript, is a feature that allows you to access properties of an object in a more convenient and error-proof way.

    Here’s how it works:

    If the value before ?. is undefined or null, the evaluation stops and undefined is returned.
    It provides a way to simplify accessing values through connected objects when it’s possible that a reference or function may be undefined or null.
    For example, consider an object user with a nested structure. If we want to access user.dog.name, but not all users have a dog property, trying to access user.dog.name directly could result in an error. To prevent this, we can use optional chaining:

    JavaScript
    let value = user.dog?.name;
    In this case, if user.dog is undefined or null, the expression short-circuits and undefined is returned. Otherwise, user.dog.name is returned.

    Optional chaining also works with function calls and array indices. For example, if we have a function user1 and an object user2 with a method dog, we can call these safely with optional chaining:

    JavaScript
    let user1 = () => console.log("Alex");
    let user2 = { dog() { console.log("I am Alex"); } }
    let user3 = {};

    user1?.(); // Calls the function if user1 is not undefined or null
    user2.dog?.(); // Calls the method if user2.dog is not undefined or null
    user3.dog?.(); // Does not result in an error even if user3.dog is undefined
    In the above example, user3.dog?.() does not result in an error even though user3.dog is undefined. Instead, it short-circuits and returns undefined2.

    This feature was introduced in ES2020 for JavaScript3, and similar concepts exist in other languages like Swift

### What is Shimmer UI?

    Shimmer UI is a technique used in web and mobile applications to improve the user experience during data loading or background processing1. It’s a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear1. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress1.

    Here are some benefits of using Shimmer UI1:

        It improves the perceived performance of the app by making it seem faster and more responsive.
        It reduces the cognitive load on the user by providing visual cues about the type and structure of the content that is being loaded.
        It eliminates surprises and confusion by showing a consistent and predictable UI before and after loading.
        It enhances the aesthetic appeal and user satisfaction by creating a smooth and elegant transition from loading to loaded.

### What is the difference between JS expression and JS statement?

    In JavaScript, expressions and statements are two fundamental concepts:

    1. **Expression:**
    - An expression is a piece of code that produces a value. It can be a combination of variables, operators, and literals that evaluates to a single value.
    - Examples of expressions:
        ```javascript
        5 + 3         // Evaluates to 8
        myVar         // Value of the variable myVar
        func()        // Value returned by a function
        ```

    2. **Statement:**
    - A statement is a larger piece of code that performs an action. It doesn't necessarily produce a value, but it can alter the state of the program.
    - Examples of statements:
        ```javascript
        let x = 5;    // Declaration statement
        if (x === 5) {
        // Conditional statement
        console.log('x is 5');
        }
        for (let i = 0; i < 3; i++) {
        // Loop statement
        console.log(i);
        }
        ```

    In summary, an expression produces a value, while a statement performs an action. Expressions can be part of statements. For example, the condition in an `if` statement is an expression.

### What is Conditional Rendering, explain with a code example

    Conditional rendering in programming refers to the practice of displaying different content or components based on certain conditions. It allows you to control the appearance of elements in your application dynamically. In JavaScript and React, this often involves using conditional statements to determine what to render.

    const Body = () => {
        let filteredResult = []
        let [restaurantList, setRestaurantList] = useState([]);
        let [searchResut, setSearchResult] = useState([])

        useEffect(() => {
            fetchData();
        }, [])

        const fetchData = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json()

            setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants)
            setSearchResult(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants)
        }

        return restaurantList?.length == 0 ? <Shimmer /> : (
            <div className="body">
                <div className="search-box">
                    <input
                    type="text"
                    onChange={(e) => {
                        let inputValue = e.target.value.toLocaleLowerCase();
                        filteredList = restaurantList.filter((restautant) => restautant.info.name.toLocaleLowerCase().includes(inputValue))

                    }}
                    />
                    <button onClick={() => {
                    setSearchResult(filteredList)
                    }}
                    >Search</button>
                </div>
                <div className="filter">
                    <button className="filter-btn" >
                    Top Rated Restaurant
                    </button>
                </div>
                <div className="res-container">
                    {searchResut?.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                    ))}
                </div>
            </div>
        )
    };

    return restaurantList?.length == 0 ? <Shimmer /> : (...)
    this line is a conditional rendering when the value of restaurantList is eqauls to 0 it will render Shimer Component other wise it will render the div element

### What is CORS?

    CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources hosted on another domain. The same-origin policy is a security measure that restricts web pages from making requests to a different domain than the one that served the web page.

    CORS allows servers to specify who can access its resources and under what conditions. It enables more secure cross-origin requests while still allowing legitimate interactions between different origins.

    Here's a brief overview of how CORS works:

    1. **Origin**: An origin is composed of the scheme (e.g., http or https), domain, and port of a URL. For example, `https://www.example.com`.

    2. **Cross-Origin Requests**: When a web page at one origin makes a request for a resource from another origin (cross-origin request), the browser sends an HTTP request that includes an Origin header indicating the origin of the requesting site.

    3. **Server Response**: The server at the target origin can include CORS headers in its response to indicate which origins are allowed to access its resources. The headers include:
    - `Access-Control-Allow-Origin`: Specifies which origin(s) are allowed to access the resource. It can be a specific origin or a wildcard (`*`) indicating any origin.
    - Other headers such as `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, etc.

    4. **Preflight Requests**: Certain types of requests (e.g., those with custom headers or using specific HTTP methods) trigger a preflight request. The browser sends an HTTP OPTIONS request to the server to check whether the actual request is allowed.

    CORS helps prevent unauthorized cross-origin requests and enhances the security of web applications. It is crucial in the context of modern web development, where resources are often distributed across different domains (e.g., APIs hosted on separate servers).

### What is async and await?

    In JavaScript, `async` and `await` are special syntax used to work with promises in a more comfortable and readable fashion.

    The `async` keyword can be placed before a function. This means the function will always return a promise. If a value is returned from the function, it will be wrapped in a resolved promise automatically. Here's an example:

    ```javascript
    async function f() {
    return 1;
    }
    f().then(alert); // 1
    ```

    In the above example, the function `f()` returns a resolved promise with the result of `1`.

    The `await` keyword can only be used inside an `async` function. It makes JavaScript wait until a promise settles and returns its result. Here's an example:

    ```javascript
    async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // wait until the promise resolves
    alert(result); // "done!"
    }
    f();
    ```

    In the above example, the function execution pauses at the line with `await` and resumes when the promise settles, with `result` becoming its result. So the code shows "done!" in one second.

    These features were introduced in ES2017 for JavaScript, and they make promises easier to write and handle.

### What is the use of 'const json = await data.json(); ' in getRestaurants()

    In the provided code, the line `const json = await data.json();` is responsible for parsing the JSON response from the API. Let's break down the key steps:

    1. **Fetch Data:**
    ```javascript
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    ```
    This line uses the `fetch` function to make an asynchronous HTTP request to the specified URL. The `await` keyword is used to wait for the promise returned by `fetch` to resolve, and it holds the response in the `data` variable.

    2. **Parse JSON:**
    ```javascript
    const json = await data.json();
    ```
    Here, `data.json()` is another asynchronous operation that returns a promise. The `await` keyword is used to wait for this promise to resolve, and it parses the JSON content of the response. The result is stored in the `json` variable.

    After parsing, `json` holds the JavaScript object representation of the JSON data returned by the API.

    3. **Update State:**
    ```javascript
    setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setSearchResult(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    ```
    The parsed data is then used to update the state variables `restaurantList` and `searchResult` using the `setRestaurantList` and `setSearchResult` functions, respectively.

    In summary, `const json = await data.json();` is a crucial step that transforms the raw response data into a usable JavaScript object, allowing you to access and manipulate the data in a more convenient format. It's a common pattern when working with APIs that return JSON data.

## Episode 7

### What are various ways to add images into our App? Explain with code examples

    In React, you can add images using the `<img>` tag or by importing images directly into your JavaScript code. Here's how you can do it:

    1. Using `<img>` tag:

        ```jsx
        // ExampleComponent.jsx
        import React from 'react';

        const ExampleComponent = () => {
        return (
            <div>
                <h1>Your React App</h1>
                <img src="/path/to/your/image.jpg" alt="Description" />
            </div>
        );
        }

        export default ExampleComponent;
        ```

        Make sure to replace `/path/to/your/image.jpg` with the correct path to your image.

    2. Importing Images in JavaScript (using webpack):

        If you are using a bundler like webpack, you can import images directly into your JavaScript code. Ensure that you have the necessary loaders configured (like `file-loader` or `url-loader`).

        ```jsx
        // ExampleComponent.jsx
        import React from 'react';
        import myImage from './path/to/your/image.jpg'; // Import the image

        const ExampleComponent = () => {
        return (
            <div>
                <h1>Your React App</h1>
                <img src={myImage} alt="Description" />
            </div>
        );
        }

        export default ExampleComponent;
        ```

### What would happen if we do console.log(useState())?

    when we do console.log of useState() it will give us [ undefined, f ]
    undefined: the initia value is undefined.
    f: it is the function to provide the value to variable and also it will refresh the component.

### How will useEffect behave if we don't add a dependency array ?

    if we do not add dependency array to useEffect(()=>{}) it will be called every time the component is rendered

### What is SPA?

    SPA stands for single page application, it means it will not refresh the page whenever we will do routing in react we use react-routing-dom npm package for doing routing, in place of anchor tag which is default for HTML routing we use Link component which is provided by react-routing-dom package

### What is difference between Client Side Routing and Server Side Routing?

    Server-side routing and client-side routing are two different approaches to handling web page requests and they each have their own advantages and disadvantages.

    Server-Side Routing:

        When a user clicks on a link, the URL changes and a new GET request is sent to the server.
        The server processes the request and sends a new document (usually HTML) as a response.
        The browser discards the old webpage altogether, and displays the newly downloaded one.

        Pros: A server-side route will only request the data that’s needed. No more, no less.
        Cons: Every request results in a full-page refresh. That means that unnecessary data is being requested. A header and a footer of a webpage often stays the same. This isn’t something you would want to request from the server again.

    Client-Side Routing:

        When a user clicks on a link, the URL changes but the request to the server is prevented.
        The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage.
        It is important to note that the whole page won’t refresh when using client-side routing. There are just some elements inside the application that will change.

        Pros: Because less data is processed, routing between views is generally faster.
        Cons: The whole website or web-application needs to be loaded on the first request. That’s why the initial loading time usually takes longer.

    In summary, server-side routing involves making a request to the server each time there is a need to rerender the application, while client-side routing handles routing internally by the JavaScript loaded on the page, and only makes a request to the server when the application is initially loaded.

## Episode 08

### How do you create Nested Routes react-router-dom cofiguration.

    We create Nested Routes like this
    const appRouter = createBrowserRouter([
    {
        path: '/', element: <AppLayout />, children: [
        { path: '/', element: <Body /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/restaurant/:resId', element: <RestaurantMenu /> }
        ], errorElement: <Error />
    },

    ])

### What is the order of life cycle method calls in Class Based Components

    In React class components, the lifecycle methods are invoked in a specific order during the component's lifecycle. Here is the order of the lifecycle method calls:

    1. **Constructor:**
    - The `constructor` is called when an instance of the component is being created.
    - It is used for initializing state and binding event handlers.
    - Example:
        ```javascript
        constructor(props) {
        super(props);
        // Initialize state or bind event handlers
        }
        ```

    2. **Render:**
    - The `render` method is required and must be pure (it should not modify component state).
    - It returns the JSX (or other React elements) that represent what should be rendered on the screen.
    - Example:
        ```javascript
        render() {
        return (
            // JSX representing the component's UI
        );
        }
        ```

    3. **ComponentDidMount:**
    - The `componentDidMount` method is called after the component has been rendered to the screen.
    - It is commonly used for initiating network requests, subscriptions, or manually changing the DOM.
    - Example:
        ```javascript
        componentDidMount() {
        // Perform actions after the component is mounted
        }
        ```

    4. **ComponentDidUpdate:**
    - The `componentDidUpdate` method is called after the component's updates are flushed to the screen.
    - It is useful for performing actions in response to props or state changes.
    - Example:
        ```javascript
        componentDidUpdate(prevProps, prevState) {
        // Perform actions based on prop or state changes
        }
        ```

    5. **ComponentWillUnmount:**
    - The `componentWillUnmount` method is called just before the component is removed from the DOM.
    - It is used for cleanup, such as canceling network requests or cleaning up subscriptions.
    - Example:
        ```javascript
        componentWillUnmount() {
        // Perform cleanup before the component is unmounted
        }
        ```

    Keep in mind that the `componentWillUnmount` method is called when a component is about to be removed from the DOM, and it provides an opportunity to perform cleanup tasks to prevent memory leaks.

    In modern React, there are additional lifecycle methods and the introduction of the `useEffect` hook in functional components, which provides similar functionality to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

### Why do we use componentDidMount?
    It is commonly used for initiating network requests, subscriptions, or manually changing the DOM.


### Why do we use componentWiIIUnmount? Show with example?

    componentWillUnmount is a method in React that is part of the component lifecycle. It is called just before a component is destroyed or removed from the DOM. This is the ideal place to perform any necessary cleanup, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in `componentDidMount`.

    Here's an example:

    ```jsx
    class ExampleComponent extends React.Component {
        intervalID;

        componentDidMount() {
            fetchDataFromAPI()
            this.intervalID = setInterval(this.fetchDataFromAPI, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.intervalID);
        }

        fetchDataFromAPI = () => {
            // Fetch data from API and update state
        };

        render() {
            return(
                .....
            )
        }
    }
    ```

    In this example, `componentDidMount` starts a timer to fetch data from an API every second. If the component is unmounted and the timer is not cleared, it will continue to run and attempt to call `fetchDataFromAPI` on a component that no longer exists, which would cause an error. To prevent this, `componentWillUnmount` is used to clear the timer just before the component is unmounted, preventing the error. This is why `componentWillUnmount` is important and where it can be used. It helps in avoiding memory leaks in your application.


### When and why do we need lazy()?

    In React, `React.lazy()` is a function that allows you to render a dynamic import as a regular component. It makes it possible to load components lazily, which can help to minimize the size of your bundle and improve load time on slower networks.

    Here's when and why you might want to use `React.lazy()`:

    1. **Performance optimization**: If your app has a lot of routes and not all of them are necessary for the initial render, you can use `React.lazy()` to only load the components as they are needed. This can significantly improve the performance of your app, especially on slower networks.

    2. **Code splitting**: `React.lazy()` allows you to split your code into smaller chunks that can be loaded on demand. This can help to reduce the size of your initial bundle and speed up the load time of your app.

    Here's an example of how you might use `React.lazy()`:

    steps to inclue lazy loading in your application

    1) import React, { lazy, Suspense } from "react";

    2) create a const variable and also note the variable name shoud be the name of Component or it will throw an error like Grocery is not defined
    const Grocery = lazy(() => import("./components/Grocery"))
    const About = lazy(() => import("./components/About"))
    const Body = lazy(() => import("./components/Body"))
    const Contact = lazy(() => import("./components/Contact"))
    const RestaurantMenu = lazy(()=>import("./components/RestaurantMenu"))

    3) In your appRouter in element add Suspence Component and inside it pass the Component which you want to use as lazily

    ``const appRouter = createBrowserRouter([
        {
            path: '/', element: <AppLayout />, children: [
            { path: '/', element: <Suspense><Body /> </Suspense> },
            { path: '/about', element: <Suspense><About /> </Suspense>},
            { path: '/grocery', element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense> },
            { path: '/contact', element: <Suspense><Contact /> </Suspense> },
            { path: '/restaurant/:resId', element:<Suspense><RestaurantMenu /> </Suspense>  }
            ], errorElement: <Error />
        },

    ])``

### What is suspense?
        In the context of React, Suspense is a component that lets you specify a fallback component to display while waiting for some asynchronous operation to finish, such as data fetching or code splitting.

        in the above code when we go to grocery route then Suppence Component will diplay the Shimmer Component until the required component that is Grocery is loader, Shimmer Component is loaded by fallback attributes of Suspence Component

        suspense is a technique that allows a program or a system to pause the execution of a task or operation until a specific consition is met. it is in asynchronous programming scenaraos where operations might take some time to complete such as fetching data from a network or loading resources.

### Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a       loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

    In React, the Suspense component allows you to specify a fallback component (like a loading message) that will be displayed while waiting for some asynchronous operation to complete. This could be a dynamic import (code splitting) or a data fetch. Once the asynchronous operation completes, the Suspense component will render the actual component.

    Suspense is a new feature in React that allows components to interrupt or "suspend" rendering in order to wait for some asynchronous resource (such as code, images or data) to be loaded; when a component "suspends", it indicates to React that the component isn't "ready" to be rendered yet, and won't be until the asynchronous resource it's waiting for is loaded. When the resource finally loads, React will try to render the component again.
    When a component is suspended, we need to render a fallback in place of the component while we wait for it to become "ready". In order to do so, we use the Suspense component provided by React
    eg : 

    <Suspense fallback={<h1>Loading..</h1>}>
        <Grocery>
    </Suspense>


### When do we and why do we need suspense?

    In React, `Suspense` is a component that lets you specify a fallback component to display while waiting for some asynchronous operation to finish, such as data fetching or code splitting. 

    Here's when and why you might want to use `Suspense`:

    1. **Code Splitting**: If your app has a lot of routes and not all of them are necessary for the initial render, you can use `Suspense` to only load the components as they are needed. This can significantly improve the performance of your app, especially on slower networks.

    2. **Data Fetching**: `Suspense` allows you to "wait" for some data to load and declaratively specify a loading state (like a spinner or fallback UI). This can help improve the user experience by providing immediate feedback while the data is loading.

    Here's an example of how you might use `Suspense`:

    ```jsx
    import React, { Suspense } from 'react';

    const OtherComponent = React.lazy(() => import('./OtherComponent'));

    function MyComponent() {
    return (
        <div>
        <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
        </Suspense>
        </div>
    );
    }
    ```

    In this example, `React.lazy()` is used to load `OtherComponent` only when it is needed. The `Suspense` component is used to display some fallback content (in this case, "Loading...") while `OtherComponent` is being loaded. Once `OtherComponent` has been loaded, it is rendered as a normal component.

## Episode

### What is prop drilling?

    Prop drilling, also known as “threading”, is a common pattern in React where data is passed from a parent component down to its child components via props1. This process is necessary when a child component deep in the component tree needs to access data from an ancestor component.

### What is lifting the state up?

    Lifting state up” is a common pattern in React that is used to share state between multiple components. Instead of trying to sync the state between different components, you “lift the state up” to their closest common ancestor. For example, instead of maintaining separate state variables in two child components, you would consolidate the state in their parent component and pass the state values and setter functions down to the children via props.

### What are Context Provider and Context Consumer?

    In React, the Context API is used to share data that can be considered "global" for a tree of React components.

    - **Context.Provider**: The `Context.Provider` is a React component that allows consuming components to subscribe to context changes. It accepts a `value` prop to be passed to consuming components that are descendants of this `Provider`. When `React.createContext` is called, it returns an object with a `Provider` and a `Consumer`. Here's an example:

    ```jsx
    <SomeContext.Provider value={/* some value */}>
    ```

    - **Context.Consumer**: The `Context.Consumer` is a React component that subscribes to context changes⁴. This lets you subscribe to a context within a function component. The `Consumer` component requires a function as a child which receives the current context value and returns a React node. Here's an example:

    ```jsx
    <SomeContext.Consumer>
    {value => /* render something based on the context value */}
    </SomeContext.Consumer>
    ```

    The `value` argument passed to the function will be equal to the `value` prop of the closest `Provider` for this context above in the tree. If there is no `Provider` for this context above, the `value` argument will be equal to the `defaultValue` that was passed to `createContext()`.

    The `useContext` Hook is also commonly used to access the context value. It's a simpler way to consume context and can be used in functional components.

### If you don't pass a value to the provider does it take the default value?

    Yes, if you don’t pass a value to the Context.Provider, it will use the default value that was passed to createContext() when creating the context. The default value is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them. However, in most cases, you would want to control the context value through the Provider to ensure your components are receiving the correct data.

