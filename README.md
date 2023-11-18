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

npm is used to download different javascript modules/packages present in the npm repository. It is a 
command used to run from client box to download different packages or modules in there project.
So people call it `node package manager` but in npm documentation the full form of npm is never mentioned.
npm allows to update, install and manage javascript packages

### 2. What is Parcel/Webpack? Why do we need it?

Parcel or Webpack is javascript package that works as a bundler for javascript framework like 
react js or vue or andular. It handles many other features like transpiling of code, minification 
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

dist folder is the folder generated by parcel when running or building  the application.
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

### What is the difference between Named export, Default export and * as export?

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