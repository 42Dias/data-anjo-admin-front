import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/funeraria/view/funerariaViewActions';
import selectors from 'src/modules/funeraria/view/funerariaViewSelectors';
import FunerariaView from 'src/view/funeraria/view/FunerariaView';
import FunerariaViewToolbar from 'src/view/funeraria/view/FunerariaViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FunerariaPage() {
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
          [i18n('entities.funeraria.menu'), '/funeraria'],
          [i18n('entities.funeraria.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.funeraria.view.title')}
        </PageTitle>

        <FunerariaViewToolbar match={match} />

        <FunerariaView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default FunerariaPage;
