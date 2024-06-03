<template>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(page, index) in pages" class="nav-item" :key="index"> 
                    <!-- v-for is a Vue directive which are special HTML attributes with the prefix v- that give the HTML tag extra functionality-->
                    <a v-bind:href="page.url" :title="page.title" class="nav-link" 
                        :class="{active: activePage == index}" aria-current="page" @click.prevent="navLinkClick(index)">
                        <!-- @click.prevent="navLinkClick(index)" -> we are using the function defined by parent in the body (nav-bar) and passing the current value of index -->
                        <!-- @click.prevent loads the content of the index's page but doesn't go to the href link-->
                        <!-- :class = {property state: condition} -->
                        {{page.text}}
                    </a> <!-- v-bind (or just use ':') binds to a JS expression -->                            
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
export default{
    props: ['pages', 'activePage', 'navLinkClick'], //props are read only (data flows parent (app) to child (component) so changing data in child would not reflect in parent)

    data(){
        return{
            theme: 'dark',
        }
    },
    methods:{
        changeTheme(){
            let theme = 'light';

            if(this.theme == 'light'){
                theme= 'dark';
            }

            this.theme = theme;
        }
    },
}

</script>