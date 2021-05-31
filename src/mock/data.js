import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'MATRiX | Developer', // e.g: 'Name | Developer'
  lang: 'mm', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'MATRiX',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpg',
  paragraphOne: 'From Myanmar',
  paragraphTwo: 'Html/Css/PHP/Node.js',
  paragraphThree: '"React/Wordpress/Flutter/Git"',
  resume: 'https://cvmkr.com/MpVKN?pdf=1', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Ecommerce React-App',
    info: 'React အသုံးပြုထားသော website ဖြစ်သည့်အတွက် မည်သည့် Devices ပေါ်တွင်မဆို responsiable ဖြစ်သည်။',
    info2: 'Backend Product Data & Payment များအား Commerce JS အားအသုံးပြုထားသောကြောင့် Stripe Acc လိုအပ်ပီး Products များအား လွယ်ကူစွာထည့်သွင်းနိုင်သည်။',
    url: 'https://matrixmm.ml',
    repo: 'https://matrixmm.ml', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Flutter App With Wordpress Api',
    info: 'Flutter အသုံးပြု၍ ရေးထားသော Mobile Application ဖြစ်ပီး Wordpress အားချိတ်ဆက်ထားသည်။',
    info2: 'Wordpress အား အသုံးပြု၍ Posts သတင်းများ အလွယ်တကူတင်နိုင်သည်။',
    url: 'https://matrixmmstore.000webhostapp.com',
    repo: 'https://www.mediafire.com/file/r8maz7j6tdhpaeq/zawgyinews.apk/file', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Wordpress Customize',
    info: 'Wordpress Websites Page & Admin Panel များအား စိတ်တိုင်းကျ ပြုပြင်နိုင်သည်။',
    info2: 'PHP အသုံးပြု၍ ပြုပြင်သောကြောင့် WP CMS များ ဝယ်၍အသုံးပြုရန်မလိုအပ်ပေ။',
    url: 'https://matrixmmstore.000webhostapp.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/thetnaing078106',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/thetnaing078',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
