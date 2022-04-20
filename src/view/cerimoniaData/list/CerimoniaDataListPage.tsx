import React from 'react';
import { i18n } from 'src/i18n';
import CerimoniaDataListFilter from 'src/view/cerimoniaData/list/CerimoniaDataListFilter';
import CerimoniaDataListTable from 'src/view/cerimoniaData/list/CerimoniaDataListTable';
import CerimoniaDataListToolbar from 'src/view/cerimoniaData/list/CerimoniaDataListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CerimoniaDataListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cerimoniaData.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cerimoniaData.list.title')}
        </PageTitle>

        <CerimoniaDataListToolbar />
        <CerimoniaDataListFilter />
        <CerimoniaDataListTable />
      </ContentWrapper>
    </>
  );
}

export default CerimoniaDataListPage;
