import { Button, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import HistoryIcon from '@material-ui/icons/History';
import { i18n } from 'i18n';
import auditLogSelectors from 'modules/auditLog/auditLogSelectors';
import weekSelectors from 'modules/week/weekSelectors';
import destroyActions from 'modules/week/destroy/weekDestroyActions';
import destroySelectors from 'modules/week/destroy/weekDestroySelectors';
import actions from 'modules/week/list/weekListActions';
import selectors from 'modules/week/list/weekListSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'view/shared/modals/ConfirmModal';
import ToolbarWrapper from 'view/shared/styles/ToolbarWrapper';

class WeekToolbar extends Component {
  state = {
    destroyAllConfirmVisible: false,
  };

  doOpenDestroyAllConfirmModal = () => {
    this.setState({
      destroyAllConfirmVisible: true,
    });
  };

  doCloseDestroyAllConfirmModal = () => {
    this.setState({ destroyAllConfirmVisible: false });
  };

  doExport = () => {
    const { dispatch } = this.props;
    dispatch(actions.doExport());
  };

  doDestroyAllSelected = () => {
    this.doCloseDestroyAllConfirmModal();
    const { dispatch } = this.props;
    dispatch(
      destroyActions.doDestroyAll(this.props.selectedKeys),
    );
  };

  renderExportButton() {
    const { hasRows, loading, exportLoading } = this.props;

    const disabledWithTooltip = !hasRows || loading;

    const button = (
      <Button
        type="button"
        disabled={disabledWithTooltip || exportLoading}
        onClick={this.doExport}
        startIcon={<DescriptionIcon />}
      >
        {i18n('common.export')}
      </Button>
    );

    if (!disabledWithTooltip) {
      return button;
    }

    return (
      <React.Fragment>
        <Tooltip title={i18n('common.noDataToExport')}>
          <span>{button}</span>
        </Tooltip>
      </React.Fragment>
    );
  }

  renderDestroyButton() {
    const {
      selectedKeys,
      destroyLoading,
      loading,
      hasPermissionToDestroy,
    } = this.props;

    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <Button
        variant="contained"
        color="primary"
        type="button"
        disabled={destroyLoading || disabled}
        onClick={this.doOpenDestroyAllConfirmModal}
        startIcon={<DeleteIcon />}
      >
        {i18n('common.destroy')}
      </Button>
    );

    if (disabled) {
      return (
        <Tooltip title={i18n('common.mustSelectARow')}>
          <span>{button}</span>
        </Tooltip>
      );
    }

    return button;
  }

  render() {
    return (
      <ToolbarWrapper>
        {this.props.hasPermissionToCreate && (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/week/new"
            startIcon={<AddIcon />}
          >
            {i18n('common.new')}
          </Button>
        )}

        {this.props.hasPermissionToImport && (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/week/importer"
            startIcon={<CloudUploadIcon />}
          >
            {i18n('common.import')}
          </Button>
        )}

        {this.renderDestroyButton()}

        {this.props.hasPermissionToAuditLogs && (
          <Button
            component={Link}
            to="/audit-logs?entityNames=week"
            startIcon={<HistoryIcon />}
          >
            {i18n('auditLog.menu')}
          </Button>
        )}

        {this.renderExportButton()}

        {this.state.destroyAllConfirmVisible && (
          <ConfirmModal
            title={i18n('common.areYouSure')}
            onConfirm={() => this.doDestroyAllSelected()}
            onClose={() =>
              this.doCloseDestroyAllConfirmModal()
            }
            okText={i18n('common.yes')}
            cancelText={i18n('common.no')}
          />
        )}
      </ToolbarWrapper>
    );
  }
}

function select(state) {
  return {
    selectedKeys: selectors.selectSelectedKeys(state),
    loading: selectors.selectLoading(state),
    destroyLoading: destroySelectors.selectLoading(state),
    exportLoading: selectors.selectExportLoading(state),
    hasRows: selectors.selectHasRows(state),
    hasPermissionToAuditLogs: auditLogSelectors.selectPermissionToRead(
      state,
    ),
    hasPermissionToEdit: weekSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: weekSelectors.selectPermissionToDestroy(
      state,
    ),
    hasPermissionToCreate: weekSelectors.selectPermissionToCreate(
      state,
    ),
    hasPermissionToImport: weekSelectors.selectPermissionToImport(
      state,
    ),
  };
}

export default connect(select)(WeekToolbar);
