import { lazy } from "react";

const PodcastsView = lazy(() => import("./Podcasts/Podcasts"));

/**
 * modules / Podcast / routes
 */
const routes = [
  {
    path: "/",
    name: "Podcasts",
    exact: true,
    component: PodcastsView,
  },
];

export default routes;
