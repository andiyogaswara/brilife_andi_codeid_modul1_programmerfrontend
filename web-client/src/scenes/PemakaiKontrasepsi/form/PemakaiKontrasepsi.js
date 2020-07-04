import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Page from "../../../components/Page";
import Styles from "./styles";
import {
  findById,
  addPemakaiKontrasepsi,
} from "../../../actions/PemakaiKontrasepsi";
import { findAll as findPropinsi } from "../../../actions/Propinsi";
import { findAll as findKontrasepsi } from "../../../actions/Kontrasepsi";
import {
  Button,
  TextField,
  CircularProgress,
  Snackbar,
  Card,
  CardContent,
} from "@material-ui/core";
import { ChevronLeft, SaveAlt } from "@material-ui/icons";
import { connect } from "react-redux";
import { Alert, Autocomplete } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";

class PemakaiKontrasepsi extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      form: {
        id: match.params.id,
        propinsi: null,
        kontrasepsi: null,
        pemakaiKontrasepsi: null,
      },
      propinsiOption: [],
      kontrasepsiOption: [],
      error: null,
    };
  }

  componentDidMount() {
    const { form } = this.state;
    if (form.id) {
      this.props.findById(form.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      data,
      error,
      saveError,
      saveData,
      history,
      propinsiData,
      unitsData,
    } = this.props;
    console.log(unitsData);

    if (prevProps.propinsiData !== propinsiData) {
      this.setState({ propinsiOption: propinsiData.list });
    }
    if (prevProps.unitsData !== unitsData) {
      this.setState({ unitOption: unitsData.list });
    } else if (prevProps.data !== data) {
      this.setState({ form: data });
    } else if (prevProps.saveError !== saveError) {
      this.setState({ error: saveError });
    } else if (prevProps.error !== error) {
      this.setState({ error: error });
    } else if (saveData && prevProps.saveData !== saveData) {
      history.goBack();
    }
  }

  onChange = (event) => {
    const { name, value } = event.target;
    const { form } = this.state;

    this.setState({
      form: { ...form, [name]: value },
    });
  };

  onPropinsiChange = (event, value) => {
    const { form } = this.state;
    this.setState({ form: { ...form, propinsi: value } });
  };

  onKontrasepsiChange = (event, value) => {
    const { form } = this.state;
    this.setState({ form: { ...form, kontrasepsi: value } });
  };

  onPropinsiOpen = (event) => {
    this.props.findPropinsi();
  };

  onKontrasepsiOpen = (event) => {
    this.props.findKontrasepsi();
  };

  onPropinsiTextChange = (event) => {
    const { value } = event.target;

    if (value) {
      this.props.findPropinsi({ search: { name: value } });
    }
  };

  onKontrasepsiTextChange = (event) => {
    const { value } = event.target;

    if (value) {
      this.props.findKontrasepsi({ search: { name: value } });
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.saveStock(this.state.form);
    console.log(this.state.form);
  };

  render() {
    const {
      classes,
      loading,
      saveError,
      propinsiLoading,
      kontrasepsiLoading,
    } = this.props;
    const { form, error, propinsiOption, kontrasepsiOption } = this.state;
    const errorData = saveError?.data || {};

    return (
      <Page error={error}>
        {!loading ? (
          <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
            <Card className={classes.root}>
              <CardContent>
                {form.id && (
                  <div className={classes.formField}>
                    <TextField
                      id="id"
                      name="id"
                      label="ID"
                      value={form.id}
                      variant="outlined"
                      InputProps={{ readOnly: true }}
                    />
                  </div>
                )}
                <div className={classes.formField}>
                  <Autocomplete
                    style={{ width: 222 }}
                    options={propinsiOption}
                    autoHighlight
                    value={form.propinsi}
                    onChange={this.onPropinsiChange}
                    getOptionSelected={(option, value) =>
                      option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    loading={propinsiLoading}
                    onOpen={this.onPropinsiOpen}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Propinsi"
                        variant="outlined"
                        onChange={this.onPropinsiTextChange}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                </div>

                <div className={classes.formField}>
                  <TextField
                    error={errorData.pemakaiKontrasepsi}
                    id="Id_List"
                    name="list_pemakai_kontrasepsi"
                    label="Pemakai Kontrasepsi"
                    value={form.pemakaiKontrasepsi}
                    helperText={
                      errorData.pemakaiKontrasepsi
                        ? errorData.pemakaiKontrasepsi[0]
                        : null
                    }
                    variant="outlined"
                    onChange={this.onChange}
                  />

                  <Autocomplete
                    style={{
                      width: 150,
                      display: "inline-block",
                      marginLeft: "5%",
                    }}
                    options={kontrasepsiOption}
                    autoHighlight
                    value={form.kontrasepsi}
                    onChange={this.onKontrasepsiChange}
                    getOptionSelected={(option, value) =>
                      option.id === value.id
                    }
                    getOptionLabel={(option) => option.name}
                    loading={kontrasepsiLoading}
                    onOpen={this.onKontrasepsiOpen}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Kontrasepsi"
                        variant="outlined"
                        onChange={this.onKontrasepsiTextChange}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                </div>
                <div className={classes.formButton}>
                  <Button
                    href="/pemakaiKontrasepsi"
                    variant={"contained"}
                    color="secondary"
                    startIcon={<ChevronLeft />}
                    disabled={loading}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    style={{ marginLeft: "10%" }}
                    variant={"contained"}
                    color={"primary"}
                    startIcon={<SaveAlt />}
                    disabled={loading}
                  >
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        ) : (
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        <Snackbar
          open={this.state.error}
          autoHideDuration={2000}
          onClose={() => this.setState({ error: false })}
        >
          <Alert
            onClose={() => this.setState({ error: false })}
            elevation={6}
            variant="filled"
            severity="error"
          >
            {error?.message}
          </Alert>
        </Snackbar>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.findPemakaiKontrasepsiById.data,
  loading:
    state.findPemakaiKontrasepsiById.loading ||
    state.addPemakaiKontrasepsi.loading,
  error: state.findPemakaiKontrasepsiById.error,
  saveData: state.addPemakaiKontrasepsi.data,
  saveError: state.addPemakaiKontrasepsi.error,
  propinsiData: state.findPropinsi.data,
  propinsiLoading: state.findPropinsi.loading,
  propinsiError: state.findPropinsi.error,
  unitsData: state.findKontrasepsi.data,
  unitsLoading: state.findKontrasepsi.loading,
  unitsError: state.findKontrasepsi.error,
});

const mapDispatchToProps = {
  findById,
  findPropinsi,
  findKontrasepsi,
  addPemakaiKontrasepsi,
};

export default withStyles(Styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(PemakaiKontrasepsi)
);
