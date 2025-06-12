import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../../shared";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <>Home</>,
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
