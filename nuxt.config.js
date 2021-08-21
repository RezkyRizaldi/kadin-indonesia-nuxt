export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - KADIN Indonesia',
        title: 'KADIN Indonesia',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'http-equiv',
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge, chrome=1',
            },
            { hid: 'title', itemprop: 'title', content: 'KADIN Indonesia' },
            {
                hid: 'description',
                itemprop: 'description',
                content: 'Kamar Dagang dan Industri Indonesia, atau disingkat KADIN Indonesia, adalah organisasi pengusaha Indonesia yang bergerak di bidang perekonomian. Organisasi ini didirikan pada 24 September 1968 dan diatur dalam Undang-undang Nomor 1 tahun 1987 tentang Kamar Dagang dan Industri.',
            },
            {
                hid: 'image',
                itemprop: 'image',
                content: 'https://kadinindonesia.or.id/assets/img/favicon/kadin_indonesia_summary.jpg',
            },
            { hid: 'title', name: 'title', content: 'KADIN Indonesia' },
            {
                hid: 'description',
                name: 'description',
                content: 'Kamar Dagang dan Industri Indonesia, atau disingkat KADIN Indonesia, adalah organisasi pengusaha Indonesia yang bergerak di bidang perekonomian. Organisasi ini didirikan pada 24 September 1968 dan diatur dalam Undang-undang Nomor 1 tahun 1987 tentang Kamar Dagang dan Industri.',
            },
            {
                hid: 'image',
                name: 'image',
                content: 'https://kadinindonesia.or.id/assets/img/favicon/kadin_indonesia_summary.jpg',
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'KADIN, KADIN Indonesia, Kamar Dagang dan Industri',
            },
            { name: 'HandledFriendly', content: true },
            { name: 'MobileOptimized', content: true },
            { hid: 'copyright', name: 'copyright', content: 'KADIN Indonesia' },
            { name: 'robots', content: 'noindex, nofollow' },
            {
                hid: 'author',
                name: 'author',
                content: 'Authentic Guards Technology, info@authenticguards.com',
            },
            {
                hid: 'designer',
                name: 'designer',
                content: 'Authentic Guards Technology, info@authenticguards.com',
            },
            { name: 'reply-to', content: 'info@authenticguards.com' },
            { hid: 'url', name: 'url', content: 'https://kadinindonesia.or.id' },
            {
                hid: 'identifier-URL',
                name: 'identifier-URL',
                content: 'https://kadinindonesia.or.id',
            },
            { hid: 'pagename', name: 'pagename', content: 'KADIN Indonesia' },
            { name: 'revisit-after', content: '1 day' },
            {
                hid: 'subtitle',
                name: 'subtitle',
                content: 'Kamar Dagang dan Industri Indonesia',
            },
            { name: 'target', content: 'all' },
            { name: 'medium', content: 'blog' },
            { name: 'category', content: 'Official Website' },
            { hid: 'owner', name: 'owner', content: 'KADIN Indonesia' },
            { name: 'coverage', content: 'Worldwide' },
            { name: 'distribution', content: 'Global' },
            { name: 'rating', content: 'General' },
            { name: 'format-detection', content: 'telephone=no' },
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                hid: 'twitter:url',
                name: 'twitter:url',
                content: 'https://kadinindonesia.or.id',
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: 'KADIN Indonesia',
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'Kamar Dagang dan Industri Indonesia, atau disingkat KADIN Indonesia, adalah organisasi pengusaha Indonesia yang bergerak di bidang perekonomian. Organisasi ini didirikan pada 24 September 1968 dan diatur dalam Undang-undang Nomor 1 tahun 1987 tentang Kamar Dagang dan Industri.',
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: 'https://kadinindonesia.or.id/assets/img/favicon/kadin_indonesia_summary.jpg',
            },
            {
                hid: 'twitter:dnt',
                name: 'twitter:dnt',
                content: 'on',
            },
            {
                hid: 'twitter:image:alt',
                name: 'twitter:image:alt',
                content: 'KADIN Indonesia',
            },
            { hid: 'og:type', property: 'og:type', name: 'website' },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://kadinindonesia.or.id',
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'KADIN Indonesia',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Kamar Dagang dan Industri Indonesia, atau disingkat KADIN Indonesia, adalah organisasi pengusaha Indonesia yang bergerak di bidang perekonomian. Organisasi ini didirikan pada 24 September 1968 dan diatur dalam Undang-undang Nomor 1 tahun 1987 tentang Kamar Dagang dan Industri.',
            },
            {
                hid: 'og:keywords',
                property: 'og:keywords',
                content: 'KADIN, KADIN Indonesia, Kamar Dagang dan Industri',
            },
            {
                hid: 'og:region',
                property: 'og:region',
                content: 'ID',
            },
            {
                hid: 'og:locale',
                property: 'og:locale',
                content: 'id_ID',
            },
            {
                hid: 'og:country-property',
                property: 'og:country-property',
                content: 'ID',
            },
            {
                hid: 'og:country-name',
                property: 'og:country-name',
                content: 'Indonesia',
            },
            {
                hid: 'og:email',
                property: 'og:email',
                content: 'info@authenticguards.com',
            },
            {
                hid: 'og:image:type',
                property: 'og:image:type',
                content: 'image/jpg',
            },
            {
                hid: 'og:author',
                property: 'og:author',
                content: 'Authentic Guards Technology',
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: 'KADIN Indonesia',
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://kadinindonesia.or.id/assets/img/favicon/kadin_indonesia_summary.jpg',
            },
            {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: 'https://kadinindonesia.or.id/assets/img/favicon/kadin_indonesia_summary.jpg',
            },
            {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: 'KADIN Indonesia',
            },
            {
                hid: 'tweetmeme-title',
                name: 'tweetmeme-title',
                content: 'KADIN Indonesia',
            },
            {
                hid: 'blogcatalog',
                name: 'blogcatalog',
            },
            {
                hid: 'pinterest',
                name: 'pinterest',
                content: 'nopin',
                description: "Sorry, you can't save from my website.",
            },
            {
                hid: 'google',
                name: 'google',
                content: 'notranslate, nositelinkssearchbox, nopagereadaloud',
            },
            {
                hid: 'googlebot',
                name: 'googlebot',
                content: 'index, follow',
            },
            {
                hid: 'news_keywords',
                name: 'news_keywords',
                content: 'KADIN, KADIN Indonesia, Kamar Dagang dan Industri',
            },
            {
                hid: 'mobile-web-app-capable',
                name: 'mobile-web-app-capable',
                content: 'yes',
            },
            {
                hid: 'apple-mobile-web-app-title',
                name: 'apple-mobile-web-app-title',
                content: 'KADIN Indonesia',
            },
            {
                hid: 'apple-mobile-web-app-capable',
                name: 'apple-mobile-web-app-capable',
                content: 'yes',
            },
            {
                hid: 'apple-touch-fullscreen',
                name: 'apple-touch-fullscreen',
                content: 'yes',
            },
            {
                hid: 'apple-mobile-web-app-status-bar-style',
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black',
            },
            {
                hid: 'application-name',
                name: 'application-name',
                content: 'KADIN Indonesia',
            },
            {
                hid: 'msapplication-TileColor',
                name: 'msapplication-TileColor',
                content: '#0C0AB3',
            },
            {
                hid: 'msapplication-TileImage',
                name: 'msapplication-TileImage',
                content: '',
            },
            {
                hid: 'msapplication-square70x70logo',
                name: 'msapplication-square70x70logo',
                content: '',
            },
            {
                hid: 'msapplication-square150x150logo',
                name: 'msapplication-square150x150logo',
                content: '',
            },
            {
                hid: 'msapplication-square310x150logo',
                name: 'msapplication-square310x150logo',
                content: '',
            },
            {
                hid: 'msapplication-square310x310logo',
                name: 'msapplication-square310x310logo',
                content: '',
            },
            {
                name: 'Page-Enter',
                content: 'RevealTrans(Duration=2.0, Transition=2)',
            },
            {
                name: 'Page-Exit',
                content: 'RevealTrans(Duration=3.0, Transition=12)',
            },
            {
                name: 'cleartype',
                content: 'on',
            },
            {
                name: 'mssmarttagspreventparsing',
                content: 'true',
            },
            {
                name: 'msapplication-starturl',
                content: 'https://kadinindonesia.or.id',
            },
            {
                name: 'msapplication-window',
                content: 'width=800;height=600',
            },
            {
                name: 'msapplication-navbutton-color',
                content: 'blue',
            },
            {
                hid: 'application-name',
                name: 'application-name',
                content: 'KADIN Indonesia',
            },
            {
                hid: 'msapplication-tooltip',
                name: 'msapplication-tooltip',
                content: 'KADIN Indonesia',
            },
            {
                name: 'theme-color',
                content: '#FFFFFF',
            },
            {
                name: 'skype_toolbar',
                content: 'skype-toolbar_parser_compatible',
            },
            {
                name: 'msapplication-config',
                content: '',
            },
            {
                name: 'renderer',
                content: 'webkit|ie-comp|ie-stand',
            },
            {
                name: 'x5-orientation',
                content: 'landscape/portrait',
            },
            {
                name: 'x5-fullscreen',
                content: 'true',
            },
            {
                name: 'x5-pagemode',
                content: 'app',
            },
            {
                name: 'screen-orientation',
                content: 'landscape/portrait',
            },
            {
                name: 'full-screen',
                content: 'yes',
            },
            {
                name: 'imagemode',
                content: 'force',
            },
            {
                name: 'browsermode',
                content: 'application',
            },
            {
                name: 'nightmode',
                content: 'disable',
            },
            {
                name: 'layoutmode',
                content: 'fitscreen',
            },
            {
                name: 'wap-font-scale',
                content: 'no',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'manifest',
                href: '',
            },
            {
                rel: 'mask-icon',
                href: '',
                color: '#0C0A83',
            },
            {
                rel: 'author',
                href: 'https://kadinindonesia.or.id',
            },
            {
                rel: 'fluid-icon',
                href: '',
                type: 'image/jpeg',
            },
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
            {
                rel: 'logo',
                href: '',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '57x57',
                href: '',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '114x114',
                href: '',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '72x72',
                href: '',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '144x144',
                href: '',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '60x60',
                href: '',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '120x120',
                href: '',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '76x76',
                href: '',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '152x152',
                href: '',
            },
            {
                rel: 'apple-touch-startup-image',
                href: '',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '196x196',
                href: '',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '96x96',
                href: '',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '128x128',
                href: '',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/main.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    bootstrapVue: {
        icons: true,
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}