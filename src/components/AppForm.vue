<template>
    <div class="pure-u-1-2" v-if="selectedMember" style="height:100%">
        <h1>{{ selectedMember.name }}</h1>
        <h4 v-if="selectedMember.city">Location: {{ selectedMember.city }},  {{ selectedMember.state }}</h4>
        <h4 v-if="selectedMember.hometown">Hometown: {{ selectedMember.hometown }}</h4>
        <p v-if="selectedMember.photo&&selectedMember.photo.photo_link"><img :src="selectedMember.photo.photo_link"></p>
        <hr>
        <h1>Edit</h1>
        <form class="pure-form">
            <input placeholder="Full Name" type="text" v-model="selectedMember.name" class="pure-input pure-input-1"><br>
            <input placeholder="City" type="text" v-model="selectedMember.city" class="pure-input-2-3">
            <input placeholder="State" type="text" v-model="selectedMember.state" class="pure-input-1-3"><br>
            <input placeholder="Hometown" type="text" v-model="selectedMember.hometown" class="pure-input-1"><br>
        </form>
    </div>
</template>

<script>
import model from '../modules/model'

export default {
    data(){
        return model;
    }
}
</script>

<style scoped>
div{
    padding:1em;
    background-color: #fff;
}
</style> 