import importerStore from '@/shared/importer/importer-store';
import { UserService } from '@/modules/user/user-service';
import userImporterFields from '@/modules/user/user-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  UserService.import,
  userImporterFields,
  i18n('user.importer.fileName'),
  i18n('user.importer.hint'),
);
