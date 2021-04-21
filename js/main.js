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
        }
    }
});