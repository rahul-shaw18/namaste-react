## useEffect Hook
        useEffect is a special function which is provided by React, we use this hook to make the api calls
        useEffect takes 2 arguments 1st is callback function and second is optional argument array

       Syntax: useEffect(()=>{ console.log("callback unction") }, [optional argument])

        

        CASE 1: if optional arguments is not passed then useEffect will be call every time when the component is rendered,
        useEffect(()=>{
                console.log("useEffect called");
            })


        CASE 2: if optional arguments is passed as Empty array then useEffect is called on 1st render and only once
        useEffect(()=>{
            console.log("useEffect called");
        }, [])

        CASE 3: If we pass data in Dependency array then useEffect is called only when the data changes
        useEffect(()=>{
                console.log("useEffect called");
            }, [btnNameReact])

        => useState Hook
        1. never create useState outside of the component
        2. it is used to create local state variables inside the component
        3. always try to create useState at the top of the component (ie) when the function starts, as it is a good practice and also to avoid any inconsistency.
        4. never create useState inside any if else case or any for loop or inside any function, as it leads to inconsistency in your component 


        =>Routing concepts
        1. install react-router-dom package
        2. create a routing configuration inside app.js
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

        3. import createBrowserRouter from react-router-dom 
            import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

        4. this createBrowserRouter will accept a configuration of list of objects and every object will have 2 keys like path and element
        path will define the url and element will define the component to be rendered when the path is accessed
        5. also import RouterProvider from react-router-dom
        6. react-router-dom - handles 404 error for unknown path url and returns a error page
        7. gives access to react hook {useRouteError} and this hook provides detailed information about the error
            import { useRouteError } from "react-router-dom"
            const Error = () => {

                const err = useRouteError()
                console.log(err)
                return (
                    <div>
                        <h1>Oops</h1>
                        <p>Something went wrong</p>
                        <p>{err.status }: {err.statusText }</p>
                    </div>
                )
            }

            export default Error
    root.render(<RouterProvider router={appRouter} />);

        8. children routes
        maintain the header whenever we route to any other pages
        outlet component is imported from react-router-dom and is replaced by child component and this outlet component cannot be seen in the HTML 
            <Outlet/>

        9. Linking of routes
        =>never use anchor tag to re-direct to any other pages
            <Link to="/">Home</Link>

        as it would re-load the entire web page and then re-directs to the actual page
        =>Navigate to any page without reloading the page using Link component from react-router-dom
        => hence this is why we call as a single page application
        Link is a wrapper over anchor tag and acts as a anchor tag in HTML

        9. 2 types of routing in web-apps
        => Client side routing - does not make a network call and fetch the result from client and routes to amother component without refreshing the page.
        => Server side routing - make a network call and fetch the result from server and refreshes the page 

        10. Dyanamic Routing 