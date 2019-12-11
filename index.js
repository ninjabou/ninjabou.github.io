import { ParticlesBg } from "particles-bg-vue";
export default {
    name: "App",
    components: {
        'particles-bg': ParticlesBg
    }
};

var app = new Vue({
    el: '#app',
    components: {
        'particles-bg': ParticlesBg
    }
});