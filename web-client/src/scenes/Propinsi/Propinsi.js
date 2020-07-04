import React, { Component } from "react";
import Page from "../../components/Page";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { findAll } from "../../actions/Propinsi";
import { Add as AddIcon, Refresh as ReloadIcon } from "@material-ui/icons";
import { Button, CircularProgress } from "@material-ui/core";
import "./styles.js";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import Backdrop from "@material-ui/core/Backdrop";

class Propinsi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      total: 0,
      
      error: null,
    };
  }

  componentDidMount() {
    this.onReload();
  }

  onAdd = () => {
    this.props.history.push(`/propinsi`);
  };

  onReload = () => {
    this.reload();
  };

  reload() {
    this.props.findAll(this.state.table);
  }

  componentDidUpdate(prevProps, prevState) {
    const { deleteData, deleteError, data, error } = this.props;
    const { table } = this.state;

    if (prevProps.data !== data) {
      this.setState({ data: data.list, total: data.total });
    } else if (
      prevState.table !== table ||
      prevProps.deleteData !== deleteData
    ) {
      this.reload();
    } else if (deleteError && prevProps.deleteError != deleteError) {
      this.setState({ error: deleteError });
    } else if (error && prevProps.error != error) {
      this.setState({ error: error });
    }
  }

  onChangePage = (currentPage) => {
    const { table } = this.state;
    this.setState({ table: { ...table, page: currentPage } });
  };

  onRowClick = (rowData) => {
    this.props.history.push(`/propinsi/${rowData[0]}`);
  };

  onRowsDeleted = (rowsDeleted) => {
    const { list } = this.props.data;
    const e = list[rowsDeleted.data[0].index];
    this.props.deleteById(e.id);
    console.log(e.id);
    return false;
  };

  onChangeRowsPerPage = (numberOfRows) => {
    const { table } = this.state;
    this.setState({ table: { ...table, size: numberOfRows } });
  };

  onSearchChange = (searchText) => {
    const { table } = this.state;
    this.setState({
      table: {
        ...table,
        search: { name: searchText, description: searchText },
      },
    });
  };

  onColumnSortChange = (changedColumn, direction) => {
    const { table } = this.state;
    const sort = direction === "descending" ? "desc" : "asc";
    this.setState({ table: { ...table, sort } });
  };

  render() {
    const { classes, loading } = this.props;
    const { data, total, table, error } = this.state;

    const columns = [
      {
        name: "Id_Propinsi",
        label: "ID",
        options: {
          sortDirection: table.sort,
        },
      },
      {
        name: "Nama_Propinsi",
        label: "Nama Propinsi",
        options: {
          sort: false,
        },
      },
    ];

    const options = {
      serverSide: true,
      page: table.page,
      count: total,
      rowsPerPage: table.size,
      rowsPerPageOptions: [2, 5, 10, 15],
      searchText: table.search.name,
      searchText: table.search.description,
      selectableRows: "single",
      onRowsDelete: this.onRowsDeleted,
      onRowClick: this.onRowClick,
      onChangePage: this.onChangePage,
      onChangeRowsPerPage: this.onChangeRowsPerPage,
      onSearchChange: this.onSearchChange,
      onColumnSortChange: this.onColumnSortChange,
      textLabels: {
        body: {
          noMatch: loading ? null : "Sorry data not found.",
        },
      },
    };

    return (
      <Page error={error}>
        <div className={classes.buttonContainer + " animated bounce"}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onAdd}
            startIcon={<AddIcon />}
          >
            New Unit
          </Button>
        </div>
        <div className={classes.formTable + " animated slideInDown"}>
          <MUIDataTable
            title={"List Propinsi"}
            data={!loading ? data : []}
            columns={columns}
            options={options}
          />
        </div>

        <div className={classes.reloads}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onReload}
            startIcon={<ReloadIcon />}
          >
            Reload
          </Button>
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.findPropinsi.data,
  loading: state.findPropinsi.loading,
  error: state.findPropinsi.error,
});

const mapDispatchToProps = {
  findAll,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Propinsi));
