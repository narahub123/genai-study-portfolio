import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../../shared";
import { Dashboard, Report, Study } from "../../pages";
import {
  CssBasic,
  CSSPosition,
  ReportNavigation,
  StudyNavigation,
} from "../../features";
import {
  SemanticAccessibilityDOM,
  VonNeumannArchitecture,
} from "../../features/report";

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
          element: <Study />,
          children: [
            {
              index: true,
              element: <StudyNavigation />,
            },
            {
              path: "css-basic",
              element: <CssBasic />,
            },
            {
              path: "css-position",
              element: <CSSPosition />,
            },
          ],
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
            {
              path: "semantic-tages-accessibility-dom",
              element: <SemanticAccessibilityDOM />,
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
