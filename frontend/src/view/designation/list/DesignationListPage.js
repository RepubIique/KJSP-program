import React, { Component } from 'react';
import DesignationListFilter from 'view/designation/list/DesignationListFilter';
import DesignationListTable from 'view/designation/list/DesignationListTable';
import DesignationListToolbar from 'view/designation/list/DesignationListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class DesignationListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.designation.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.designation.list.title')}
          </PageTitle>

          <DesignationListToolbar />
          <DesignationListFilter />
          <DesignationListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default DesignationListPage;
