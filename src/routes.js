import { podcastRoutes } from "./modules/Podcast";

/**
 * Routes
 */
export const routes = [
  ...podcastRoutes,
  {
    path: "*",
    name: "Fallback",
    component: () => <h1>Not found</h1>,
  },
];
