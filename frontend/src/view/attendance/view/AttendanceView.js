import model from 'modules/attendance/attendanceModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import SubdivisionViewItem from 'view/subdivision/view/SubdivisionViewItem';
import WeekViewItem from 'view/week/view/WeekViewItem';
import WorkerRegistrationViewItem from 'view/workerRegistration/view/WorkerRegistrationViewItem';

const { fields } = model;

class AttendanceView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <SubdivisionViewItem
          label={fields.subDivision.label}
          value={fields.subDivision.forView(record.subDivision)}
        />

        <WeekViewItem
          label={fields.week.label}
          value={fields.week.forView(record.week)}
        />

        <WorkerRegistrationViewItem
          label={fields.workerID.label}
          value={fields.workerID.forView(record.workerID)}
        />

        <TextViewItem
          label={fields.totalWorkingDay.label}
          value={fields.totalWorkingDay.forView(record.totalWorkingDay)}
        />

        <TextViewItem
          label={fields.totalWorkingHours.label}
          value={fields.totalWorkingHours.forView(record.totalWorkingHours)}
        />

        <TextViewItem
          label={fields.totalRestDay.label}
          value={fields.totalRestDay.forView(record.totalRestDay)}
        />

        <TextViewItem
          label={fields.totalPublicHoliday.label}
          value={fields.totalPublicHoliday.forView(record.totalPublicHoliday)}
        />

        <TextViewItem
          label={fields.totalAbsent.label}
          value={fields.totalAbsent.forView(record.totalAbsent)}
        />

        <TextViewItem
          label={fields.totalSickLeave.label}
          value={fields.totalSickLeave.forView(record.totalSickLeave)}
        />

        <TextViewItem
          label={fields.totalOnLeave.label}
          value={fields.totalOnLeave.forView(record.totalOnLeave)}
        />

        <TextViewItem
          label={fields.totalOvertimeHour.label}
          value={fields.totalOvertimeHour.forView(record.totalOvertimeHour)}
        />

        <TextViewItem
          label={fields.month.label}
          value={fields.month.forView(record.month)}
        />

        <TextViewItem
          label={fields.year.label}
          value={fields.year.forView(record.year)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </div>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default AttendanceView;
