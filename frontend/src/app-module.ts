import Vue from 'vue';
import Vuex from 'vuex';
import ProgressBar from '@/shared/progress-bar/progress-bar';
import Router from 'vue-router';
import shared from '@/shared/shared-module';
import auth from '@/modules/auth/auth-module';
import layout from '@/modules/layout/layout-module';
import dashboard from '@/modules/dashboard/dashboard-module';
import tenant from '@/modules/tenant/tenant-module';
import plan from '@/modules/plan/plan-module';
import user from '@/modules/user/user-module';
import settings from '@/modules/settings/settings-module';
import auditLog from '@/modules/audit-log/audit-log-module';
import location from '@/modules/location/location-module';
import workerRegistration from '@/modules/worker-registration/worker-registration-module';
import workCode from '@/modules/work-code/work-code-module';
import workDone from '@/modules/work-done/work-done-module';
import attendance from '@/modules/attendance/attendance-module';
import deduction from '@/modules/deduction/deduction-module';
import ffb from '@/modules/ffb/ffb-module';
import fFBproduction from '@/modules/f-f-bproduction/f-f-bproduction-module';
import plantedArea from '@/modules/planted-area/planted-area-module';

const modules = {
  shared,
  dashboard,
  settings,
  auth,
  tenant,
  plan,
  user,
  auditLog,
  layout,
  location,
  workerRegistration,
  workCode,
  workDone,
  attendance,
  deduction,
  ffb,
  fFBproduction,
  plantedArea,  
};

// start - boilerplate code

const exists = (el) => Boolean(el);

function setupComponentsFiltersDirectivesAndMixins() {
  Object.keys(modules)
    .map((key) => modules[key].components)
    .filter(exists)
    .forEach((components) => {
      Object.keys(components).forEach((name) => {
        Vue.component(name, components[name]);
      });
    });

  Object.keys(modules)
    .map((key) => modules[key].filters)
    .filter(exists)
    .forEach((filters) => {
      filters.forEach((filter) => {
        Vue.filter(filter.name, filter.implementation);
      });
    });

  Object.keys(modules)
    .map((key) => modules[key].directives)
    .filter(exists)
    .forEach((directives) => {
      directives.forEach((directive) => {
        Vue.directive(
          directive.name,
          directive.implementation,
        );
      });
    });

  Object.keys(modules)
    .map((key) => modules[key].mixins)
    .filter(exists)
    .forEach((mixins) => {
      mixins.forEach((mixin) => {
        Vue.mixin(mixin);
      });
    });
}

const routes = [
  ...Object.keys(modules)
    .filter((key) => Boolean(modules[key].routes))
    .map((key) => modules[key].routes)
    .reduce((a, b) => a.concat(b), []),
  { path: '*', redirect: '/404' },
];

let router;

const routerAsync = () => {
  if (!router) {
    router = new Router({
      mode: 'history',
      routes,
      scrollBehavior() {
        return { x: 0, y: 0 };
      },
    });

    router.beforeEach((to, from, next) => {
      if (to.name) {
        ProgressBar.start();
      }

      next();
    });

    router.afterEach(() => {
      ProgressBar.done();
    });
  }

  return router;
};

const buildStores = () => {
  const output = {};

  Object.keys(modules)
    .filter((key) => Boolean(modules[key].store))
    .forEach((key) => {
      output[key] = modules[key].store;
    });

  return output;
};

let store;

const storeAsync = () => {
  if (!store) {
    store = new Vuex.Store({ modules: buildStores() });
  }

  return store;
};

export {
  setupComponentsFiltersDirectivesAndMixins,
  routerAsync,
  storeAsync,
};

// end - boilerplate code
