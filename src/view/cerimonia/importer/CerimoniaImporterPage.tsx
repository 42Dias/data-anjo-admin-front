import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cerimonia/importer/cerimoniaImporterActions';
import fields from 'src/modules/cerimonia/importer/cerimoniaImporterFields';
import selectors from 'src/modules/cerimonia/importer/cerimoniaImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CerimoniaImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.cerimonia.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cerimonia.menu'), '/cerimonia'],
          [i18n('entities.cerimonia.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cerimonia.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CerimoniaImportPage;
