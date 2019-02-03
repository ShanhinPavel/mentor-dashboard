const React = require('react');
const PropTypes = require('react-prop-types');
const View = require('./View');
const compare = require('../Utils/compare');

/*
  *This function creates option elements from elements of collection
    and selects one(this one is pointed as second argument).
*/
const getOptions = (collection, selectedElement) => {
  const arrayFromCollection = collection // Copy array from arguments and sort
    .slice()
    .sort(compare);

  // Create element option from collection
  const options = arrayFromCollection.map((element, index) => {
    const id = index + 1;
    if (element === selectedElement) {
      return <option value={element} key={`option_${id}`} selected>{element}</option>;
    }
    return <option value={element} key={id}>{element}</option>;
  });
  return options;
};
/*
  *This function contains logic of Select component
*/
function Controller(props) {
  // This function takes selected option and changes state of main component
  const handleChange = (e) => {
    const github = e.target.value;
    localStorage.setItem('mentor-dashboard', JSON.stringify({ mentorGithub: github }));
    const { onChange } = props;
    onChange(github);
    console.log(github);
  };

  const { collection, selected } = props;
  const options = getOptions(collection, selected);

  return (
    <View onChange={handleChange} optionElements={options} />
  );
}

Controller.propTypes = {
  collection: PropTypes.array,
  selected: PropTypes.string,
  onChange: PropTypes.func,
};

module.exports = Controller;
