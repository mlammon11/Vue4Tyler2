<template>
    <li>
        <!-- v-for is a Vue directive which are special HTML attributes with the prefix v- that give the HTML tag extra functionality-->
        <router-link 
            :to="`/${index}`" 
            :title="page.link.title" 
            class="nav-link" 
            active-class="active"
            aria-current="page"
            v-if="page.published === true"
            > 
            <!-- active-class is a built in prop to apply classes css dynamically -->
            <!-- for notes: @click.prevent="$bus.$emit('navbarLinkActivated', index)" -->
            <!-- @click.prevent="navLinkClick(index)" -> we are using the function defined by parent in the body (nav-bar) and passing the current value of index -->
            <!-- @click.prevent loads the content of the index's page but doesn't go to the href link-->
            <!-- :class = {property state: condition} -->

            {{page.link.text}}

        </router-link> 
    </li>
</template>

<script>
export default{
    props: ['page', 'index'],
    // computed:{ // another object where the properties are functions that will execute dynamically
    //     activeClasses(){
    //         return{
    //             active: this.isActive,
    //             emphasize: this.isActive,
    //         }
    //     }
    // }

}
</script>

<!-- <style scoped> /* without scoped keyword, any styling class (emphasize for example) will be applied outside the current file if used */
    .emphasize{
        text-decoration: underline !important;
    }
</style> -->