import React from 'react';
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
  td: {
    color: '#fff',
  }
});
// function Customer(props){
//     const {classes} = props;
//     return (
//         <TableRow>
//             <TableCell className={classes.td}>
//                 {props.id}
//             </TableCell>
//             <TableCell className={classes.td}>
//                 <img src={props.image} alt="profile" />
//             </TableCell>
//             <TableCell className={classes.td}>
//                 {props.name}
//             </TableCell>
//             <TableCell className={classes.td}>
//                 {props.birthday}
//             </TableCell>
//             <TableCell className={classes.td}>
//                 {props.gender}
//             </TableCell>
//             <TableCell className={classes.td}>
//                 {props.job}
//             </TableCell>
//         </TableRow>
//     )
// };

class Customer extends React.Component{
    render(){
        const {classes} = this.props;
        return (
            <TableRow>
                <TableCell className={classes.td}>
                    {this.props.id}
                </TableCell>
                <TableCell className={classes.td}>
                    <img src={this.props.image} alt="profile" />
                </TableCell>
                <TableCell className={classes.td}>
                    {this.props.name}
                </TableCell>
                <TableCell className={classes.td}>
                    {this.props.birthday}
                </TableCell>
                <TableCell className={classes.td}>
                    {this.props.gender}
                </TableCell>
                <TableCell className={classes.td}>
                    {this.props.job}
                </TableCell>
            </TableRow>
        )
    }
};

export default withStyles(styles)(Customer);