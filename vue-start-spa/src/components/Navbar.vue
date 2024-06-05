<template>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <navbar-link 
                    v-for="(page, index) in Pages" class="nav-item" :key="index"
                    :page="page" 
                    :index="index"> 
                </navbar-link>

                <li>
                    <router-link 
                        to="/pages" 
                        class="nav-link" 
                        aria-current="page"
                        active-classs="active"
                        > 
                        Pages
                    </router-link> 
                </li>

            </ul>
            <form class="d-flex">
                <button 
                    class="btn btn-primary"
                    @click.prevent="changeTheme()"
                    >                                
                    Toggle
                </button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';
export default{
    components:{
        NavbarLink
    },
    inject: ['$pages', '$bus'],
    created(){
        this.getThemeSetting();

        this.pages = this.$pages.getAllPages();

        //Event Listener
        this.$bus.$on('page-updated', () => {
            this.pages = [...this.$pages.getAllPages()]; //creating new array object
        });

        this.$bus.$on('page-created', () => {
            this.pages = [...this.$pages.getAllPages()]; //creating new array object
        });

        this.$bus.$on('page-deleted', () => {
            this.pages = [...this.$pages.getAllPages()]; //creating new array object
        });
    },
    computed:{
        // publishedPages(){
        //     return this.pages.filter(p => p.published);
        // }
        Pages(){
            return this.pages;
        }
    },
    // props: ['pages'], //props are read only (data flows parent (app) to child (component) so changing data in child would not reflect in parent)
    data(){
        return{
            theme: 'dark',
            pages: []
        }
    },
    methods:{
        changeTheme(){
            let theme = 'light';

            if(this.theme == 'light'){
                theme= 'dark';
            }

            this.theme = theme;
            this.storeThemeSetting();
        },
        storeThemeSetting(){
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting(){
            let theme = localStorage.getItem('theme');

            if(theme){
                this.theme = theme;
            }
        },
    },
}

</script>