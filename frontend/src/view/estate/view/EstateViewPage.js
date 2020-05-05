import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import EstateView from 'view/estate/view/EstateView';
import { i18n } from 'i18n';
import actions from 'modules/estate/view/estateViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/estate/view/estateViewSelectors';
import EstateViewToolbar from 'view/estate/view/EstateViewToolbar';

class EstatePage extends Component {
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
            [i18n('entities.estate.menu'), '/estate'],
            [i18n('entities.estate.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.estate.view.title')}
          </PageTitle>

          <EstateViewToolbar match={this.props.match} />

          <EstateView
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

export default connect(select)(EstatePage);
