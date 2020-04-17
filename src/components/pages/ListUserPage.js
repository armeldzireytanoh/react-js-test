import React from 'react';
import { connect } from 'react-redux';
import ListTest from '../ListTest';

const ListUserPage = (props) => { // Stateless Component

    console.log("liste :"+props.list);

        return (
            <div>
                <h1>List Page</h1>
                <ListTest elementList={props.list}/>
            </div>
        );
};
const mapStateToProps = (state) => ({ list: state.list});  

export default connect(mapStateToProps) (ListUserPage);