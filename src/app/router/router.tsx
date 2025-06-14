import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../../shared";
import { Dashboard, Report } from "../../pages";
import { ReportNavigation } from "../../features";

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
          element: <Report />,
          children: [
            { index: true, element: <ReportNavigation /> },
            { path: "von-neumman-architecture", element: <>폰 노이만 구조</> },
          ],
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
