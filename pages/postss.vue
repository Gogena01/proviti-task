<template>
    <h1>Hello world!</h1>
    <div>
        <ul>
            <li v-for="item in items" :key="item.id">
                <h2>{{ item.title }}</h2>
                <h3>{{ item.body }}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: []
        }
    },

    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(data => {
                this.items = data;
            })
            .catch(err => alert(err));
    }
}
</script>
