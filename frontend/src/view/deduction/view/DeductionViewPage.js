import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import DeductionView from 'view/deduction/view/DeductionView';
import { i18n } from 'i18n';
import actions from 'modules/deduction/view/deductionViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/deduction/view/deductionViewSelectors';
import DeductionViewToolbar from 'view/deduction/view/DeductionViewToolbar';

class DeductionPage extends Component {
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
            [i18n('entities.deduction.menu'), '/deduction'],
            [i18n('entities.deduction.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.deduction.view.title')}
          </PageTitle>

          <DeductionViewToolbar match={this.props.match} />

          <DeductionView
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

export default connect(select)(DeductionPage);
