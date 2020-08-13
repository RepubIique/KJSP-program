import routes from '@/modules/auth/auth-routes';
import store from '@/modules/auth/auth-store';
import AuthGuardMixin from '@/modules/auth/guards/auth-guard-mixin';
import UnauthGuardMixin from '@/modules/auth/guards/unauth-guard-mixin';
import EmailAlreadyVerifiedGuardMixin from '@/modules/auth/guards/email-already-verified-guard-mixin';
import PermissionGuardMixin from '@/modules/auth/guards/permission-guard-mixin';
import NotEmptyTenantMixin from '@/modules/auth/guards/not-empty-tenant-mixin';
import NotEmptyPermissionsGuardMixin from '@/modules/auth/guards/not-empty-permissions-guard-mixin';

const mixins = [
  AuthGuardMixin,
  UnauthGuardMixin,
  EmailAlreadyVerifiedGuardMixin,
  NotEmptyTenantMixin,
  PermissionGuardMixin,
  NotEmptyPermissionsGuardMixin,
];

export default {
  routes,
  store,
  mixins,
};
