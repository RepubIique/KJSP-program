import React, { Component } from 'react';
import EstateListFilter from 'view/estate/list/EstateListFilter';
import EstateListTable from 'view/estate/list/EstateListTable';
import EstateListToolbar from 'view/estate/list/EstateListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class EstateListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.estate.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.estate.list.title')}
          </PageTitle>

          <EstateListToolbar />
          <EstateListFilter />
          <EstateListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default EstateListPage;
