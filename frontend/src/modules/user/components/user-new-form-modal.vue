<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="80%"
    >
      <app-user-new-form
        :modal="true"
        :record="record"
        :saveLoading="saveLoading"
        :single="true"
        @cancel="doCancel"
        @submit="doSubmit"
      />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import UserNewForm from '@/modules/user/components/user-new-form.vue';
import { UserService } from '@/modules/user/user-service';
import { i18n } from '@/i18n';
import Errors from '@/shared/error/errors';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-user-new-form-modal',

  props: ['visible'],

  components: {
    'app-user-new-form': UserNewForm,
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
      return i18n('user.new.titleModal');
    },
  },

  methods: {
    async doSubmit(payload) {
      try {
        // @ts-ignore
        this.saveLoading = true;
        await UserService.create(payload.values);
        const { rows } = await UserService.fetchUsers(
          {
            email: payload.values.emails[0],
          },
          null,
          1,
          0,
        );

        this.$emit('success', rows[0]);
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
