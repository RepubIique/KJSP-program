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
import actions from 'modules/ffb/list/ffbListActions';
import destroyActions from 'modules/ffb/destroy/ffbDestroyActions';
import selectors from 'modules/ffb/list/ffbListSelectors';
import destroySelectors from 'modules/ffb/destroy/ffbDestroySelectors';
import model from 'modules/ffb/ffbModel';
import ffbSelectors from 'modules/ffb/ffbSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'view/shared/modals/ConfirmModal';
import Pagination from 'view/shared/table/Pagination';
import Spinner from 'view/shared/Spinner';
import TableCellCustom from 'view/shared/table/TableCellCustom';
import EstateListItem from 'view/estate/list/EstateListItem';
import SubdivisionListItem from 'view/subdivision/list/SubdivisionListItem';
import MillListItem from 'view/mill/list/MillListItem';
import WorkcodeListItem from 'view/workcode/list/WorkcodeListItem';

const { fields } = model;

class FfbListTable extends Component {
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
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.date.name}
                    label={fields.date.label}
                  />
                  <TableCellCustom
                    label={fields.estate.label}
                  />
                  <TableCellCustom
                    label={fields.subdivision.label}
                  />
                  <TableCellCustom
                    label={fields.mill.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.fFBTonnageMT.name}
                    label={fields.fFBTonnageMT.label}
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
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.company.name}
                    label={fields.company.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.millticketNo.name}
                    label={fields.millticketNo.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.sealNo.name}
                    label={fields.sealNo.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.deliverynoteno.name}
                    label={fields.deliverynoteno.label}
                  />
                  <TableCellCustom
                    onSort={this.doChangeSort}
                    hasRows={hasRows}
                    sorter={sorter}
                    name={fields.lorryNo.name}
                    label={fields.lorryNo.label}
                  />
                  <TableCellCustom
                    label={fields.block.label}
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
                      {fields.date.forView(
                        row[fields.date.name],
                      )}
                    </TableCell>
                    <TableCell>
                      <EstateListItem value={row[fields.estate.name]} />
                    </TableCell>
                    <TableCell>
                      <SubdivisionListItem value={row[fields.subdivision.name]} />
                    </TableCell>
                    <TableCell>
                      <MillListItem value={row[fields.mill.name]} />
                    </TableCell>
                    <TableCell>
                      {fields.fFBTonnageMT.forView(
                        row[fields.fFBTonnageMT.name],
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
                      {fields.company.forView(
                        row[fields.company.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.millticketNo.forView(
                        row[fields.millticketNo.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.sealNo.forView(
                        row[fields.sealNo.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.deliverynoteno.forView(
                        row[fields.deliverynoteno.name],
                      )}
                    </TableCell>
                    <TableCell>
                      {fields.lorryNo.forView(
                        row[fields.lorryNo.name],
                      )}
                    </TableCell>
                    <TableCell>
                      <WorkcodeListItem value={row[fields.block.name]} />
                    </TableCell>
                    <TableCell>
                      <Box display="flex">
                        <Tooltip
                          title={i18n('common.view')}
                        >
                          <IconButton
                            component={Link}
                            color="primary"
                            to={`/ffb/${row.id}`}
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
                              to={`/ffb/${row.id}/edit`}
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
    hasPermissionToEdit: ffbSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: ffbSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(FfbListTable);
