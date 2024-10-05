// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'hovnokleslo14', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'About ME',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Something about me.',
          description:
            'For the quick introduction, I am pansexual femboy furry. I love coding and just about anything that is digital and creative. You can read my full about me below.',
          imageUrl:
            'https://cdn.discordapp.com/attachments/1285578139992588298/1292127258944868494/opera_3PGVq8wyYe.png?ex=67029ac9&is=67014949&hm=b5648ee19b56ef84e071ac34a795d8ef4c242c4d77d7546fcb930a889f0dbb5d&',
          link: 'Something about me.',
        },
        {
          title: 'Sexuality and Relations',
          description:
            'I am pansexual and thats how it is. I didnt choose this I kind of lived with it until I noticed I am different. I am submissive and bottom if you would want to know. Currently I am happily taken by my love Gabrielkou, so do not try anything at me.',
          imageUrl:
            'https://cdn.discordapp.com/attachments/1285578139992588298/1292126976068554884/opera_R8wl9WqDz5.png?ex=67029a85&is=67014905&hm=4b4761207e6611bca001e958fdf4127d9be4ca38c5774cdf1954d278ca88c094&',
          link: 'Sexuality and Relations',
        },
        {
          title: 'Hobbies and Likings',
          description:
            'From my personal hobbies its mainly playing videogames and programming small applications and calling with friends on discord or I would like to be outside by the fire but I have no one to be with because a lot of people dont like me just because Im different but so it doesnt matter. :D',
          imageUrl:
            'https://cdn.discordapp.com/attachments/1285578139992588298/1292127400468938844/opera_KgppJ6BVrI.png?ex=67029aea&is=6701496a&hm=0cad9bc4fe74b28dfa81c972c10d53b4ecc6bb1fca7efa345429a98fada5f34f&',
          link: 'Hobbies and Likings',
        },
        {
          title: 'Socialization',
          description:
            'Just go to my twitch or youtube and give me folow',
          imageUrl:
            'https://cdn.discordapp.com/attachments/1285578139992588298/1292127536599531560/opera_jIDPs412ui.png?ex=67029b0b&is=6701498b&hm=1d272a4742956a4dbafb518b78d8ef4c0c240495acdb054d06010f531fea9662&',
          link: 'Socialization',
        },
      ],
    },
  },
  seo: {
    title: 'Furplex website :3',
    description: 'FURRY',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'furplex._',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
  ],
  experiences: [
    {
      company: 'Nexus',
      position: 'owner',
      from: 'September 2020',
      to: 'now',
      companyLink: 'https://discord.gg/rVjZytbtjB',
    },
    {
      company: 'CreateCraft/RedCraft',
      position: 'technic',
      from: 'July 2022',
      to: 'now',
      companyLink: 'https://discord.gg/tu8eRhNzVF',
    },
  ],
  certifications: [
  ],
  educations: [
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'furplex', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-141JCSRN6B', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `HI i am furplex :3 `,
  enablePWA: true,
};

export default CONFIG;
