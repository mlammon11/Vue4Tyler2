<template>
    <!-- binding date to props in order to dynamically update values -->
    <navbar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index"> <!-- here we are inside the parent class -->
    </navbar>

    <!-- Props are used to define properties of components (use lowercase names followe by '-' if there are multiple words per name)-->
    <page-viewer :page="pages[activePage]">
    </page-viewer>

</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';

export default{ //this is the component 'App'
    components:{
        Navbar,
        PageViewer,
    },

    data(){ //data function returns an object (considered as state of application in other frameworks)
        return{
            activePage: 0,
            // useDarkNavbar: true,
            pages: [
                {pageTitle: 'Home', content: 'Welcome to the home page', text: 'Home', url: 'index.html', title: 'Leads to home page'},
                {pageTitle: 'About', content: 'Welcome to the about page', text: 'About', url: 'about.html', title: 'Leads to about page'},
                {pageTitle: 'Contact', content: 'Welcome to the contact page', text: 'Contact', url: 'contact.html', title: 'Leads to contact page'}
            ],
        };
    },
}

</script>