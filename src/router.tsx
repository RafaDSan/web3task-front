import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import SidebarLayout from "src/layouts/SidebarLayout";
import BaseLayout from "src/layouts/BaseLayout";

import SuspenseLoader from "src/components/SuspenseLoader";
import Overview from "./content/overview";

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const CreateTask = Loader(
  lazy(() => import('src/content/applications/Tasks/settings/CreateTask'))
);

const ListTasks = Loader(
  lazy(() => import('src/content/applications/Tasks/tasks/ListTasks'))
)

const ProfileTasks = Loader(
  lazy(() => import('src/content/applications/Tasks/tasks/ProfileTasks'))
)

const HomeTask = Loader(
  lazy(() => import('src/content/applications/Tasks/tasks/HomeTasks'))
)

const Status404 = Loader(
  lazy(() => import("src/content/pages/Status/Status404"))
);
const Status500 = Loader(
  lazy(() => import("src/content/pages/Status/Status500"))
);


const routes: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Navigate to="/" replace />,
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          }
        ]
      },
      {
        path: "*",
        element: <Status404 />,
      },
      {        
        path: 'profile',
        children: [
          {
            path: '',
            element: <ProfileTasks />
          }
        ]
      },
      {        
        path: 'tasks',
        children: [
          {
            path: '',
            element: < HomeTask />
          },
          {
            path: 'create-task',
            element: <CreateTask />
          },
          {
            path: 'list-task',
            element: <ListTasks />
          }
        ]
      }
    ],
  },
  {
    path: "home-side",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          }
        ]
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ]
  },
];

export default routes;

