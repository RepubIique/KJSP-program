import React, { Component } from 'react';
import WorkcodeListFilter from 'view/workcode/list/WorkcodeListFilter';
import WorkcodeListTable from 'view/workcode/list/WorkcodeListTable';
import WorkcodeListToolbar from 'view/workcode/list/WorkcodeListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class WorkcodeListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.workcode.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.workcode.list.title')}
          </PageTitle>

          <WorkcodeListToolbar />
          <WorkcodeListFilter />
          <WorkcodeListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default WorkcodeListPage;
