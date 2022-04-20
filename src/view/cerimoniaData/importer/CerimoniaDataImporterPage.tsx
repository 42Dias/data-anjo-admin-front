import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cerimoniaData/importer/cerimoniaDataImporterActions';
import fields from 'src/modules/cerimoniaData/importer/cerimoniaDataImporterFields';
import selectors from 'src/modules/cerimoniaData/importer/cerimoniaDataImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CerimoniaDataImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.cerimoniaData.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cerimoniaData.menu'), '/cerimoniaData'],
          [i18n('entities.cerimoniaData.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cerimoniaData.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CerimoniaDataImportPage;
