<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{page.pageTitle}}</h1>
        <p>{{page.content}}</p>
    </div>
        
</template>

<script>
export default{
    // props: {//props connect to the props defined in the component header (use camelcase here) -> props create objects
    //     page:{ //creating props like this allows us to set default values for the props in case of loading errors
    //         type: Object,
    //         default(rawProps){
    //             return {
    //                 pageTitle: '',
    //                 content: '',
    //             }
    //         }
    //     }
    // }, 
    props: ['index'],
    inject: ['$pages'],
    created(){ //created() will be called everything a new route is clicked
        //has access to the parameters of the router, in this case ':index?'
        //console.log(this.$route.params);

        this.page = this.$pages.getSinglePage(this.index); 

        // //watch function, similar to watch by itself. Syntax: function() => property we want to watch, (new, old)
        // this.$watch(() => this.$route.params, (newParams, prevParams) => { 
        //     this.page = this.$pages.getSinglePage(newParams.index)

        // }); 
    },
    data(){
        return{
            page: null
        };
    },
    watch: {
        index(newIndex, oldIndex){
            this.page = this.$pages.getSinglePage(newIndex); 
        }
    }
}
</script>

<style>
    .emphasize{
        color: blue;
    }
</style>