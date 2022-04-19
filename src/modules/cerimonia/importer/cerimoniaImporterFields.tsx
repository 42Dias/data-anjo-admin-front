import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'nomeHomenageado',
    label: i18n('entities.cerimonia.fields.nomeHomenageado'),
    schema: schemas.string(
      i18n('entities.cerimonia.fields.nomeHomenageado'),
      {
        "required": true,
        "min": 3
      },
    ),
  },
  {
    name: 'cpf',
    label: i18n('entities.cerimonia.fields.cpf'),
    schema: schemas.string(
      i18n('entities.cerimonia.fields.cpf'),
      {
        "required": true,
        "min": 10,
        "max": 12
      },
    ),
  },
  {
    name: 'dataCerimonia',
    label: i18n('entities.cerimonia.fields.dataCerimonia'),
    schema: schemas.date(
      i18n('entities.cerimonia.fields.dataCerimonia'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'responsavel',
    label: i18n('entities.cerimonia.fields.responsavel'),
    schema: schemas.string(
      i18n('entities.cerimonia.fields.responsavel'),
      {
        "required": true,
        "min": 3
      },
    ),
  },
  {
    name: 'telefoneResponsavel',
    label: i18n('entities.cerimonia.fields.telefoneResponsavel'),
    schema: schemas.string(
      i18n('entities.cerimonia.fields.telefoneResponsavel'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'emailResponsavel',
    label: i18n('entities.cerimonia.fields.emailResponsavel'),
    schema: schemas.string(
      i18n('entities.cerimonia.fields.emailResponsavel'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'idFuneraria',
    label: i18n('entities.cerimonia.fields.idFuneraria'),
    schema: schemas.relationToOne(
      i18n('entities.cerimonia.fields.idFuneraria'),
      {},
    ),
  },
];