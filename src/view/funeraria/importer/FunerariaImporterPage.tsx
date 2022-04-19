import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/funeraria/importer/funerariaImporterActions';
import fields from 'src/modules/funeraria/importer/funerariaImporterFields';
import selectors from 'src/modules/funeraria/importer/funerariaImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FunerariaImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.funeraria.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.funeraria.menu'), '/funeraria'],
          [i18n('entities.funeraria.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.funeraria.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default FunerariaImportPage;
