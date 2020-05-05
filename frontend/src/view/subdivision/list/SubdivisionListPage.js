import React, { Component } from 'react';
import SubdivisionListFilter from 'view/subdivision/list/SubdivisionListFilter';
import SubdivisionListTable from 'view/subdivision/list/SubdivisionListTable';
import SubdivisionListToolbar from 'view/subdivision/list/SubdivisionListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class SubdivisionListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.subdivision.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.subdivision.list.title')}
          </PageTitle>

          <SubdivisionListToolbar />
          <SubdivisionListFilter />
          <SubdivisionListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default SubdivisionListPage;
