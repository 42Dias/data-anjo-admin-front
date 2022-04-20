import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'nomeFuneraria',
    label: i18n('entities.funeraria.fields.nomeFuneraria'),
  },
  {
    name: 'idCerimonia',
    label: i18n('entities.funeraria.fields.idCerimonia'),
    render: exporterRenders.relationToMany(),
  }
];
