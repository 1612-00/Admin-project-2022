const home = [
    {
        link: '/',
        section: 'home',
        icon: <i class='bx bx-home-alt'></i>,
        text: 'Dashboards',
    },
];

const app = [
    {
        link: '/apps/notes',
        section: 'notes',
        icon: <i class='bx bx-notepad'></i>,
        text: 'Notes',
    },
    {
        link: '/apps/chat',
        section: 'chat',
        icon: <i class='bx bx-message-rounded-dots'></i>,
        text: 'Chat',
    },
    {
        link: '/apps/contacts',
        section: 'contacts',
        icon: <i class='bx bx-user'></i>,
        text: 'Contacts',
    },
];

const sidebarNav = [
    { tab: home, text: 'Home' },
    { tab: app, text: 'App' },
];

export default sidebarNav;
