import React, { Component } from 'react';
import WorkDoneListFilter from 'view/workDone/list/WorkDoneListFilter';
import WorkDoneListTable from 'view/workDone/list/WorkDoneListTable';
import WorkDoneListToolbar from 'view/workDone/list/WorkDoneListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class WorkDoneListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.workDone.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.workDone.list.title')}
          </PageTitle>

          <WorkDoneListToolbar />
          <WorkDoneListFilter />
          <WorkDoneListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default WorkDoneListPage;
