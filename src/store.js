import { reactive } from 'vue'
export const store = reactive({

    activeSlide: 0,
    overviewIndex: 0,

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

    ],
    EducationCard: [
        {
            img: '',
            title: 'Learing&Fun',
            text: 'Praesent modea est gravida node vehicula luctus',
        },
        {
            img: '',
            title: 'Healthy Meals',
            text: 'Terminal interdum a eleifend maecenas est morbi.',
        },
        {
            img: '',
            title: 'Frindly Place',
            text: 'Terminal interdum a eleifend maecenas est morbi',
        },
        {
            img: '',
            title: 'Children Safety',
            text: 'Praesent modea est gravida node vehicula luctus',

        },

    ],
    teacherCard: [
        {
            name: 'Ruth Richie',
            role: 'Teacher',
            info: 'I have just finished my studies in Early Childhood Education, and I am also the kid\'s yoga teacher here at Fable. I enjoy cooking, swimming and bike riding in my free time.',
        },
        {
            name: 'Katie Wilmore',
            role: 'Assistant Teacher',
            info: 'My name is Katie. I grew up and studied in Canada. This is my second year at Fable and love every minute of it, making the children\'s learning experience fun.',
        },
        {
            name: 'Angelica Watson',
            role: 'Lead Teacher',
            info: 'I hold a degree in Early Childhood Education and an advanced English language certificate. I have been working as a kindergarten teacher since 2002.',
        },
        {
            name: 'Angela Lynn',
            role: 'Teacher',
            info: 'I have completed a graduate Diploma in Early Childhood Teaching. I have worked with children aged from six weeks to eight years.This is my second year at Fable.',
        },

    ],

})
// selectImage(index) {
//     console.log('Ho cliccato su un thumb', index);
//     this.activeSlide = index
// }
