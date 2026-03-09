import { createBrowserRouter } from "react-router";
import { NewsListPage, NewsDetailPage } from "@/pages";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <NewsListPage />,
    },
    {
      path: "/news",
      element: <NewsDetailPage />,
    },
  ],
  {
    basename: "/pd-code-news-app-example/",
  },
);
