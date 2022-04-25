import React, { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Logged from "./layouts/LoggedLayout";
export interface IProps {
  children: JSX.Element;
}
export type TGeneralRoute = {
  exact?: boolean;
  path: string;
  layout?: ({ children }: IProps) => JSX.Element;
  component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
};

export type TRoutes = Array<TGeneralRoute>;

const routes: TGeneralRoute[] = [
  {
    exact: true,
    path: "/",
    layout: Logged,
    component: lazy(() => import("./pages/Home")),
  },
  //   {
  //     exact: true,
  //     path: "/login",
  //     guard: GuestGuard,
  //     layout: NonLogin,
  //     component: lazy(() => import("./screens/VendorLogin/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/signup",
  //     guard: GuestGuard,
  //     layout: NonLogin,
  //     component: lazy(() => import("./screens/SignUpPage/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/forgotpassword",
  //     guard: GuestGuard,
  //     layout: NonLogin,
  //     component: lazy(() => import("./screens/ForgotPassword/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/resetpassword",
  //     guard: GuestGuard,
  //     layout: NonLogin,
  //     component: lazy(() => import("./screens/ResetPassword/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/buyer/login",
  //     guard: BuyerGuestGuard,
  //     layout: NonLogin,
  //     component: lazy(() => import("./screens/Start/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/createoffer",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     component: lazy(() => import("./screens/CreateOffer/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/vendor/offer/:id",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     component: lazy(() => import("./screens/VendorViewOffer/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/edit/offer/:id",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     component: lazy(() => import("./screens/VendorEditOffer/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/feedback",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     component: lazy(() => import("./screens/FeedbackForm/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/styleguide",
  //     guard: GuestGuard,
  //     component: lazy(() => import("./screens/StyleGuide/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/logout",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     component: lazy(() => import("./screens/Logout/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/connectaccountstatus",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     component: lazy(() => import("./screens/ConnectAccountStatus/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/users",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     capabilities: [
  //       ICapabilites.can_add_user,
  //       ICapabilites.can_delete_user,
  //       ICapabilites.can_update_user,
  //     ],
  //     component: lazy(() => import("./screens/Users/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/vendors/:organisation",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     capabilities: [
  //       ICapabilites.can_add_user,
  //       ICapabilites.can_delete_user,
  //       ICapabilites.can_update_user,
  //     ],
  //     component: lazy(() => import("./screens/SuperAdminUsers/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/manageStores",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     capabilities: [
  //       ICapabilites.can_create_store,
  //       ICapabilites.can_update_store,
  //       ICapabilites.can_disable_store,
  //     ],
  //     component: lazy(() => import("./screens/ManageStores/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     component: lazy(() => import("./screens/Offers/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/offers",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     component: lazy(() => import("./screens/Offers/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/org",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     component: lazy(() => import("./screens/Organisation/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/stores",
  //     guard: AuthGuard,
  //     layout: Logged,
  //     component: lazy(() => import("./screens/SuperAdminStores/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/buyer/offer/:id",
  //     guard: BuyerAuthGuard,
  //     layout: BuyerLayout,
  //     component: lazy(() => import("./screens/BuyerViewOffer/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/buyer/createoffer/:storeId",
  //     guard: BuyerGuestGuard,
  //     layout: BuyerLayout,
  //     component: lazy(() => import("./screens/CreateBuyerOffer/index")),
  //   },
  //   {
  //     exact: true,
  //     path: "/404",
  //     component: lazy(() => import("./screens/errors/NotFound")),
  //   },
  //   {
  //     path: "*",
  //     layout: NonLogin,
  //     component: () => <Navigate to="/404" />,
  //   },
];

export const renderRoutes = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {routes.map((route, i) => {
        const { path, component, layout } = route;
        const Component = component;
        const Layout = layout || Fragment;
        return (
          <Route
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          ></Route>
        );
      })}
    </Routes>
  </Suspense>
);
