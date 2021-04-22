/*************************
        VUE SLIDER 
*************************/

const app = new Vue({
    el: '#app',

    data: {
        photos: [
            './immagini/img1.jpg',
            './immagini/img2.jpg',
            './immagini/img3.jpg',
            './immagini/img4.jpg',
        ],
        indexPhoto: 0,
        intervalID: 0,
    },
    mounted() {    //created(avviene appena creata l'istanza) => mounted(ultima azione che fa in creazione l'istanza)
        // Create l'istanza vue
        this.startLoop();
    },
    methods: {
        prevPhoto() {
            this.indexPhoto -= 1;

            if(this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1
            }
        },
        nextPhoto() {
            this.indexPhoto += 1;

            // verifica
            if(this.indexPhoto > (this.photos.length - 1)) {
                this.indexPhoto = 0;
            }
        },
        setPhoto(index) {
            console.log(index);
            this.indexPhoto = index;
        },
        startLoop() {
            this.intervalID = setInterval(() => {
                this.nextPhoto();
            }, 3000);

            this.$refs.slider.blur(); //tolgo il focus dall'elemento
        },
        stopLoop () {
            clearInterval(this.intervalID);

            // Mettere focus slider
            console.log(this.$refs);
            this.$refs.slider.focus(); //metto il focus sull'elemento
        }
    }
});

