import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import scanQR from "@/components/scanQR";
import AddQR from "@/components/AddQR";
import FailQR from "@/components/FailQR";
import SuccesQR from "@/components/SuccesQR";
import ViewQR from "@/components/ViewQR";
import UpdateQR from "@/components/UpdateQR";
import addInfoQR from "@/components/addInfoQR";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      props: true,
    },
    {
      path: "/ScanQR",
      name: "scanQR",
      component: scanQR,
      props: true,
    },
    {
      path: "/AddQR",
      name: "AddQR",
      component: AddQR,
      props: true,
    },
    {
      path: "/FailQR",
      name: "FailQR",
      component: FailQR,
      props: true,
    },
    {
      path: "/SuccesQR",
      name: "SuccesQR",
      component: SuccesQR,
      props: true,
    },
    {
      path: "/ViewQR",
      name: "ViewQR",
      component: ViewQR,
      props: true,
    },
    {
      path: "/UpdateQR",
      name: "UpdateQR",
      component: UpdateQR,
      props: true,
    },
    {
      path: "/addInfoQR",
      name: "addInfoQR",
      component: addInfoQR,
      props: true,
    },
  ],
});
