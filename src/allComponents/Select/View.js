const React = require('react');
const PropTypes = require('react-prop-types');

function View(props) {
  const { onChange, optionElements } = props;
  return (
    <div>
      <select id="great-names" onChange={onChange}>
        <option>
            Choose mentor
        </option>
        {optionElements}
      </select>
    </div>
  );
};

View.propTypes = {
  optionElements: PropTypes.array,
  onChange: PropTypes.func,
};

module.exports = View;
