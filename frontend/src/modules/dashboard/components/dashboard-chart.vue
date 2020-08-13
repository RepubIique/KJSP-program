<template>
  <div class="chart">
    <canvas :id="id"></canvas>
  </div>
</template>

<script lang="ts">
import { v4 as uuid } from 'uuid';
import Chart from 'chart.js';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-dashboard-chart',

  props: ['config'],

  data() {
    return {
      id: uuid(),
    };
  },

  mounted() {
    const ctx = document.getElementById(this.id);
    new Chart(ctx, this.config);
  },
});
</script>

<style>
.chart {
  background-color: white;
  padding: 24px;
  border: 1px solid #e8e8e8;
}
</style>
