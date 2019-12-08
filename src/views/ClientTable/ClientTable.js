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
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import CustomInput from '../../component/CustomInput/CustomInput.jsx';
import { fetchAllCustomers } from '../../actions/customer';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";

const state = {
    customers: [
        // ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738', 'id', '712'],
        // ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789', 'id', '876'],
        // ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142', 'id', '432'],
        // ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735', 'id', '323'],
        // ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542', 'id', '123'],
        // ['Mason Porter', 'Chile', 'Gloucester', '$78,615', 'id', '1']
    ]
};




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
    useEffect(() => {
        props.getAllCustomers()
    }, []);
    const customers = useSelector(state => state.customers.customerList);
    console.log(customers)
    // const dispatch = useDispatch();
    const [offset, setOffset] = useState(0);
    const theme = createMuiTheme();
    const handleClick = (newoffset) => {
        setOffset(newoffset)
    }
    const { classes } = props;
    const onEditClick = rowData => {
        alert(JSON.stringify(rowData));
    };
    const onAddClick = rowData => {
    };
    const configActionColumns = [
        { Icon: Add, Tooltip: 'Add', Color: 'success', Callback: onAddClick },
        { Icon: Edit, Tooltip: 'Edit', Color: 'primary', Callback: onEditClick }
    ];
    return (
        <Grid container>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Simple Table</h4>
                        <p className={classes.cardCategoryWhite}>
                            Here is a subtitle for this table
            </p>
                        <div className={classes.searchWrapper}>
                            <CustomInput
                                formControlProps={{
                                    className: classes.margin + ' ' + classes.search
                                }}
                                inputProps={{
                                    placeholder: 'Search',
                                    inputProps: {
                                        'aria-label': 'Search'
                                    }
                                }}
                            />
                            <Button color="white" aria-label="edit" justIcon round>
                                <Search />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Table
                            actionColumns={configActionColumns}
                            tableHeaderColor="primary"
                            tableHead={['Name', 'City', 'email', 'phone', 'address', 'postcode']}
                            tableData={customers}
                        />
                    </CardBody>
                    <MuiThemeProvider theme={theme}>
                        <CssBaseline />
                        <Pagination
                            limit={10}
                            offset={offset}
                            total={100}
                            onClick={(e, offset) => handleClick(offset)}
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
    customers: state.customerList
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TableList));