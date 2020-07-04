import { Kontrasepsi } from "../scenes/Kontrasepsi";
import { Propinsi } from "../scenes/Propinsi";
import { PemakaiKontrasepsi } from "../scenes/PemakaiKontrasepsi";
import Errors from "../scenes/Errors";

const routes = [
  {
    path: "/",
    component: Propinsi,
    exact: true,
  },

  {
    path: "/Kontrasepsi/:id",
    component: Kontrasepsi,
  },
  {
    path: "/Kontrasepsi",
    component: Kontrasepsi,
  },

  {
    path: "/PemakaiKontrasepsi",
    component: PemakaiKontrasepsi,
  },
  {
    path: "/PemakaiKontrasepsi/:id",
    component: PemakaiKontrasepsi,
  },

  {
    path: "*",
    component: Errors,
    props: {
      code: 404,
    },
  },
];

export default routes;
