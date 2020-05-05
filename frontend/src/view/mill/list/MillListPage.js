import React, { Component } from 'react';
import MillListFilter from 'view/mill/list/MillListFilter';
import MillListTable from 'view/mill/list/MillListTable';
import MillListToolbar from 'view/mill/list/MillListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class MillListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.mill.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.mill.list.title')}
          </PageTitle>

          <MillListToolbar />
          <MillListFilter />
          <MillListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default MillListPage;
