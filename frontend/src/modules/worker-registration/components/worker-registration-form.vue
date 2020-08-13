<template>
  <div>
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidthForm"
      :model="model"
      :rules="rules"
      @submit.native.prevent="doSubmit"
      class="form"
      ref="form"
      v-if="model"
    >
      <el-form-item
        :label="fields.name.label"
        :prop="fields.name.name"
        :required="fields.name.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.name.name]" ref="focus" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.designation.label"
        :prop="fields.designation.name"
        :required="fields.designation.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.designation.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.passport.label"
        :prop="fields.passport.name"
        :required="fields.passport.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.passport.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.permitExpiryDate.label"
        :prop="fields.permitExpiryDate.name"
        :required="fields.permitExpiryDate.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker placeholder type="date" v-model="model[fields.permitExpiryDate.name]"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.dateEmployed.label"
        :prop="fields.dateEmployed.name"
        :required="fields.dateEmployed.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker placeholder type="date" v-model="model[fields.dateEmployed.name]"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.gang.label"
        :prop="fields.gang.name"
        :required="fields.gang.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.gang.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.superiorName.label"
        :prop="fields.superiorName.name"
        :required="fields.superiorName.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.superiorName.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.dob.label"
        :prop="fields.dob.name"
        :required="fields.dob.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker placeholder type="date" v-model="model[fields.dob.name]"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.age.label"
        :prop="fields.age.name"
        :required="fields.age.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="0" :step="1" v-model="model[fields.age.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.gender.label"
        :prop="fields.gender.name"
        :required="fields.gender.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-radio-group v-model="model[fields.gender.name]">
            <el-radio
              :key="option.id"
              :label="option.id"
              v-for="option of fields.gender.options"
            >{{option.label}}</el-radio>
          </el-radio-group>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.placeOfBirth.label"
        :prop="fields.placeOfBirth.name"
        :required="fields.placeOfBirth.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.placeOfBirth.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.nationality.label"
        :prop="fields.nationality.name"
        :required="fields.nationality.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.nationality.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.religion.label"
        :prop="fields.religion.name"
        :required="fields.religion.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.religion.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.race.label"
        :prop="fields.race.name"
        :required="fields.race.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.race.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.maritalStatus.label"
        :prop="fields.maritalStatus.name"
        :required="fields.maritalStatus.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-radio-group v-model="model[fields.maritalStatus.name]">
            <el-radio
              :key="option.id"
              :label="option.id"
              v-for="option of fields.maritalStatus.options"
            >{{option.label}}</el-radio>
          </el-radio-group>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.spouse.label"
        :prop="fields.spouse.name"
        :required="fields.spouse.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.spouse.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.children.label"
        :prop="fields.children.name"
        :required="fields.children.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="0" :step="1" v-model="model[fields.children.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.bank.label"
        :prop="fields.bank.name"
        :required="fields.bank.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.bank.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.bankNo.label"
        :prop="fields.bankNo.name"
        :required="fields.bankNo.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.bankNo.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.socso.label"
        :prop="fields.socso.name"
        :required="fields.socso.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.socso.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.location.label"
        :prop="fields.location.name"
        :required="fields.location.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-location-autocomplete-input
            :fetchFn="fields.location.fetchFn"
            :mapperFn="fields.location.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.location.name]"
            mode="single"
          ></app-location-autocomplete-input>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.status.label"
        :prop="fields.status.name"
        :required="fields.status.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-select placeholder v-model="model[fields.status.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.status.options"
            ></el-option>
          </el-select>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.image.label"
        :prop="fields.image.name"
        :required="fields.image.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-image-upload
            :max="fields.image.max"
            :storage="fields.image.storage"      
            v-model="model[fields.image.name]"
          ></app-image-upload>
        </el-col>
      </el-form-item>

      <el-form-item>
        <div class="form-buttons">
          <el-button
            :disabled="saveLoading"
            @click="doSubmit"
            icon="el-icon-fa-floppy-o"
            type="primary"
          >
            <app-i18n code="common.save"></app-i18n>
          </el-button>

          <el-button
            :disabled="saveLoading"
            @click="doReset"
            icon="el-icon-fa-undo"
          >
            <app-i18n code="common.reset"></app-i18n>
          </el-button>

          <el-button
            :disabled="saveLoading"
            @click="doCancel"
            icon="el-icon-fa-close"
          >
            <app-i18n code="common.cancel"></app-i18n>
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { WorkerRegistrationModel } from '@/modules/worker-registration/worker-registration-model';

const { fields } = WorkerRegistrationModel;
const formSchema = new FormSchema([
  fields.name,
  fields.designation,
  fields.passport,
  fields.permitExpiryDate,
  fields.dateEmployed,
  fields.gang,
  fields.superiorName,
  fields.dob,
  fields.age,
  fields.gender,
  fields.placeOfBirth,
  fields.nationality,
  fields.religion,
  fields.race,
  fields.maritalStatus,
  fields.spouse,
  fields.children,
  fields.bank,
  fields.bankNo,
  fields.socso,
  fields.location,
  fields.status,
  fields.image,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-worker-registration-form',

  props: ['isEditing', 'record', 'saveLoading', 'modal'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  created() {
    this.model = formSchema.initialValues(
      this.record || {},
    );
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
    }),

    fields() {
      return fields;
    },
  },

  methods: {
    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    doCancel() {
      this.$emit('cancel');
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      return this.$emit('submit', {
        id: this.record && this.record.id,
        values: formSchema.cast(this.model),
      });
    },
  },
});
</script>

<style></style>
