import { lazy } from "react";

const PodcastsView = lazy(() => import("./Podcasts/Podcasts"));
const PodcastView = lazy(() => import("./Podcast/Podcast"));

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
  {
    path: "/podcast/:podcastId",
    name: "Podcast",
    exact: false,
    component: PodcastView,
  },
];

export default routes;
