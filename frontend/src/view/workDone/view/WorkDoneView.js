import model from 'modules/workDone/workDoneModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import WorkerRegistrationViewItem from 'view/workerRegistration/view/WorkerRegistrationViewItem';
import WorkcodeViewItem from 'view/workcode/view/WorkcodeViewItem';
import WeekViewItem from 'view/week/view/WeekViewItem';

const { fields } = model;

class WorkDoneView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <WorkerRegistrationViewItem
          label={fields.workerID.label}
          value={fields.workerID.forView(record.workerID)}
        />

        <WorkcodeViewItem
          label={fields.workcode.label}
          value={fields.workcode.forView(record.workcode)}
        />

        <TextViewItem
          label={fields.quantity.label}
          value={fields.quantity.forView(record.quantity)}
        />

        <TextViewItem
          label={fields.block.label}
          value={fields.block.forView(record.block)}
        />

        <TextViewItem
          label={fields.month.label}
          value={fields.month.forView(record.month)}
        />

        <WeekViewItem
          label={fields.week.label}
          value={fields.week.forView(record.week)}
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

export default WorkDoneView;
