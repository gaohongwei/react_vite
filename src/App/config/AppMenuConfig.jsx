import SlideShow from "@/pages/SlideShow";
import BackButton from "@/pages/BackButton";
import Facebook from "@/pages/Data/Facebook";
import LazyLoading from "@/pages/LazyLoading/lazy";
import LazyLoadingV2 from "@/pages/LazyLoading/lazyV2";
import LoadableLoading from "@/pages/LazyLoading/loadable";
import UrlPath from "@/pages/UrlPath";
import {
  ReactJson,
  StringifyJson,
  JsonViewerSample,
} from "@/pages/Data/JsonViewer";
import { Slider as SliderAntd } from "@/pages/SliderAntd";

const AppMenuConfig = [
  {
    path: "/",
    name: "Home",
    loader: () => import("@/pages/Home"),
    icon: "HomeOutlined",
  },
  {
    name: "CSS/Layout",
    icon: "AppstoreOutlined",
    routes: [
      {
        path: "/css/responsive",
        name: "Responsive",
        loader: () => import("@/pages/CSS/Image/Responsive"),
        icon: "DatabaseOutlined",
      },
      {
        path: "/css/background",
        name: "background",
        loader: () => import("@/pages/CSS/Image/Background"),
        icon: "DatabaseOutlined",
      },
      {
        path: "/css/FlexObj",
        name: "FlexObj",
        loader: () => import("@/pages/CSS/FlexObj"),
        icon: "DatabaseOutlined",
      },
      {
        path: "/css/position",
        name: "Position",
        loader: () => import("@/pages/CSS/Position"),
        icon: "DatabaseOutlined",
      },
    ],
  },
  {
    name: "Data & Api ",
    icon: "ApiOutlined",
    routes: [
      {
        path: "/Provider",
        name: "Provider",
        loader: () => import("@/pages/Data/Provider"),
      },
      {
        path: "/Promise",
        name: "Promise",
        loader: () => import("@/pages/Data/Promise"),
      },
    ],
  },
  {
    name: "Data View",
    icon: "TableOutlined",
    routes: [
      {
        path: "/NestedTable",
        name: "NestedTable",
        loader: () => import("@/pages/Table/NestedTable"),
      },
      {
        path: "/Customer",
        name: "Customer",
        loader: () => import("@/pages/Customer"),
      },
      {
        path: "/JsonViewerSample",
        name: "JsonViewer",
        element: <JsonViewerSample />,
      },
      {
        path: "/ReactJson",
        name: "ReactJson",
        element: <ReactJson />,
      },
      {
        path: "/StringifyJSon",
        name: "StringifyJSon",
        element: <StringifyJson />,
      },
    ],
  },

  {
    name: "URL & Path",
    icon: "SettingOutlined",
    routes: [
      {
        path: "/UrlPath",
        name: "UrlPath",
        element: <UrlPath />,
      },
      {
        path: "/Facebook",
        name: "Facebook",
        element: <Facebook />,
      },
      {
        path: "/BackButton",
        name: "BackButton",
        element: <BackButton />,
      },
    ],
  },
  {
    name: "Slider",
    icon: "SettingOutlined",
    routes: [
      {
        path: "/SliderAntd",
        name: "SliderAntd",
        element: <SliderAntd />,
      },
      {
        path: "/SlideShow",
        name: "SlideShow",
        element: <SlideShow />,
      },
    ],
  },
  {
    path: "/loading",
    name: "Loading",
    icon: "LoadingOutlined",
    routes: [
      {
        name: "Lazy",
        path: "/loading/lazy",
        element: <LazyLoading />,
      },
      {
        name: "Lazy V2",
        path: "/loading/lazyV2",
        element: <LazyLoadingV2 />,
      },
      {
        name: "loadable",
        path: "/loading/loadable",
        element: <LoadableLoading />,
      },
    ],
  },
  {
    path: "/error",
    name: "Error Boundary",
    icon: "WarningOutlined",
    loader: () => import("@/pages/ErrorPage"),
  },
  {
    path: "/codes",
    name: "Codes",
    icon: "WarningOutlined",
    routes: [
      {
        path: "/codes/HitSearch",
        name: "HitSearch",
        loader: () => import("@/codes/HitSearch"),
      },
      {
        path: "/codes/PlaceHolder",
        name: "PlaceHolder",
        loader: () => import("@/codes/PlaceHolder"),
      },
    ],
  },
];

export default AppMenuConfig;
