import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import WorkcodeView from 'view/workcode/view/WorkcodeView';
import { i18n } from 'i18n';
import actions from 'modules/workcode/view/workcodeViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/workcode/view/workcodeViewSelectors';
import WorkcodeViewToolbar from 'view/workcode/view/WorkcodeViewToolbar';

class WorkcodePage extends Component {
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
            [i18n('entities.workcode.menu'), '/workcode'],
            [i18n('entities.workcode.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.workcode.view.title')}
          </PageTitle>

          <WorkcodeViewToolbar match={this.props.match} />

          <WorkcodeView
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

export default connect(select)(WorkcodePage);
