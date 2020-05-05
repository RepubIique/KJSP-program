import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import FfbView from 'view/ffb/view/FfbView';
import { i18n } from 'i18n';
import actions from 'modules/ffb/view/ffbViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/ffb/view/ffbViewSelectors';
import FfbViewToolbar from 'view/ffb/view/FfbViewToolbar';

class FfbPage extends Component {
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
            [i18n('entities.ffb.menu'), '/ffb'],
            [i18n('entities.ffb.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.ffb.view.title')}
          </PageTitle>

          <FfbViewToolbar match={this.props.match} />

          <FfbView
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

export default connect(select)(FfbPage);
