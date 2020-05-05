import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import DesignationView from 'view/designation/view/DesignationView';
import { i18n } from 'i18n';
import actions from 'modules/designation/view/designationViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/designation/view/designationViewSelectors';
import DesignationViewToolbar from 'view/designation/view/DesignationViewToolbar';

class DesignationPage extends Component {
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
            [i18n('entities.designation.menu'), '/designation'],
            [i18n('entities.designation.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.designation.view.title')}
          </PageTitle>

          <DesignationViewToolbar match={this.props.match} />

          <DesignationView
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

export default connect(select)(DesignationPage);
