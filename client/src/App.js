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

const customers = [
  {
      'id' : 1,
      'image' : 'https://placeimg.com/64/64/1',
      'name': '이름01',
      'birthday' : '821111',
      'gender' : '남자',
      'job' : '대학생1'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name': '이름02',
    'birthday' : '821112',
    'gender' : '남자',
    'job' : '대학생2'
  },
  {
    'id' : 3,
    'name': '이름03',
    'image' : 'https://placeimg.com/64/64/3',
    'birthday' : '821113',
    'gender' : '남자',
    'job' : '대학생3'
  },
  {
    'id' : 4,
    'name': '이름04',
    'image' : 'https://placeimg.com/64/64/4',
    'birthday' : '821114',
    'gender' : '남자',
    'job' : '대학생4'
  }
];


function App(props) {
  const {classes} = props;
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
          {customers.map(c=> { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);})}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(App);
