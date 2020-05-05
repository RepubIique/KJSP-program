import React, { Component } from 'react';
import BlocksListFilter from 'view/blocks/list/BlocksListFilter';
import BlocksListTable from 'view/blocks/list/BlocksListTable';
import BlocksListToolbar from 'view/blocks/list/BlocksListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class BlocksListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.blocks.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.blocks.list.title')}
          </PageTitle>

          <BlocksListToolbar />
          <BlocksListFilter />
          <BlocksListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default BlocksListPage;
