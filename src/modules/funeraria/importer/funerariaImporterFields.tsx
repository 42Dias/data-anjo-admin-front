import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nomeFuneraria',
    label: i18n('entities.funeraria.fields.nomeFuneraria'),
    schema: schemas.string(
      i18n('entities.funeraria.fields.nomeFuneraria'),
      {},
    ),
  },
  {
    name: 'idCerimonia',
    label: i18n('entities.funeraria.fields.idCerimonia'),
    schema: schemas.relationToMany(
      i18n('entities.funeraria.fields.idCerimonia'),
      {},
    ),
  },
];