import React, { Component } from 'react';
import WeekListFilter from 'view/week/list/WeekListFilter';
import WeekListTable from 'view/week/list/WeekListTable';
import WeekListToolbar from 'view/week/list/WeekListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class WeekListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.week.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.week.list.title')}
          </PageTitle>

          <WeekListToolbar />
          <WeekListFilter />
          <WeekListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default WeekListPage;
