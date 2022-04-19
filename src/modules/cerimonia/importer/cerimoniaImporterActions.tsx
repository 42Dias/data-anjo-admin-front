import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/cerimonia/importer/cerimoniaImporterSelectors';
import CerimoniaService from 'src/modules/cerimonia/cerimoniaService';
import fields from 'src/modules/cerimonia/importer/cerimoniaImporterFields';
import { i18n } from 'src/i18n';

const cerimoniaImporterActions = importerActions(
  'CERIMONIA_IMPORTER',
  selectors,
  CerimoniaService.import,
  fields,
  i18n('entities.cerimonia.importer.fileName'),
);

export default cerimoniaImporterActions;