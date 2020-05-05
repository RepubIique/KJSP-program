import model from 'modules/deduction/deductionModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import WorkerRegistrationViewItem from 'view/workerRegistration/view/WorkerRegistrationViewItem';

const { fields } = model;

class DeductionView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <WorkerRegistrationViewItem
          label={fields.workersID.label}
          value={fields.workersID.forView(record.workersID)}
        />

        <TextViewItem
          label={fields.deductfor.label}
          value={fields.deductfor.forView(record.deductfor)}
        />

        <TextViewItem
          label={fields.bfrm.label}
          value={fields.bfrm.forView(record.bfrm)}
        />

        <TextViewItem
          label={fields.currentRM.label}
          value={fields.currentRM.forView(record.currentRM)}
        />

        <TextViewItem
          label={fields.deductionRM.label}
          value={fields.deductionRM.forView(record.deductionRM)}
        />

        <TextViewItem
          label={fields.cfrm.label}
          value={fields.cfrm.forView(record.cfrm)}
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

export default DeductionView;
