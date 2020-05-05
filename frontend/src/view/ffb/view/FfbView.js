import model from 'modules/ffb/ffbModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import EstateViewItem from 'view/estate/view/EstateViewItem';
import SubdivisionViewItem from 'view/subdivision/view/SubdivisionViewItem';
import MillViewItem from 'view/mill/view/MillViewItem';
import WorkcodeViewItem from 'view/workcode/view/WorkcodeViewItem';

const { fields } = model;

class FfbView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.date.label}
          value={fields.date.forView(record.date)}
        />

        <EstateViewItem
          label={fields.estate.label}
          value={fields.estate.forView(record.estate)}
        />

        <SubdivisionViewItem
          label={fields.subdivision.label}
          value={fields.subdivision.forView(record.subdivision)}
        />

        <MillViewItem
          label={fields.mill.label}
          value={fields.mill.forView(record.mill)}
        />

        <TextViewItem
          label={fields.fFBTonnageMT.label}
          value={fields.fFBTonnageMT.forView(record.fFBTonnageMT)}
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
          label={fields.company.label}
          value={fields.company.forView(record.company)}
        />

        <TextViewItem
          label={fields.millticketNo.label}
          value={fields.millticketNo.forView(record.millticketNo)}
        />

        <TextViewItem
          label={fields.sealNo.label}
          value={fields.sealNo.forView(record.sealNo)}
        />

        <TextViewItem
          label={fields.deliverynoteno.label}
          value={fields.deliverynoteno.forView(record.deliverynoteno)}
        />

        <TextViewItem
          label={fields.lorryNo.label}
          value={fields.lorryNo.forView(record.lorryNo)}
        />

        <WorkcodeViewItem
          label={fields.block.label}
          value={fields.block.forView(record.block)}
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

export default FfbView;
