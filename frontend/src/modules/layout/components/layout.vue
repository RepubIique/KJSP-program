<template>
  <div>
    <el-container>
      <app-menu></app-menu>

      <el-container :style="elMainStyle">
        <el-header>
          <app-header />
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'app-layout',

  created() {
    if (this.isMobile) {
      this.collapseMenu();
    }
  },

  computed: {
    ...mapGetters({
      collapsed: 'layout/menuCollapsed',
      isMobile: 'layout/isMobile',
    }),

    elMainStyle() {
      if (this.isMobile && !this.collapsed) {
        return {
          display: 'none',
        };
      }
      return null;
    },
  },

  methods: {
    ...mapActions({
      collapseMenu: 'layout/collapseMenu',
    }),
  },
});
</script>

<style></style>
