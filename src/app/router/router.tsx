import { createBrowserRouter } from "react-router-dom";
import { App } from "../../shared";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL || "/",
  }
);

export default router;
