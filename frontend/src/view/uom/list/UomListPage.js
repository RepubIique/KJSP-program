import React, { Component } from 'react';
import UomListFilter from 'view/uom/list/UomListFilter';
import UomListTable from 'view/uom/list/UomListTable';
import UomListToolbar from 'view/uom/list/UomListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class UomListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.uom.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.uom.list.title')}
          </PageTitle>

          <UomListToolbar />
          <UomListFilter />
          <UomListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default UomListPage;
