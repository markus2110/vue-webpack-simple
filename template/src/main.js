import Vue      from "vue";
import MainView  from "@/components/views/Main.vue";




new Vue({
    el: '#application-wrapper',

    // h => alias for createElement
    render: (h) => h(MainView)
});