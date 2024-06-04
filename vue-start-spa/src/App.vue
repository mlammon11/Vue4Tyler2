<template>
    <!-- binding date to props in order to dynamically update values -->
    <navbar :pages="pages"> <!-- here we are inside the parent class -->
    </navbar>

    <!-- Props are used to define properties of components (use lowercase names followe by '-' if there are multiple words per name)-->
    <!-- use ' v-if="pages.length > 0" ' to render page-viewer only if pages has been populated (straight forward fix) -->
     <!-- v-if checks to see if pages has finished being populated by created(), if not and the length is still 0, then it won't display a page-viewer component -->
    <!-- <page-viewer
        v-if="pages.length > 0"
        :page="pages[activePage]">
    </page-viewer>

    <create-page
        @page-created="pageCreated"
     >

    </create-page> -->

    <router-view></router-view>

</template>

<script>
import Navbar from './components/Navbar.vue';

export default{ //this is the component 'App'
    components:{
        Navbar,
    },
    // created(){ //state of application before DOM is rendered (visuals on user side)
    // },
    // data(){ //data function returns an object (considered as state of application in other frameworks)
    //     return{
    //         pages: [], //pages is initialized as empty, so in the split second between initialization and populating in created, page-viewer is seeing null properties
    //     };
    // },
    methods:{
        // async getPages(){
        //     let res = await fetch('pages.json');
        //     let data = await res.json() //parsing into a JS object

        //     this.pages = data;
        // },
        pageCreated(pageObj){
            this.pages.push(pageObj);
        }
    }
}

</script>