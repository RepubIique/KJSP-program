import { Button, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import HistoryIcon from '@material-ui/icons/History';
import { i18n } from 'i18n';
import auditLogSelectors from 'modules/auditLog/auditLogSelectors';
import attendanceSelectors from 'modules/attendance/attendanceSelectors';
import destroyActions from 'modules/attendance/destroy/attendanceDestroyActions';
import destroySelectors from 'modules/attendance/destroy/attendanceDestroySelectors';
import actions from 'modules/attendance/list/attendanceListActions';
import selectors from 'modules/attendance/list/attendanceListSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'view/shared/modals/ConfirmModal';
import ToolbarWrapper from 'view/shared/styles/ToolbarWrapper';

class AttendanceToolbar extends Component {
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
            to="/attendance/new"
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
            to="/attendance/importer"
            startIcon={<CloudUploadIcon />}
          >
            {i18n('common.import')}
          </Button>
        )}

        {this.renderDestroyButton()}

        {this.props.hasPermissionToAuditLogs && (
          <Button
            component={Link}
            to="/audit-logs?entityNames=attendance"
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
    hasPermissionToEdit: attendanceSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: attendanceSelectors.selectPermissionToDestroy(
      state,
    ),
    hasPermissionToCreate: attendanceSelectors.selectPermissionToCreate(
      state,
    ),
    hasPermissionToImport: attendanceSelectors.selectPermissionToImport(
      state,
    ),
  };
}

export default connect(select)(AttendanceToolbar);
