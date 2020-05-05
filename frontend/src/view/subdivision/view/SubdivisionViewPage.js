import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SubdivisionView from 'view/subdivision/view/SubdivisionView';
import { i18n } from 'i18n';
import actions from 'modules/subdivision/view/subdivisionViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/subdivision/view/subdivisionViewSelectors';
import SubdivisionViewToolbar from 'view/subdivision/view/SubdivisionViewToolbar';

class SubdivisionPage extends Component {
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
            [i18n('entities.subdivision.menu'), '/subdivision'],
            [i18n('entities.subdivision.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.subdivision.view.title')}
          </PageTitle>

          <SubdivisionViewToolbar match={this.props.match} />

          <SubdivisionView
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

export default connect(select)(SubdivisionPage);
