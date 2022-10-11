const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        addition(num) {
          this.counter = this.counter + num;
      }
    },
    computed: {
        resultOutput() {
            if (this.counter < 37) return this.counter + ' ' + 'Not there yet';
            else if (this.counter > 37) return this.counter + ' ' + 'Too much!';
            else return this.counter;
        }
    },
    watch: {
        counter(value) {
            if (value > 37) {
                const that = this;
                setTimeout(function(){
                    that.counter = 0
                }, 5000)
            }
        }
    }
})
app.mount('#assignment')