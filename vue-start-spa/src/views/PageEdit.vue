<template>
    <h4>Edit {{ pageCopy.pageTitle }}</h4>

    <form action="" class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">Page Title</label>
                    <input type="text" class="form-control" v-model="pageCopy.pageTitle" />
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">Content</label>
                    <textarea class="form-control" rows="5" v-model="pageCopy.content"></textarea>
                </div>
            </div>

            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Link Text</label>
                    <input type="text" class="form-control" v-model="pageCopy.link.text" />
                </div>

                <div class="row mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="pageCopy.published" />
                        <label class="form-check-label">Published</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-3">
            <button class="btn btn-primary me-2" @click.prevent="submit">Edit</button>
            <button class="btn btn-secondary" @click.prevent="cancel">Cancel</button>
        </div>
    </form>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject, reactive, onMounted } from "vue";
import { cloneDeep } from "lodash-es"; //creates a deep copy

const router = useRouter();
const pages = inject('$pages');
const bus = inject('$bus');

const { index } = defineProps(['index']);

let page = pages.getSinglePage(index);
let initialPageState = cloneDeep(page);
let pageCopy = reactive(cloneDeep(page));

onMounted(() => {
    // Ensure pageCopy is a deep copy of the current page data
    pageCopy = reactive(cloneDeep(page));
});

function submit() {
    pages.editPage(index, pageCopy);

    bus.$emit('page-updated', {
        index,
        page: pageCopy,
    });

    gotoPagesList();
}

function gotoPagesList() {
    router.push({ path: '/pages' });
}

function cancel() {
    // Revert pageCopy to the initial page state
    pageCopy = reactive(cloneDeep(initialPageState));
    gotoPagesList();
}
</script>
