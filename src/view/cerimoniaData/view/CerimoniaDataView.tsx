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
        label={i18n('entities.cerimoniaData.fields.nome')}
        value={record.nome}
      />

      <TextViewItem
        label={i18n('entities.cerimoniaData.fields.email')}
        value={record.email}
      />

      <TextViewItem
        label={i18n('entities.cerimoniaData.fields.telefone')}
        value={record.telefone}
      />
    </ViewWrapper>
  );
}

export default CerimoniaView;
