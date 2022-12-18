import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Menu from "@/views/Menu.vue";
import Message from "@/views/Message.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/menu/:Content?", //: means that it is a parameter, ? means that it is optional and can be null, and if we wanted more than one parameter we would use /:categoryId/:productId
    component: Menu,
  },
  {
    path: "/message",
    component: Message,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
