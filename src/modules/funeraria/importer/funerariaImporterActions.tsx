import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/funeraria/importer/funerariaImporterSelectors';
import FunerariaService from 'src/modules/funeraria/funerariaService';
import fields from 'src/modules/funeraria/importer/funerariaImporterFields';
import { i18n } from 'src/i18n';

const funerariaImporterActions = importerActions(
  'FUNERARIA_IMPORTER',
  selectors,
  FunerariaService.import,
  fields,
  i18n('entities.funeraria.importer.fileName'),
);

export default funerariaImporterActions;