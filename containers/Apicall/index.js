import React from 'react';
import Button from '@material-ui/core/Button';
import TypoGraphy from '@material-ui/core/Typography';
import {requestApiData, recieveApiData} from './action';
import {makeSelectApi} from './selector';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import reducer from './reducer';

const person=(x,i)=>(
    <div key={x.userid}>
    {x.userid}
    </div>
)
export class ApiCall extends React.PureComponent{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.getData();
    }
    render(){
        //const {results=[]}=this.props.data.users;
        return(
        <div>
            <TypoGraphy  variant="headline" color="primary" gutterBottom>
            API call
             </TypoGraphy>
           
        </div>
    );
  }}
//   const mapStateToProps=createStructuredSelector({
//       data:makeSelectApi()
//   });

  const mapDispatchToProps=(dispatch)=>{
      return{
      getData: ()=>dispatch(requestApiData)}};
const withReducer=injectReducer({key:'api',reducer});
const withConnect=connect(null,mapDispatchToProps);
//const withSaga=injectSaga({key:'api',saga});
  export default compose(withConnect,withReducer)(ApiCall);