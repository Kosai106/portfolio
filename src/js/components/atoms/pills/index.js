import React from 'react';
import PropTypes from 'prop-types';

require('./pills.scss');

const Pill = (props) => {
	return <li className="typography--milli pill">{props.data}</li>;
};

Pill.protoTypes = {
	data: PropTypes.object.isRequired,
};

export default Pill;
