import React, { useState, useEffect } from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// core components
import GridItem from '../../component/Grid/GridItem.jsx';
import Table from '../../component/Table/Table.jsx';
import Card from '../../component/Card/Card';
import CardHeader from '../../component/Card/CardHeader';
import CardBody from '../../component/Card/CardBody';
import Edit from '@material-ui/icons/Edit';
import Add from '@material-ui/icons/Add';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import CustomInput from '../../component/CustomInput/CustomInput.jsx';
import { fetchAllCustomers } from '../../actions/customerAction';
import { connect } from 'react-redux'
const styles = theme => ({
    cardCategoryWhite: {
        '&,& a,& a:hover,& a:focus': {
            color: 'rgba(255,255,255,.62)',
            margin: '0',
            fontSize: '14px',
            marginTop: '0',
            marginBottom: '0'
        },
        '& a,& a:hover,& a:focus': {
            color: '#FFFFFF'
        }
    },

    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: '300',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: '3px',
        textDecoration: 'none',
        '& small': {
            color: '#777',
            fontSize: '65%',
            fontWeight: '400',
            lineHeight: '1'
        }
    },
    searchWrapper: {
        [theme.breakpoints.down("sm")]: {
            width: "-webkit-fill-available",
            margin: "10px 15px 0"
        },
        display: "inline-block"
    },
    margin: {
        zIndex: "4",
        margin: "0"
    },
    search: {
        "& > div": {
            marginTop: "0"
        },
        [theme.breakpoints.down("sm")]: {
            margin: "10px 15px !important",
            float: "none !important",
            paddingTop: "1px",
            paddingBottom: "1px",
            padding: "0!important",
            width: "60%",
            marginTop: "40px",
            "& input": {
                color: "#FFFFFF"
            }
        }
    },
})

function TableList(props) {
    const [query, setQuery] = useState("");
    const [offset, setOffset] = useState(0);
    const [sortName, setSortName] = useState(false)
    const [sortCity, setSortCity] = useState(false)
    const [sortEmail, setSortEmail] = useState(false)
    const [sortPhone, setSortPhone] = useState(false)
    const [sortAddress, setSortAddress] = useState(false)
    const [sortPostCode, setSortPostCode] = useState(false)
    let tableData = props.customers
    useEffect(() => {
        props.getAllCustomers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])
    const theme = createMuiTheme({
        typography: {
            useNextVariants: true,
        },
    });
    const { classes } = props;
    const sortDataByName = (data) => {
        return (data.sort((a, b) => a[0] > b[0] ? 0 : -1))
    }
    const sortDataByCity = (data) => {
        return (data.sort((a, b) => a[1] > b[1] ? 0 : -1))
    }
    const sortDataByEmail = (data) => {
        return (data.sort((a, b) => a[2] > b[2] ? 0 : -1))
    }
    const sortDataByPhone = (data) => {
        return (data.sort((a, b) => a[3] > b[3] ? 0 : -1))
    }
    const sortDataByAddress = (data) => {
        return (data.sort((a, b) => a[4] > b[4] ? 0 : -1))
    }
    const sortDataByPostcode = (data) => {
        return (data.sort((a, b) => a[5] > b[5] ? 0 : -1))
    }
    const handleSortClick = (prop) => {
        if (prop === null) {
        }
        else if (prop === "Name") {

            setSortName(!sortName)
            return tableData = sortDataByName(tableData)
        }
        else if (prop === "City") {
            setSortCity(!sortCity)
            return tableData = sortDataByCity(tableData)
        }
        else if (prop === "Email") {
            setSortEmail(!sortEmail)
            return tableData = sortDataByEmail(tableData)
        }
        else if (prop === "Phone") {
            setSortPhone(!sortPhone)
            return tableData = sortDataByPhone(tableData)
        }
        else if (prop === "Address") {
            setSortAddress(!sortAddress)
            return tableData = sortDataByAddress(tableData)
        }
        else if (prop === "Postcode") {
            setSortPostCode(!sortPostCode)
            return tableData = sortDataByPostcode(tableData)
        }
    }

    const handlePaginationClick = (newoffset) => {
        setOffset(newoffset)
    }
    const onEditClick = () => {
        props.history.push("./table/edit-customer");
    };
    const onAddClick = () => {
        props.history.push("./table/add-customer");
    };
    const searchInputChange = (e) => {
        setQuery(e.target.value)
    }
    const configActionColumns = [
        { Icon: Add, Tooltip: 'Add', Color: 'success', Callback: onAddClick },
        { Icon: Edit, Tooltip: 'Edit', Color: 'primary', Callback: onEditClick }
    ];
    return (
        <Grid container>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <h3 className={classes.cardTitleWhite}>Client</h3>

                            <div className={classes.searchWrapper}>
                                <CustomInput
                                    formControlProps={{
                                        className: classes.margin + ' ' + classes.search
                                    }}
                                    value={query}
                                    inputChange={searchInputChange}
                                    inputProps={{
                                        placeholder: 'Search by name',
                                        inputProps: {
                                            'aria-label': 'Search by name'
                                        }
                                    }}
                                />
                            </div>
                        </Grid>
                    </CardHeader>
                    <CardBody>
                        <Table
                            actionColumns={configActionColumns}
                            tableHeaderColor="primary"
                            tableHead={['Name', 'City', 'Email', 'Phone', 'Address', 'Postcode']}
                            tableData={tableData.filter((item) => item[0].toLowerCase().indexOf(query.toLowerCase()) !== -1)}
                            onSortClick={handleSortClick}
                        />
                    </CardBody>
                    <MuiThemeProvider theme={theme}>
                        <CssBaseline />
                        <Pagination
                            limit={10}
                            offset={offset}
                            total={100}
                            onClick={(e, offset) => handlePaginationClick(offset)}
                        />
                    </MuiThemeProvider>
                </Card>
            </GridItem>
        </Grid>
    );
}


const mapDispatchToProps = dispatch => ({
    getAllCustomers: () => {
        dispatch(fetchAllCustomers())
    }
});


const mapStateToProps = state => ({
    customers: state.customers.customers
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TableList));