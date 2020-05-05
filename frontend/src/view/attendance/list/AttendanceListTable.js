import { Box } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import { i18n } from 'i18n';
import actions from 'modules/attendance/list/attendanceListActions';
import destroyActions from 'modules/attendance/destroy/attendanceDestroyActions';
import selectors from 'modules/attendance/list/attendanceListSelectors';
import destroySelectors from 'modules/attendance/destroy/attendanceDestroySelectors';
import model from 'modules/attendance/attendanceModel';
import attendanceSelectors from 'modules/attendance/attendanceSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'view/shared/modals/ConfirmModal';
import Pagination from 'view/shared/table/Pagination';
import Spinner from 'view/shared/Spinner';
import TableCellCustom from 'view/shared/table/TableCellCustom';
import SubdivisionListItem from 'view/subdivision/list/SubdivisionListItem';
import WeekListItem from 'view/week/list/WeekListItem';
import WorkerRegistrationListItem from 'view/workerRegistration/list/WorkerRegistrationListItem';

const { fields } = model;

class AttendanceListTable extends Component {
  state = {
    recordIdToDestroy: null,
  };

  doOpenDestroyConfirmModal = (id) => {
    this.setState({
      recordIdToDestroy: id,
    });
  };

  doCloseDestroyConfirmModal = () => {
    this.setState({ recordIdToDestroy: null });
  };

  doChangeSort = (columnKey) => {
    const { dispatch, sorter } = this.props;

    const order =
      sorter.columnKey === columnKey &&
      sorter.order === 'asc'
        ? 'desc'
        : 'asc';

    dispatch(
      actions.doChangeSort({
        columnKey,
        order,
      }),
    );
  };

  doChangePagination = (pagination) => {
    const { dispatch } = this.props;
    dispatch(actions.doChangePagination(pagination));
  };

  doDestroy = (id) => {
    this.doCloseDestroyConfirmModal();
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  doToggleAllSelected = () => {
    const { dispatch } = this.props;
    dispatch(actions.doToggleAllSelected());
  };

  doToggleOneSelected = (id) => {
    const { dispatch } = this.props;
    dispatch(actions.doToggleOneSelected(id));
  };

  render() {
    const {
      pagination,
      rows,
      loading,
      isAllSelected,
      selectedKeys,
      sorter,
      hasRows,
    } = this.props;

    return (
      <React.Fragment>
        <Box
          style={{
            display: 'block',
            width: '100%',
            overflowX: 'auto',
          }}
        >
          <Table
            style={{
              borderRadius: '5px',
              border: '1px solid rgb(224, 224, 224)',
              borderCollapse: 'initial',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCellCustom padding="checkbox">
                  {hasRows && (
                    <Checkbox
                      checked={!!isAllSelected}
                      onChange={() =>
                        this.doToggleAllSelected()
                      }
                    />
                  )}
                </TableCellCustom>
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                  <TableCellCustom
                    label={fields.subDivision.label}
                  />
                  <TableCellCustom
                    label={fields.week.label}
                  />
                  <TableCellCustom
                    label={fields.workerID.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.totalWorkingDay.name}
                    label={fields.totalWorkingDay.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.totalWorkingHours.name}
                    label={fields.totalWorkingHours.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.totalRestDay.name}
                    label={fields.totalRestDay.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.totalPublicHoliday.name}
                    label={fields.totalPublicHoliday.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.totalAbsent.name}
                    label={fields.totalAbsent.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.totalSickLeave.name}
                    label={fields.totalSickLeave.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.totalOnLeave.name}
                    label={fields.totalOnLeave.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.totalOvertimeHour.name}
                    label={fields.totalOvertimeHour.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.month.name}
                    label={fields.month.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.year.name}
                    label={fields.year.label}
                  />
                <TableCellCustom size="md" />
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && (
                <TableRow>
                  <TableCell colSpan={100}>
                    <Spinner />
                  </TableCell>
                </TableRow>
              )}
              {!loading && !hasRows && (
                <TableRow>
                  <TableCell colSpan={100}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {i18n('table.noData')}
                    </div>
                  </TableCell>
                </TableRow>
              )}
              {!loading &&
                rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedKeys.includes(
                          row.id,
                        )}
                        onChange={() =>
                          this.doToggleOneSelected(row.id)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      {fields.id.forView(
                        row[fields.id.name],
                      )}
                    </TableCell>
                    <TableCell>
                      <SubdivisionListItem value={row[fields.subDivision.name]} />
                    </TableCell>
                    <TableCell>
                      <WeekListItem value={row[fields.week.name]} />
                    </TableCell>
                    <TableCell>
                      <WorkerRegistrationListItem value={row[fields.workerID.name]} />
                    </TableCell>
                    <TableCell>
                      {fields.totalWorkingDay.forView(
                        row[fields.totalWorkingDay.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.totalWorkingHours.forView(
                        row[fields.totalWorkingHours.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.totalRestDay.forView(
                        row[fields.totalRestDay.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.totalPublicHoliday.forView(
                        row[fields.totalPublicHoliday.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.totalAbsent.forView(
                        row[fields.totalAbsent.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.totalSickLeave.forView(
                        row[fields.totalSickLeave.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.totalOnLeave.forView(
                        row[fields.totalOnLeave.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.totalOvertimeHour.forView(
                        row[fields.totalOvertimeHour.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.month.forView(
                        row[fields.month.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.year.forView(
                        row[fields.year.name],
                      )}
                    </TableCell>
                    <TableCell>
                      <Box display="flex">
                        <Tooltip
                          title={i18n('common.view')}
                        >
                          <IconButton
                            component={Link}
                            color="primary"
                            to={`/attendance/${row.id}`}
                          >
                            <SearchIcon />
                          </IconButton>
                        </Tooltip>
                        {this.props.hasPermissionToEdit && (
                          <Tooltip
                            title={i18n('common.edit')}
                          >
                            <IconButton
                              color="primary"
                              component={Link}
                              to={`/attendance/${row.id}/edit`}
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                        {this.props
                          .hasPermissionToDestroy && (
                          <Tooltip
                            title={i18n('common.destroy')}
                          >
                            <IconButton
                              color="primary"
                              onClick={() =>
                                this.doOpenDestroyConfirmModal(
                                  row.id,
                                )
                              }
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>

        <Pagination
          onChange={this.doChangePagination}
          pagination={pagination}
        />

        {this.state.recordIdToDestroy && (
          <ConfirmModal
            title={i18n('common.areYouSure')}
            onConfirm={() =>
              this.doDestroy(this.state.recordIdToDestroy)
            }
            onClose={() =>
              this.doCloseDestroyConfirmModal()
            }
            okText={i18n('common.yes')}
            cancelText={i18n('common.no')}
          />
        )}
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasRows: selectors.selectHasRows(state),
    sorter: selectors.selectSorter(state),
    isAllSelected: selectors.selectIsAllSelected(state),
    hasPermissionToEdit: attendanceSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: attendanceSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(AttendanceListTable);
