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
    created() {
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
        },
        stopLoop () {
            clearInterval(this.intervalID);
        }
    }
});

