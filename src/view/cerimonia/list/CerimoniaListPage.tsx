import React from 'react';
import { i18n } from 'src/i18n';
import CerimoniaListFilter from 'src/view/cerimonia/list/CerimoniaListFilter';
import CerimoniaListTable from 'src/view/cerimonia/list/CerimoniaListTable';
import CerimoniaListToolbar from 'src/view/cerimonia/list/CerimoniaListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CerimoniaListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cerimonia.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cerimonia.list.title')}
        </PageTitle>

        <CerimoniaListToolbar />
        <CerimoniaListFilter />
        <CerimoniaListTable />
      </ContentWrapper>
    </>
  );
}

export default CerimoniaListPage;
