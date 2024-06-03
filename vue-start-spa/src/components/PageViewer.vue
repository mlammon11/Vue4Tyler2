<template>
    <div class="container">
        <h1 class="emphasize">{{page.pageTitle}}</h1>
        <p>{{page.content}}</p>
    </div>
        
</template>

<script>
export default{
    props: {//props connect to the props defined in the component header (use camelcase here) -> props create objects
        page:{ //creating props like this allows us to set default values for the props in case of loading errors
            type: Object,
            default(rawProps){
                return {
                    pageTitle: '',
                    content: '',
                }
            }
        }
    }, 
}
</script>

<style>
    .emphasize{
        color: blue;
    }
</style>