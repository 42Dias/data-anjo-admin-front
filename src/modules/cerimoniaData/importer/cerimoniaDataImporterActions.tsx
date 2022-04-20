import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/cerimoniaData/importer/cerimoniaDataImporterSelectors';
import CerimoniaDataService from 'src/modules/cerimoniaData/cerimoniaDataService';
import fields from 'src/modules/cerimoniaData/importer/cerimoniaDataImporterFields';
import { i18n } from 'src/i18n';

const cerimoniadataImporterActions = importerActions(
  'CERIMONIADATA_IMPORTER',
  selectors,
  CerimoniaDataService.import,
  fields,
  i18n('entities.cerimoniaData.importer.fileName'),
);

export default cerimoniadataImporterActions;