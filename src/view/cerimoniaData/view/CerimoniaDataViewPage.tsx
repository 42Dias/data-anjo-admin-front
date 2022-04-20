import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cerimoniaData/view/cerimoniaDataViewActions';
import selectors from 'src/modules/cerimoniaData/view/cerimoniaDataViewSelectors';
import CerimoniaDataView from 'src/view/cerimoniaData/view/CerimoniaDataView';
import CerimoniaDataViewToolbar from 'src/view/cerimoniaData/view/CerimoniaDataViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CerimoniaPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cerimoniaData.menu'), '/cerimoniaData'],
          [i18n('entities.cerimoniaData.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cerimoniaData.view.title')}
        </PageTitle>

        <CerimoniaDataViewToolbar match={match} />

        <CerimoniaDataView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CerimoniaPage;
