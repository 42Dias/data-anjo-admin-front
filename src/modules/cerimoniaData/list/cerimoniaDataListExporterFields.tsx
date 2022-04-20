import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'nomeHomenageado',
    label: i18n('entities.cerimoniaData.fields.nomeHomenageado'),
  },
  {
    name: 'cpf',
    label: i18n('entities.cerimoniaData.fields.cpf'),
  },
  {
    name: 'dataCerimoniaData',
    label: i18n('entities.cerimoniaData.fields.datacerimoniaData'),
  },
  {
    name: 'responsavel',
    label: i18n('entities.cerimoniaData.fields.responsavel'),
  },
  {
    name: 'telefoneResponsavel',
    label: i18n('entities.cerimoniaData.fields.telefoneResponsavel'),
  },
  {
    name: 'emailResponsavel',
    label: i18n('entities.cerimoniaData.fields.emailResponsavel'),
  },
  {
    name: 'idFuneraria',
    label: i18n('entities.cerimoniaData.fields.idFuneraria'),
    render: exporterRenders.relationToOne(),
  }
];
