import model from 'modules/workerRegistration/workerRegistrationModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import DesignationViewItem from 'view/designation/view/DesignationViewItem';
import SubdivisionViewItem from 'view/subdivision/view/SubdivisionViewItem';

const { fields } = model;

class WorkerRegistrationView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.workerID.label}
          value={fields.workerID.forView(record.workerID)}
        />

        <TextViewItem
          label={fields.workerName.label}
          value={fields.workerName.forView(record.workerName)}
        />

        <DesignationViewItem
          label={fields.designation.label}
          value={fields.designation.forView(record.designation)}
        />

        <TextViewItem
          label={fields.passportICNo.label}
          value={fields.passportICNo.forView(record.passportICNo)}
        />

        <TextViewItem
          label={fields.passportExpireddate.label}
          value={fields.passportExpireddate.forView(record.passportExpireddate)}
        />

        <TextViewItem
          label={fields.dateofEmployment.label}
          value={fields.dateofEmployment.forView(record.dateofEmployment)}
        />

        <TextViewItem
          label={fields.superiorName.label}
          value={fields.superiorName.forView(record.superiorName)}
        />

        <TextViewItem
          label={fields.dateofBirth.label}
          value={fields.dateofBirth.forView(record.dateofBirth)}
        />

        <TextViewItem
          label={fields.age.label}
          value={fields.age.forView(record.age)}
        />

        <TextViewItem
          label={fields.gender.label}
          value={fields.gender.forView(record.gender)}
        />

        <TextViewItem
          label={fields.placeofBirth.label}
          value={fields.placeofBirth.forView(record.placeofBirth)}
        />

        <TextViewItem
          label={fields.nationality.label}
          value={fields.nationality.forView(record.nationality)}
        />

        <TextViewItem
          label={fields.religion.label}
          value={fields.religion.forView(record.religion)}
        />

        <TextViewItem
          label={fields.race.label}
          value={fields.race.forView(record.race)}
        />

        <TextViewItem
          label={fields.maritalStatus.label}
          value={fields.maritalStatus.forView(record.maritalStatus)}
        />

        <TextViewItem
          label={fields.spouseName.label}
          value={fields.spouseName.forView(record.spouseName)}
        />

        <TextViewItem
          label={fields.noofchild.label}
          value={fields.noofchild.forView(record.noofchild)}
        />

        <TextViewItem
          label={fields.bank.label}
          value={fields.bank.forView(record.bank)}
        />

        <TextViewItem
          label={fields.bankAccountNo.label}
          value={fields.bankAccountNo.forView(record.bankAccountNo)}
        />

        <TextViewItem
          label={fields.socsoNo.label}
          value={fields.socsoNo.forView(record.socsoNo)}
        />

        <SubdivisionViewItem
          label={fields.subdivision.label}
          value={fields.subdivision.forView(record.subdivision)}
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

export default WorkerRegistrationView;
