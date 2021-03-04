import React, {Component} from 'react';
import Customer from './components/Customer.js';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080,
    backgroundColor:'#000',
    color: '#fff'
  },
  th: {
    color: '#fff',
  }
});

class App extends Component {
  state = {
    customers:""
  }
  componentDidMount(){
    this.callApi()
    .then(res=> this.setState({customers: res}))
    .catch(err=> console.log(err));
  }
  callApi = async() => {
    const response = await fetch('/api/customers',{headers:{'Content-Type': 'application/json','Accept': 'application/json'}});
    const body = await response.json();
    return body;
  }
  render(){
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.th}>
                번호
              </TableCell>
              <TableCell className={classes.th}>
                이미지
              </TableCell>
              <TableCell className={classes.th}>
                이름
              </TableCell>
              <TableCell className={classes.th}>
                생년월일
              </TableCell>
              <TableCell className={classes.th}>
                성별
              </TableCell>
              <TableCell className={classes.th}>
                직업
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c=> {
              return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);
            }) : "fail"}
          </TableBody>
        </Table>
      </Paper>
    );
  }

};

export default withStyles(styles)(App);
