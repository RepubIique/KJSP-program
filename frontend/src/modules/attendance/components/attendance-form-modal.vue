<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="80%"
    >
      <app-attendance-form
        :modal="true"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
      />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AttendanceForm from '@/modules/attendance/components/attendance-form.vue';
import { AttendanceService } from '@/modules/attendance/attendance-service';
import { i18n } from '@/i18n';
import Errors from '@/shared/error/errors';

export default Vue.extend({
  name: 'app-attendance-form-modal',

  props: ['visible'],

  components: {
    'app-attendance-form': AttendanceForm,
  },

  data() {
    return {
      record: null,
      saveLoading: false,
    };
  },

  computed: {
    dialogVisible: {
      get: function () {
        return this.visible;
      },

      set: function (value) {
        if (!value) {
          this.$emit('close');
        }
      },
    },

    title() {
      return i18n('entities.attendance.new.title');
    },
  },

  methods: {
    async doSubmit(payload) {
      try {
        // @ts-ignore
        this.saveLoading = true;
        const { id } = await AttendanceService.create(
          payload.values,
        );
        const record = await AttendanceService.find(id);
        this.$emit('success', record);
      } catch (error) {
        Errors.handle(error);
      } finally {
        // @ts-ignore
        this.saveLoading = false;
      }
    },

    doCancel() {
      // @ts-ignore
      this.dialogVisible = false;
    },
  },
});
</script>

<style></style>
