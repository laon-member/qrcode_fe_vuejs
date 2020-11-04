import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import scanQR from "@/components/scanQR";
import AddQR from "@/components/AddQR";
import FailQR from "@/components/FailQR";
import SuccesQR from "@/components/SuccesQR";
import ViewQR from "@/components/ViewQR";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      //name: 'Home',
      component: Home,
    },
    {
      path: "/ScanQR",
      //name: 'scanQR',
      component: scanQR,
    },
    {
      path: "/AddQR",
      //name: 'AddQR',
      component: AddQR,
    },
    {
      path: "/FailQR",
      //name: 'FailQR',
      component: FailQR,
    },
    {
      path: "/SuccesQR",
      //name: 'SuccesQR',
      component: SuccesQR,
    },
    {
      path: "/ViewQR",
      //name: 'ViewQR',
      component: ViewQR,
    },
  ],
});
