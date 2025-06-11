import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <>하이</>,
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL || "/",
  }
);

export default router;
