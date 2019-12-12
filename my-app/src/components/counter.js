import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../state/actionCreators';

export function Counter({ count, increase, decrease }) {
    return (
        <div>
            The count is {count}
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.count,
    };
}

export default connect(
    mapStateToProps,
    { increase, decrease },
)(Counter);