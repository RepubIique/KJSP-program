<template>
  <div>
    <el-upload
      :accept="accept"
      :file-list="fileList"
      :http-request="uploadFromRequest"
      :limit="max"
      :on-error="onError"
      :on-preview="download"
      :on-remove="onRemove"
      :on-success="onSuccess"
      action
      ref="files"
    >
      <el-button
        :disabled="loading || isFull"
        size="small"
        type="primary"
      >
        <app-i18n code="fileUploader.upload"></app-i18n>
      </el-button>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { FileUploader } from '@/shared/file-upload/file-uploader';
import Errors from '@/shared/error/errors';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-file-upload',
  props: ['storage', 'value', 'formats', 'max'],

  data() {
    return {
      fileList: (this.value || []).map((item) => ({
        ...item,
        url: item.downloadUrl,
      })),
      loading: false,
    };
  },

  computed: {
    isFull() {
      const hasInputReference = Boolean(this.$refs.files);

      return (
        (this.max &&
          hasInputReference &&
          this.$refs.files.uploadFiles.length >=
            this.max) ||
        (!hasInputReference &&
          (this.value || []).length >= this.max)
      );
    },

    accept() {
      return this.formats
        ? this.formats
            .map((format) => `.${format}`)
            .join(',')
        : undefined;
    },
  },

  methods: {
    async uploadFromRequest(request) {
      this.loading = true;
      return FileUploader.uploadFromRequest(request, {
        storage: this.storage,
        formats: this.formats,
      });
    },

    onSuccess(file) {
      if (!file) {
        return;
      }

      this.$emit('input', [...(this.value || []), file]);
      this.loading = false;
    },

    onError(error) {
      Errors.showMessage(error);
      this.loading = false;
    },

    onRemove(file, files) {
      this.$emit(
        'input',
        (this.value || []).filter((item) =>
          files.some((file) =>
            file.response
              ? file.response.id === item.id
              : file.id === item.id,
          ),
        ),
      );
    },

    download(file) {
      window.open(file.url, '_blank');
    },
  },
});
</script>
