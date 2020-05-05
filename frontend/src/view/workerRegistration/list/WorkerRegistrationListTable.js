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
import actions from 'modules/workerRegistration/list/workerRegistrationListActions';
import destroyActions from 'modules/workerRegistration/destroy/workerRegistrationDestroyActions';
import selectors from 'modules/workerRegistration/list/workerRegistrationListSelectors';
import destroySelectors from 'modules/workerRegistration/destroy/workerRegistrationDestroySelectors';
import model from 'modules/workerRegistration/workerRegistrationModel';
import workerRegistrationSelectors from 'modules/workerRegistration/workerRegistrationSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'view/shared/modals/ConfirmModal';
import Pagination from 'view/shared/table/Pagination';
import Spinner from 'view/shared/Spinner';
import TableCellCustom from 'view/shared/table/TableCellCustom';
import DesignationListItem from 'view/designation/list/DesignationListItem';
import SubdivisionListItem from 'view/subdivision/list/SubdivisionListItem';

const { fields } = model;

class WorkerRegistrationListTable extends Component {
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
                    name={fields.workerID.name}
                    label={fields.workerID.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.workerName.name}
                    label={fields.workerName.label}
                  />
                  <TableCellCustom
                    label={fields.designation.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.passportICNo.name}
                    label={fields.passportICNo.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.passportExpireddate.name}
                    label={fields.passportExpireddate.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.dateofEmployment.name}
                    label={fields.dateofEmployment.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.superiorName.name}
                    label={fields.superiorName.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.dateofBirth.name}
                    label={fields.dateofBirth.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.age.name}
                    label={fields.age.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.gender.name}
                    label={fields.gender.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.placeofBirth.name}
                    label={fields.placeofBirth.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.nationality.name}
                    label={fields.nationality.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.religion.name}
                    label={fields.religion.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.race.name}
                    label={fields.race.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.maritalStatus.name}
                    label={fields.maritalStatus.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.spouseName.name}
                    label={fields.spouseName.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.noofchild.name}
                    label={fields.noofchild.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.bank.name}
                    label={fields.bank.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.bankAccountNo.name}
                    label={fields.bankAccountNo.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.socsoNo.name}
                    label={fields.socsoNo.label}
                  />
                  <TableCellCustom
                    label={fields.subdivision.label}
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
                      {fields.workerID.forView(
                        row[fields.workerID.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.workerName.forView(
                        row[fields.workerName.name],
                      )}
                    </TableCell>
                    <TableCell>
                      <DesignationListItem value={row[fields.designation.name]} />
                    </TableCell>
                    <TableCell>
                      {fields.passportICNo.forView(
                        row[fields.passportICNo.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.passportExpireddate.forView(
                        row[fields.passportExpireddate.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.dateofEmployment.forView(
                        row[fields.dateofEmployment.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.superiorName.forView(
                        row[fields.superiorName.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.dateofBirth.forView(
                        row[fields.dateofBirth.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.age.forView(
                        row[fields.age.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.gender.forView(
                        row[fields.gender.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.placeofBirth.forView(
                        row[fields.placeofBirth.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.nationality.forView(
                        row[fields.nationality.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.religion.forView(
                        row[fields.religion.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.race.forView(
                        row[fields.race.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.maritalStatus.forView(
                        row[fields.maritalStatus.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.spouseName.forView(
                        row[fields.spouseName.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.noofchild.forView(
                        row[fields.noofchild.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.bank.forView(
                        row[fields.bank.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.bankAccountNo.forView(
                        row[fields.bankAccountNo.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.socsoNo.forView(
                        row[fields.socsoNo.name],
                      )}
                    </TableCell>
                    <TableCell>
                      <SubdivisionListItem value={row[fields.subdivision.name]} />
                    </TableCell>
                    <TableCell>
                      <Box display="flex">
                        <Tooltip
                          title={i18n('common.view')}
                        >
                          <IconButton
                            component={Link}
                            color="primary"
                            to={`/worker-registration/${row.id}`}
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
                              to={`/worker-registration/${row.id}/edit`}
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
    hasPermissionToEdit: workerRegistrationSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: workerRegistrationSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(WorkerRegistrationListTable);
