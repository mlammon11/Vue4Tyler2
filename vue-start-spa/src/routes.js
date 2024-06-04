import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./views/PageViewer.vue";
import CreatePage from "./views/CreatePage.vue";
import Pages from "./views/Pages.vue";
import PagesList from "./views/PagesList.vue";
import PageEdit from "./views/PageEdit.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [ //ending to URLs
        { path: '/:index?', component: PageViewer, props: true }, // parameter: ':index' means that the path is looking for an index (1,2,3,4..) and it will create a url based on it
                                                     // ':index?' means that the if no index is given, then load the default page (makes it optional)
                                                     // "props: true" this means that index will be passed as a prop
        { 
            path: '/pages', 
            component: Pages,
            children: [
                { path: '', component: PagesList },
                { path: 'create', component: CreatePage },
                { path: ':index/edit', component: PageEdit, props: true }
            ]
        },
        
    ]
})

export default router;