import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {dec, inc, rnd} from '../../redux/couter-reducer';

import './counter.css';

const Counter = ({count, inc, dec, rnd}) => {
    return (
        <div className="counter">
            <h1>{count}</h1>

            <button
                onClick={dec}
            >
                DEC
            </button>

            <button
                onClick={inc}
            >
                INC
            </button>

            <button
                onClick={rnd}
            >
                RND
            </button>
        </div>
    );
};


const mapStateToProps = ({counter: {count}}) => ({count});

const mapDispatchToProps = dispatch => bindActionCreators({dec, inc, rnd}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
