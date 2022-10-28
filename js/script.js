const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            message: 'Hello Vue!',
            testo: 'Oh no!',
            active: true
        }
    },
    methods:{
        toggle(){
            this.active = !this.active;
        }
    }
}).mount('.box');
