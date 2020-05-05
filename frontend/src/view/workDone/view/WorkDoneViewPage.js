import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import WorkDoneView from 'view/workDone/view/WorkDoneView';
import { i18n } from 'i18n';
import actions from 'modules/workDone/view/workDoneViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/workDone/view/workDoneViewSelectors';
import WorkDoneViewToolbar from 'view/workDone/view/WorkDoneViewToolbar';

class WorkDonePage extends Component {
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
            [i18n('entities.workDone.menu'), '/work-done'],
            [i18n('entities.workDone.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.workDone.view.title')}
          </PageTitle>

          <WorkDoneViewToolbar match={this.props.match} />

          <WorkDoneView
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

export default connect(select)(WorkDonePage);
