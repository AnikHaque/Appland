/**
    data map
*/
const faqs = [
    {
        id:1,
        question:'Non consectetur a erat nam at lectus urna duis?',
        answer:'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
    {
        id:2,
        question:'Non consectetur a erat nam at lectus urna duis?',
        answer:'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
    {
        id:3,
        question:'Non consectetur a erat nam at lectus urna duis?',
        answer:'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
    {
        id:4,
        question:'Non consectetur a erat nam at lectus urna duis?',
        answer:'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
    {
        id:5,
        question:'Non consectetur a erat nam at lectus urna duis?',
        answer:'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    }   
]

const features = {
    image:{
        src:'/img/features.svg',
        class:'img-fluid',
        alt:'Feature Image'
    },
    description:'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
    list:[
        {
            title:'Corporis voluptates sit',
            description:'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
            icon_class:'bx bx-receipt',
        },
        {
            title:'Ullamco laboris nisi',
            description:'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
            icon_class:'bx bx-cube-alt',
        },
        {
            title:'Labore consequaturt',
            description:'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
            icon_class:'bx bx-images',
        },
        {
            title:'Beatae veritatis',
            description:'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
            icon_class:'bx bx-shield',
        },
        {
            title:'Molestiae dolor',
            description:'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
            icon_class:'bx bx-atom',
        },
        {
            title:'Explicabo consectetur',
            description:'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
            icon_class:'bx bx-card',
        }
    ]
}

const details = {
    title:'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:{
        src:'/img/details-1.png',
        class:'img-fluid',
        alt:'Details Photo'
    },
    lists:[
        'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Iure at voluptas aspernatur dignissimos doloribus repudiandae.',
        'Est ipsa assumenda id facilis nesciunt placeat sed doloribus praesentium.'
    ],
    footer:'Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia'
}

const pricing_plans = [
    {
        name:'Free',
        price:'$0',
        features:[
            'Quam adipiscing vitae proin',
            'Nec feugiat nisl pretium',
            'Nulla at volutpat diam uteera',
            'Nulla at volutpat diam uteera',
        ],
        link:'#'
    },
    {
        name:'Business',
        price:'$29',
        features:[
            'Quam adipiscing vitae proin',
            'Nec feugiat nisl pretium',
            'Nulla at volutpat diam uteera',
            'Massa ultricies mi quis hendrerit'
        ],
        link:'#'
    },
    {
        name:'Developer',
        price:'$49',
        features:[
            'Quam adipiscing vitae proin',
            'Nec feugiat nisl pretium',
            'Nulla at volutpat diam uteera',
            'Massa ultricies mi quis hendrerit'
        ],
        link:'#'
    },
]

const contact = {
    address:'A108 Adam Street, New York, NY 535022',
    phone:'+1 5589 55488 55, +1 5589 22548 64',
    email:'contact@example.com info@example.com',
    working_hours:'Mon - Fri: 9AM to 5PM Sunday: 9AM to 1PM'
}

const hero = {
    title:'App Landing page template',
    slogan:'Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et fastidii forensibus voluptatibus. His ei nihil feugait',
    image:{
        src:'/img/hero-img.png',
        alt:'Hero Image',
        class:'img-fuild'
    },
    stores:[
        {
            name:'Google Play',
            icon_class:'bx bxl-play-store',
            link:'#'
        },
        {
            name:'App Store',
            icon_class:'bx bxl-apple',
            link:'#'
        }
    ]
}

const logo = {
    a: {
        href: '/',
        appName: 'LandingPage'
    },
    img: {
        src: 'imageurl.com',
        alt: 'Logo Image',
    }
}

const menus = [
    { name:'Home',link:'#hero', active:true},
    { name:'App Featurees',link:'#features', active:false},
    { name:'Gallery',link:'#gallery',active:false},
    { name:'Pricing',link:'#pricing', active:false},
    { name:'F.A.Q',link:'#faq', active:false},
    { name:'Contact',link:'#contact', active:false},
]

export {hero,logo, menus, faqs, features, details, pricing_plans, contact}