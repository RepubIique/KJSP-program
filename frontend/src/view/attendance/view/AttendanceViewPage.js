import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import AttendanceView from 'view/attendance/view/AttendanceView';
import { i18n } from 'i18n';
import actions from 'modules/attendance/view/attendanceViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/attendance/view/attendanceViewSelectors';
import AttendanceViewToolbar from 'view/attendance/view/AttendanceViewToolbar';

class AttendancePage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.attendance.menu'), '/attendance'],
            [i18n('entities.attendance.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.attendance.view.title')}
          </PageTitle>

          <AttendanceViewToolbar match={this.props.match} />

          <AttendanceView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(AttendancePage);
