import { reactive } from 'vue'
export const store = reactive({

    activeSlide: 0,

    firstSlider: [
        {
            img: '../assets/img/jumbotron1/slider_slide1_img1.png',
            img2: '../assets/img/jumbotron1/slider_slide1_img2.png',
            text: 'lorem'
        },
        {
            img: '../assets/img/jumbotron1/slider',
            img2: '../assets/img/jumbotron1/',
            text: 'lorem2'

        },
        {
            img: '../assets/img/jumbotron1/slider_slide_img',
            img2: '../assets/img/jumbotron1/',
            text: 'lorem3'

        },

    ],
    infoWelcome: [
        {
            img: './assets/img/info-welcome/schoolbag_alt.png',
            title: 'Morbi Etos',
            text: 'Praesent interdum est gravida vehicula est node maecenas loraeet morbi a dosis luctus novum est paesent.',
            welcome: 0,

        },
        {
            img: '',
            title: 'Congue Gravida',
            text: 'Elipsis magna a terminal nulla elementum elite forte maecenas est magna etos interdum vilae est.',
            welcome: 1,

        },
        {
            img: '',
            title: 'Maecenas Node',
            text: 'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
            welcome: 0,

        },
        {
            img: '',
            title: 'Praesent Morbi',
            text: 'Elipsis maagna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vilae est.',
            welcome: 1,

        },

    ],
    overviewIndex: 0,

    overviewSlider: [
        {
            img: ''
        },
        {
            img: ''
        },
        {
            img: ''
        },
        {
            img: ''
        },
    ],
    classCard: [
        {
            img: '',
            title: 'Little Lambs',
            text: 'Month olds',
            age: '12-24',
            size: '9'
        },
        {
            img: '',
            title: 'Bouncy Bears',
            text: 'Years old',
            age: '4-5',
            size: '12'
        },
        {
            img: '',
            title: 'Tenderhearts',
            text: 'Years old',
            age: '3-4',
            size: '15'
        },
        {
            img: '',
            title: 'Shining Stars',
            text: 'Years old',
            age: '4-5',
            size: '20'
        },
    ],
    listClass: [
        {
            text: 'Comprehensive reporting on individual achivement'
        },

        {
            text: 'Educational field trips and school presentation'
        },

        {
            text: 'Individual attention in a small-class setting'
        },

        {
            text: 'Learing program with after-school care'
        },

        {
            text: 'Opportunities to carry out scientific investigations'
        },

        {
            text: 'Positive learning environment for your child'
        },

    ]
})
// selectImage(index) {
//     console.log('Ho cliccato su un thumb', index);
//     this.activeSlide = index
// }
