import About from "./Components/About";
import Body from "./Components/Body";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(true);
  const handleDarkMode = () => {
    setTheme(!theme);
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body theme={theme} />,
      children: [
        {
          path: "/",
          element: <Home handleDarkMode={handleDarkMode} theme={theme} />,
        },
        {
          path: "/about",
          element: <About handleDarkMode={handleDarkMode} theme={theme} />,
        },
        {
          path: "/resume",
          element: <Resume handleDarkMode={handleDarkMode} theme={theme} />,
        },
        {
          path: "/project",
          element: <Project handleDarkMode={handleDarkMode} theme={theme} />,
        },
        {
          path: "/contact",
          element: <Contact handleDarkMode={handleDarkMode} theme={theme} />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
