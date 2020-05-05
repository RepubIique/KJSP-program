import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import CheckrollView from 'view/checkroll/view/CheckrollView';
import { i18n } from 'i18n';
import actions from 'modules/checkroll/view/checkrollViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/checkroll/view/checkrollViewSelectors';
import CheckrollViewToolbar from 'view/checkroll/view/CheckrollViewToolbar';

class CheckrollPage extends Component {
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
            [i18n('entities.checkroll.menu'), '/checkroll'],
            [i18n('entities.checkroll.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.checkroll.view.title')}
          </PageTitle>

          <CheckrollViewToolbar match={this.props.match} />

          <CheckrollView
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

export default connect(select)(CheckrollPage);
