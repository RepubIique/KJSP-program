import React, { Component } from 'react';
import FfbListFilter from 'view/ffb/list/FfbListFilter';
import FfbListTable from 'view/ffb/list/FfbListTable';
import FfbListToolbar from 'view/ffb/list/FfbListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class FfbListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.ffb.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.ffb.list.title')}
          </PageTitle>

          <FfbListToolbar />
          <FfbListFilter />
          <FfbListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default FfbListPage;
