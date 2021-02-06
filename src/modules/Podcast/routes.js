import { PodcastsView } from "./Podcasts/Podcasts";

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
