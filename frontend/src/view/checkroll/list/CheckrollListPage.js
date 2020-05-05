import React, { Component } from 'react';
import CheckrollListFilter from 'view/checkroll/list/CheckrollListFilter';
import CheckrollListTable from 'view/checkroll/list/CheckrollListTable';
import CheckrollListToolbar from 'view/checkroll/list/CheckrollListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class CheckrollListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.checkroll.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.checkroll.list.title')}
          </PageTitle>

          <CheckrollListToolbar />
          <CheckrollListFilter />
          <CheckrollListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default CheckrollListPage;
