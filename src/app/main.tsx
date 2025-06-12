import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from ".";

// 중복과 충돌을 피하기 위해서 normalize가 global보다 먼저와야 함
import "../shared/styles/normalize.css";
import "../shared/styles/global.css";
import "../shared/styles/variables.css";
import "../shared/styles/background-theme.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
