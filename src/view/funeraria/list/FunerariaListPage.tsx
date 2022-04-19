import React from 'react';
import { i18n } from 'src/i18n';
import FunerariaListFilter from 'src/view/funeraria/list/FunerariaListFilter';
import FunerariaListTable from 'src/view/funeraria/list/FunerariaListTable';
import FunerariaListToolbar from 'src/view/funeraria/list/FunerariaListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FunerariaListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.funeraria.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.funeraria.list.title')}
        </PageTitle>

        <FunerariaListToolbar />
        <FunerariaListFilter />
        <FunerariaListTable />
      </ContentWrapper>
    </>
  );
}

export default FunerariaListPage;
