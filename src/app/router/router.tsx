import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../../shared";
import { Dashboard, Report } from "../../pages";
import { ReportNavigation } from "../../features";
import { VonNeumannArchitecture } from "../../features/report";

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
            {
              path: "von-neumman-architecture",
              element: <VonNeumannArchitecture />,
            },
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
