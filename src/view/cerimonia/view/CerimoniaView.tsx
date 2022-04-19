import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FunerariaViewItem from 'src/view/funeraria/view/FunerariaViewItem';

function CerimoniaView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.cerimonia.fields.nomeHomenageado')}
        value={record.nomeHomenageado}
      />

      <TextViewItem
        label={i18n('entities.cerimonia.fields.cpf')}
        value={record.cpf}
      />

      <TextViewItem
        label={i18n('entities.cerimonia.fields.dataCerimonia')}
        value={record.dataCerimonia}
      />

      <TextViewItem
        label={i18n('entities.cerimonia.fields.responsavel')}
        value={record.responsavel}
      />

      <TextViewItem
        label={i18n('entities.cerimonia.fields.telefoneResponsavel')}
        value={record.telefoneResponsavel}
      />

      <TextViewItem
        label={i18n('entities.cerimonia.fields.emailResponsavel')}
        value={record.emailResponsavel}
      />

      <FunerariaViewItem
        label={i18n('entities.cerimonia.fields.idFuneraria')}
        value={record.idFuneraria}
      />
    </ViewWrapper>
  );
}

export default CerimoniaView;
