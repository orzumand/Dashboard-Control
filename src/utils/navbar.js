import useId from "../hooks/useId";
import AsosiyPage from "../Pages/Asosiy";
import LoyihalarPage from "../Pages/Loyihalar";
import BajarilmoqdaPage from "../Pages/Bajarilmoqda";
import BajarilganligiPage from "../Pages/Bajarilganligi";
import BajarilishiKechikmoqdaPage from "../Pages/Bajarilish_Kechikmoqda";
import SignInPage from "../Pages/SignIn";
import i1 from "../Assets/Icon/element-3.png";
import i2 from "../Assets/Icon/chart.png";
import i3 from "../Assets/Icon/chart-success.png";
import i4 from "../Assets/Icon/health.png";
import i5 from "../Assets/Icon/frame.png";
import BatafsilPage from "../Pages/Batafsil";
export const navbar = [
  {
    id: useId,
    element: <AsosiyPage />,
    path: "/asosiy",
    title: "Asosiy",
    private: false,
    hidden: false,
    icons: i1,
  },
  {
    id: useId,
    element: <LoyihalarPage />,
    path: "/loyihalar",
    title: "Loyihalar",
    private: false,
    hidden: false,
    icons: i2,
  },
  {
    id: useId,
    element: <BajarilganligiPage />,
    path: "/bajarilganligi",
    title: "Bajarilganligi",
    private: false,
    hidden: false,
    icons: i3,
  },
  {
    id: useId,
    element: <BajarilmoqdaPage />,
    path: "/bajarilmoqda",
    title: "Bajarilmoqda",
    private: false,
    hidden: false,
    icons: i4,
  },
  {
    id: useId,
    element: <BajarilishiKechikmoqdaPage />,
    path: "/bajarilishi-kechikmoqda",
    title: "Bajarilishi kechikmoqda",
    private: false,
    hidden: false,
    icons: i5,
  },
  {
    id: useId,
    element: <SignInPage />,
    path: "/signin",
    title: "SignIn",
    private: true,
    hidden: true,
    icons: null,
  },
  {
    id: useId,
    element: <BatafsilPage />,
    path: "/loyihalar/batafsil",
    title: "batafsil",
    private: true,
    hidden: false,
    icons: null,
  },
];
