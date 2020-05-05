import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import MillView from 'view/mill/view/MillView';
import { i18n } from 'i18n';
import actions from 'modules/mill/view/millViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/mill/view/millViewSelectors';
import MillViewToolbar from 'view/mill/view/MillViewToolbar';

class MillPage extends Component {
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
            [i18n('entities.mill.menu'), '/mill'],
            [i18n('entities.mill.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.mill.view.title')}
          </PageTitle>

          <MillViewToolbar match={this.props.match} />

          <MillView
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

export default connect(select)(MillPage);
