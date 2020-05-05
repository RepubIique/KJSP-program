import React, { Component } from 'react';
import WorkerRegistrationListFilter from 'view/workerRegistration/list/WorkerRegistrationListFilter';
import WorkerRegistrationListTable from 'view/workerRegistration/list/WorkerRegistrationListTable';
import WorkerRegistrationListToolbar from 'view/workerRegistration/list/WorkerRegistrationListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class WorkerRegistrationListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.workerRegistration.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.workerRegistration.list.title')}
          </PageTitle>

          <WorkerRegistrationListToolbar />
          <WorkerRegistrationListFilter />
          <WorkerRegistrationListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default WorkerRegistrationListPage;
