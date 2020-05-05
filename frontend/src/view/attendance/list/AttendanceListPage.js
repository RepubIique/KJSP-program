import React, { Component } from 'react';
import AttendanceListFilter from 'view/attendance/list/AttendanceListFilter';
import AttendanceListTable from 'view/attendance/list/AttendanceListTable';
import AttendanceListToolbar from 'view/attendance/list/AttendanceListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class AttendanceListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.attendance.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.attendance.list.title')}
          </PageTitle>

          <AttendanceListToolbar />
          <AttendanceListFilter />
          <AttendanceListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default AttendanceListPage;
