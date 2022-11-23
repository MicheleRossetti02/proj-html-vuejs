import { reactive } from 'vue'
export const store = reactive({

    activeSlide: 0,
    overviewIndex: 0,
    gallery: [
        {
            img: './src/assets/img/gallery/gallery_01-690x506.jpg',
        },
        {
            img: './src/assets/img/gallery/gallery_02-690x506.jpg',
        },
        {
            img: './src/assets/img/gallery/gallery_03-690x506.jpg',
        },
        {
            img: './src/assets/img/gallery/gallery_04-690x506.jpg',
        },

    ],
    firstSlider: [
        {
            img: './src/assets/img/jumbotron1/slider_slide1_img1.png',
            img2: './src/assets/img/jumbotron1/slider_slide1_img2.png',
            text: 'lorem'
        },
        {
            img: './src/assets/img/jumbotron1/slider_slide2_img1.png',
            img2: './src/assets/img/jumbotron1/slider_slide3_img1.png',
            text: 'lorem2'

        },
        {
            img: './src/assets/img/jumbotron1/slider_slide3_img2.png',
            img2: './src/assets/img/jumbotron1/slider_slide3_img3.png',
            text: 'lorem3'

        },

    ],
    infoWelcome: [
        {
            img: 'schoolbag_alt.png',
            title: 'Morbi Etos',
            text: 'Praesent interdum est gravida vehicula est node maecenas loraeet morbi a dosis luctus novum est paesent.',
            welcome: 0,

        },
        {
            img: 'stroller_alt.png',
            title: 'Congue Gravida',
            text: 'Elipsis magna a terminal nulla elementum elite forte maecenas est magna etos interdum vilae est.',
            welcome: 1,

        },
        {
            img: 'globe_alt.png',
            title: 'Maecenas Node',
            text: 'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
            welcome: 0,

        },
        {
            img: 'bell_alt.png',
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
            img: './src/assets/img/our-class/card/class_01-690x506.jpg',
            title: 'Little Lambs',
            text: 'Month olds',
            age: '12-24',
            size: '9'
        },
        {
            img: './src/assets/img/our-class/card/class_02-690x506.jpg',
            title: 'Bouncy Bears',
            text: 'Years old',
            age: '4-5',
            size: '12'
        },
        {
            img: './src/assets/img/our-class/card/class_03-690x506.jpg',
            title: 'Tenderhearts',
            text: 'Years old',
            age: '3-4',
            size: '15'
        },
        {
            img: './src/assets/img/our-class/card/class_04-690x506.jpg',
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
            img: './src/assets/img/our-class/learning/toy.png',
            title: 'Learing&Fun',
            text: 'Praesent modea est gravida node vehicula luctus',
        },
        {
            img: './src/assets/img/our-class/learning/meal.png',
            title: 'Healthy Meals',
            text: 'Terminal interdum a eleifend maecenas est morbi.',
        },
        {
            img: './src/assets/img/our-class/learning/school.png',
            title: 'Frindly Place',
            text: 'Terminal interdum a eleifend maecenas est morbi',
        },
        {
            img: './src/assets/img/our-class/learning/shield.png',
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
    newCard: [
        {
            img: './src/assets/img/footer/header/blog_09-690x414.jpg',
            date: 'October 03, 2014',
            title: 'Drawing and Painting Lessons',
            text: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum ',
            num: '42',
            name: 'Anna Brown',
            role: 'Events,Fun',
        },
        {
            img: './src/assets/img/footer/header/blog_08-690x414.jpg',
            date: 'October 03, 2014',
            title: 'Fall Parents Meeting Day',
            text: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum ',
            num: '19',
            name: 'Anna Brown',
            role: 'Dance. Education',
        },
        {
            img: './src/assets/img/footer/header/blog_10-525x315.jpg',
            date: 'September 20, 2014',
            title: 'Birtday in Kindergarten',
            text: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum ',
            num: '22',
            name: 'Anna Brown',
            role: 'Games. General',
        },

    ],
    contactCard: [
        {
            title: 'Postal Adress',
            firstRow: 'Fable Care Center',
            secondRow: '85 Fentiman Ave',
            thirdRow: 'Ottawa, ON K1S 0T7',
            img: './src/assets/img/contactus/envelope (1).png'

        },
        {
            title: 'Phone & E-mail',
            firstRow: 'Phone: 1-800-64-38',
            secondRow: 'Fax: 1-800-64-39',
            thirdRow: 0,
            link: 'office@fable.com',
            img: './src/assets/img/contactus/mobile.png'

        },
        {
            title: 'Business Hours',
            firstRow: 'Monday - Friday',
            secondRow: '8.00 am - 5.00 pm',
            thirdRow: 'Weeknd Closed',
            img: './src/assets/img/contactus/clock.png'

        },
        {
            title: 'Session',
            firstRow: 'Mornings, 8 am - 12 noon',
            secondRow: 'Afternoons, 1 pm - 5 pm',
            thirdRow: 'Full Day, 8 am - 5 am ',
            img: './src/assets/img/contactus/document (1).png'

        },

    ],
    FooterList: [
        {

            text: 'Friendly and welcoming place'
        },
        {

            text: 'Science and art classes'
        },
        {

            text: 'Positive learning environment'
        },
        {

            text: 'Educational fiels trips'
        },
        {

            text: 'Writing and reading classes'
        },
        {

            text: 'Science and art classes'
        },

    ],
    footerSocial: [
        {
            img: './src/assets/img/footer/end/behance.png'
        },
        {
            img: './src/assets/img/footer/end/dribbble.png'
        },
        {
            img: './src/assets/img/footer/end/envato.png'
        },
        {
            img: './src/assets/img/footer/end/facebook.png'
        },
        {
            img: './src/assets/img/footer/end/twitter.png'
        },

    ]
})
// selectImage(index) {
//     console.log('Ho cliccato su un thumb', index);
//     this.activeSlide = index
// }
