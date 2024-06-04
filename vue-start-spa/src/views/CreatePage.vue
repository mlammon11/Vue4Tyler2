<template>
    <form action="" class="container ">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input type="text" class="form-control" v-model="pageTitle"/> <!-- v-model creates a 2 way binding -->
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">
                        Content
                    </label>
                    <textarea type="text" class="form-control" rows="5" v-model="content"> </textarea>
                </div>
            </div>
                
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text 
                    </label>
                    <input type="text" class="form-control" v-model="linkText">
                </div>

                <div class="row mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="published">
                        <label for="gridCheck1" class="form-check-label">
                            Published
                        </label>
                    </div>
                </div>

            </div>
        </div>
             
        <div class="mb-3">
            <button class="btn btn-primary" @click.prevent="submitForm" :disabled="isFormInvalid">
                Create Page
            </button>
        </div>
    </form>
</template>

<!-- Composition API -->
<script setup>
import {inject, ref, computed, watch} from 'vue'
import {useRouter} from 'vue-router';

const router = useRouter();
const pages = inject('$pages');
const bus = inject('$bus')

let pageTitle = ref('');
let content = ref('');
let linkText = ref('');
let published = ref(true);

function submitForm(){
    if(!pageTitle || !content || !linkText){
        alert('Please fill out the form full');
        return;
    }

    let newPage = {
        pageTitle: pageTitle.value,
        content: content.value,
        link:{
            text: linkText.value,
        },
        published: published.value
    };

    pages.addPage(newPage)

    //camelCase
    // $emit helps to declare an event (this is connected to App.vue component prop 'page-created')
   bus.$emit('page-created', newPage); 

   router.push({path: '/pages'});
}

const isFormInvalid = computed(() => !pageTitle || !content || !linkText );

// the value being 'watched' needs to be reactive aka created with ref() or reactive()
watch(pageTitle, (newTitle, oldTitle) => { 
    if(linkText.value === oldTitle){ //if the current link text == oldTitle, then user is not changing the link text
        linkText.value = newTitle;
    }

    //if they are't equal then leave it be, the user is changing the link text
});

</script>


<!-- OPTIONS API
<script>
export default{
    emits: { //validating event, this is helpful to debug code
        pageCreated(pageTitle, content, link, ){
            if(!pageTitle)
                return false;

            if(!content)
                return false;

            if(!link || !link.text || !link.url){
                return false;
            }
            
            return true;
        }
    },
    computed:{
        isFormInvalid(){
            return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
        }
    },
    data(){
        return{
            pageTitle: '',
            content: '',
            linkText: '',
            linkUrl: '',
            published: true
        }
    },
    methods:{
        submitForm(){
            if(!this.pageTitle || !this.content || !this.linkText || !this.linkUrl){
                alert('Please fill out the form full');
                return;
            }

            //camelCase
            // $emit helps to declare an event (this is connected to App.vue component prop 'page-created')
            this.$emit('pageCreated', {
                pageTitle: this.pageTitle,
                content: this.content,
                link:{
                    text: this.linkText,
                    url: this.linkUrl
                },
                published: this.published
            }); 

            this.pageTitle =  '';
            this.content =  '';
            this.linkText =  '';
            this.linkUrl =  '';
            this.published = true;
        }
    },
    watch:{ // watch property watches when a value changes, and makes a response accordingly
        pageTitle(newTitle, oldTitle){ //the variable we want to watch, followed by ()
            if(this.linkText === oldTitle){ //if the current link text == oldTitle, then user is not changing the link text
                this.linkText = newTitle;
            }

            //if they are't equal then leave it be, the user is changing the link text
        }
    }
}

</script> -->



