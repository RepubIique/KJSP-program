import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import BlocksView from 'view/blocks/view/BlocksView';
import { i18n } from 'i18n';
import actions from 'modules/blocks/view/blocksViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/blocks/view/blocksViewSelectors';
import BlocksViewToolbar from 'view/blocks/view/BlocksViewToolbar';

class BlocksPage extends Component {
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
            [i18n('entities.blocks.menu'), '/blocks'],
            [i18n('entities.blocks.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.blocks.view.title')}
          </PageTitle>

          <BlocksViewToolbar match={this.props.match} />

          <BlocksView
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

export default connect(select)(BlocksPage);
