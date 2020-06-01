import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import WorkerRegistrationView from 'view/workerRegistration/view/WorkerRegistrationView';
import { i18n } from 'i18n';
import actions from 'modules/workerRegistration/view/workerRegistrationViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/workerRegistration/view/workerRegistrationViewSelectors';
import WorkerRegistrationViewToolbar from 'view/workerRegistration/view/WorkerRegistrationViewToolbar';

class WorkerRegistrationPage extends Component {
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
            [
              i18n('entities.workerRegistration.menu'),
              '/worker-registration',
            ],
            [
              i18n(
                'entities.workerRegistration.view.title',
              ),
            ],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.workerRegistration.view.title')}
          </PageTitle>

          <WorkerRegistrationViewToolbar
            match={this.props.match}
          />

          <WorkerRegistrationView
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

export default connect(select)(WorkerRegistrationPage);
