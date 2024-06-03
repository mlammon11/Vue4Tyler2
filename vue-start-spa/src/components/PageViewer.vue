<template>

    <div class="container">
        <h1>{{page.pageTitle}}</h1>
        <p>{{page.content}}</p>
    </div>
        
</template>

<script>
export default{
    props: ['page'], //props connect to the props defined in the component header (use camelcase here) -> props create objects
}
</script>