import { WorkCodeService } from '@/modules/work-code/work-code-service';
import Errors from '@/shared/error/errors';
import { routerAsync } from '@/app-module';
import Message from '@/shared/message/message';
import { i18n } from '@/i18n';

export default {
  namespaced: true,

  state: {
    initLoading: false,
    saveLoading: false,
    record: null,
  },

  getters: {
    record: (state) => state.record,
    initLoading: (state) => Boolean(state.initLoading),
    saveLoading: (state) => Boolean(state.saveLoading),
  },

  mutations: {
    RESET(state) {
      state.initLoading = false;
      state.saveLoading = false;
      state.record = null;
    },

    INIT_STARTED(state) {
      state.record = null;
      state.initLoading = true;
    },

    INIT_SUCCESS(state, payload) {
      state.record = payload;
      state.initLoading = false;
    },

    INIT_ERROR(state) {
      state.record = null;
      state.initLoading = false;
    },

    CREATE_STARTED(state) {
      state.saveLoading = true;
    },

    CREATE_SUCCESS(state) {
      state.saveLoading = false;
    },

    CREATE_ERROR(state) {
      state.saveLoading = false;
    },

    UPDATE_STARTED(state) {
      state.saveLoading = true;
    },

    UPDATE_SUCCESS(state) {
      state.saveLoading = false;
    },

    UPDATE_ERROR(state) {
      state.saveLoading = false;
    },
  },

  actions: {
    async doInit({ commit }, id) {
      try {
        commit('INIT_STARTED');

        let record = null;

        if (id) {
          record = await WorkCodeService.find(id);
        }

        commit('INIT_SUCCESS', record);
      } catch (error) {
        Errors.handle(error);
        commit('INIT_ERROR');
        routerAsync().push('/work-code');
      }
    },

    async doCreate({ commit }, values) {
      try {
        commit('CREATE_STARTED');
        await WorkCodeService.create(values);
        commit('CREATE_SUCCESS');
        Message.success(
          i18n('entities.workCode.create.success'),
        );
        routerAsync().push('/work-code');
      } catch (error) {
        Errors.handle(error);
        commit('CREATE_ERROR');
      }
    },

    async doUpdate({ commit }, { id, values }) {
      try {
        commit('UPDATE_STARTED');

        await WorkCodeService.update(id, values);

        commit('UPDATE_SUCCESS');
        Message.success(
          i18n('entities.workCode.update.success'),
        );
        routerAsync().push('/work-code');
      } catch (error) {
        Errors.handle(error);
        commit('UPDATE_ERROR');
      }
    },
  },
};
