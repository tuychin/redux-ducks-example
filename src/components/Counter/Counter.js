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
                className="btn btn-primary btn-lg"
            >
                DEC
            </button>
            <button
                onClick={inc}
                className="btn btn-primary btn-lg"
            >
                INC
            </button>
            <button
                onClick={rnd}
                className="btn btn-primary btn-lg"
            >
                RND
            </button>
        </div>
    );
};


const mapStateToProps = ({counter: {count}}) => ({count});

const mapDispatchToProps = dispatch => bindActionCreators({dec, inc, rnd}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
