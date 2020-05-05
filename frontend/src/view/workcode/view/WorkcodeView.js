import model from 'modules/workcode/workcodeModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';


const { fields } = model;

class WorkcodeView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.accCode.label}
          value={fields.accCode.forView(record.accCode)}
        />

        <TextViewItem
          label={fields.workCategory.label}
          value={fields.workCategory.forView(record.workCategory)}
        />

        <TextViewItem
          label={fields.typeofWork.label}
          value={fields.typeofWork.forView(record.typeofWork)}
        />

        <TextViewItem
          label={fields.workDescription.label}
          value={fields.workDescription.forView(record.workDescription)}
        />

        <TextViewItem
          label={fields.rate.label}
          value={fields.rate.forView(record.rate)}
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

export default WorkcodeView;
