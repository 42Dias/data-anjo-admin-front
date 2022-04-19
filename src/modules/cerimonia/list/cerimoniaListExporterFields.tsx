import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.cerimonia.fields.id'),
  },
  {
    name: 'nomeHomenageado',
    label: i18n('entities.cerimonia.fields.nomeHomenageado'),
  },
  {
    name: 'cpf',
    label: i18n('entities.cerimonia.fields.cpf'),
  },
  {
    name: 'dataCerimonia',
    label: i18n('entities.cerimonia.fields.dataCerimonia'),
  },
  {
    name: 'responsavel',
    label: i18n('entities.cerimonia.fields.responsavel'),
  },
  {
    name: 'telefoneResponsavel',
    label: i18n('entities.cerimonia.fields.telefoneResponsavel'),
  },
  {
    name: 'emailResponsavel',
    label: i18n('entities.cerimonia.fields.emailResponsavel'),
  },
  {
    name: 'idFuneraria',
    label: i18n('entities.cerimonia.fields.idFuneraria'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.cerimonia.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.cerimonia.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
