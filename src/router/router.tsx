import { createBrowserRouter } from "react-router";
import { NewsListPage } from "../pages/NewsListPage/NewsListPage";
import { NewsDetailPage } from "../pages/NewsDetailsPage/NewsDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NewsListPage />,
  },
  {
    path: "/news",
    element: <NewsDetailPage />,
  },
]);
