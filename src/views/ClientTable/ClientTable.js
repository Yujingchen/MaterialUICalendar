import React from 'react';
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

const styles = {
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
    }
};

function TableList(props) {
    const { classes } = props;
    const onEditClick = rowData => {
        alert(JSON.stringify(rowData));
    };
    const onAddClick = rowData => {
        alert(JSON.stringify(rowData));
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
                    </CardHeader>
                    <CardBody>
                        <Table
                            actionColumns={configActionColumns}
                            tableHeaderColor="primary"
                            tableHead={['Name', 'Country', 'City', 'Salary']}
                            tableData={[
                                ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                                ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                                ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                                ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                                ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                                ['Mason Porter', 'Chile', 'Gloucester', '$78,615']
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </Grid>
    );
}

export default withStyles(styles)(TableList);
