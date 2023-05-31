<template>
    <div>
      <div class="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style="width:200px;" :class="{ 'w3-show': sidebarVisible }" id="mySidebar">
        <h3>MENU</h3>
        <router-link to="/" class="w3-bar-item w3-button" @click="closeSidebar">
          home
        </router-link>
        <router-link to="/team" class="w3-bar-item w3-button" @click="closeSidebar">
          team
        </router-link>
        <router-link to="/about" class="w3-bar-item w3-button" @click="closeSidebar">
          about
        </router-link>
        <router-link to="/project" class="w3-bar-item w3-button" @click="closeSidebar">
          project
        </router-link>
      </div>
      <div class="w3-main" :style="{ marginLeft: sidebarVisible ? '' : '0' }">
        <div>
          <button class="w3-button  w3-xlarge w3-hide-large" @click="toggleSidebar()">&#9776;</button>
        </div>
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
      },
      closeSidebar() {
        this.sidebarVisible = false;
      }
    }
  };
  </script>
  