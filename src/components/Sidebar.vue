<template>
    <div class="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style="width:200px;" :class="{ 'w3-show': sidebarVisible }" id="mySidebar">
        <button class="w3-bar-item w3-button w3-large w3-hide-large" @click="toggleSidebar()">Close &times;</button>
        <router-link to="/" class="w3-bar-item w3-button">
            home
        </router-link>
        <router-link to="/team" class="w3-bar-item w3-button">
            team
        </router-link>
        <router-link to="/about" class="w3-bar-item w3-button">
            about
        </router-link>
        <router-link to="/project" class="w3-bar-item w3-button">
            project
        </router-link>
    </div>
    <div class="w3-main" :style="{ marginLeft: sidebarVisible ? '' : '0' }">
        <div class="">
            <button class="w3-button  w3-xlarge w3-hide-large" @click="toggleSidebar()">&#9776;</button>
           
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sidebarVisible: false
        };
    },
    methods: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
        }
    }
};
</script>
