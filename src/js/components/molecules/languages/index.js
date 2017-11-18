import React from 'react';
import PropTypes from 'prop-types';

const Languages = ({ data }) => {
	return (
		<ul>
			{
				data.map((lang, i) => (
					<li key={i}>
						<b>{lang.language}</b> &middot; {lang.fluency}
					</li>
				))
			}
		</ul>
	);
};

Languages.prototype = {
	data: PropTypes.array.isRequired,
};

export default Languages;
