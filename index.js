import { ParticlesBg } from "particles-bg-vue";

Vue.component('particles-bg', ParticlesBg);

var app = new Vue({
    el: '#app',
    components: {
        ParticlesBg
    }
});