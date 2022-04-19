import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CerimoniaViewItem from 'src/view/cerimonia/view/CerimoniaViewItem';

function FunerariaView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.funeraria.fields.nomeFuneraria')}
        value={record.nomeFuneraria}
      />

      <CerimoniaViewItem
        label={i18n('entities.funeraria.fields.idCerimonia')}
        value={record.idCerimonia}
      />
    </ViewWrapper>
  );
}

export default FunerariaView;
