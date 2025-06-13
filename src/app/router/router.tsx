import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../../shared";
import { Dashboard } from "../../pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "study",
          element: <>Study</>,
        },
        {
          path: "report",
          element: <>Report</>,
        },
        {
          path: "toy",
          element: <>Toy Project</>,
        },
        {
          path: "extra",
          element: <>Extra</>,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL || "/",
  }
);

export default router;
