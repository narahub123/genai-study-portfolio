import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <>레이아웃</>,
      children: [
        {
          index: true,
        },
        {
          path: "study",
        },
        {
          path: "report",
        },
        {
          path: "toy",
        },
        {
          path: "extra",
        },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL || "/",
  }
);

export default router;
