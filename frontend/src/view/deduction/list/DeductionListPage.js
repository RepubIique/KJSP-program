import React, { Component } from 'react';
import DeductionListFilter from 'view/deduction/list/DeductionListFilter';
import DeductionListTable from 'view/deduction/list/DeductionListTable';
import DeductionListToolbar from 'view/deduction/list/DeductionListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class DeductionListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.deduction.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.deduction.list.title')}
          </PageTitle>

          <DeductionListToolbar />
          <DeductionListFilter />
          <DeductionListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default DeductionListPage;
