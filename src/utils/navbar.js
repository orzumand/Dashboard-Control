import useId from "../hooks/useId";
import AsosiyPage from "../Pages/Asosiy";
import LoyihalarPage from "../Pages/Loyihalar";

export const navbar = [
  {
    id: useId,
    element: <AsosiyPage />,
    path: "/asosiy",
    title: "Asosiy",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <LoyihalarPage />,
    path: "/loyihalar",
    title: "Loyihalar",
    private: false,
    hidden: false,
  },
];
