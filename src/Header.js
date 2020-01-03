import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }
}

/*
  static propTypes = {
    // You can declare that a prop is a specific JS type. By default, these
    // are all optional.
    optionalArray: PropTypes.array.isRequired,
    optionalBool: PropTypes.bool.isRequired,
    optionalFunc: PropTypes.func.isRequired,
    optionalNumber: PropTypes.number.isRequired,
    optionalObject: PropTypes.object.isRequired,
    optionalString: PropTypes.string.isRequired,
    optionalSymbol: PropTypes.symbol.isRequired,

    // Anything that can be rendered: numbers, strings, elements or an array
    // (or fragment) containing these types.
    optionalNode: PropTypes.node.isRequired,

    // A React element.
    optionalElement: PropTypes.element.isRequired,

    // A React element type (ie. MyComponent).
    optionalElementType: PropTypes.elementType.isRequired,

    // You can ensure that your prop is limited to specific values by treating
    // it as an enum.
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),

    // An array of a certain type
    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // An object with property values of a certain type
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    // An object taking on a particular shape
    optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    }),

    // An object with warnings on extra properties
    optionalObjectWithStrictShape: PropTypes.exact({
      name: PropTypes.string,
      quantity: PropTypes.number
    }),

    // You can chain any of the above with `isRequired` to make sure a warning
    // is shown if the prop isn't provided.
    requiredFunc: PropTypes.func.isRequired,

    // A value of any data type
    requiredAny: PropTypes.any.isRequired,

    // You can also specify a custom validator. It should return an Error
    // object if the validation fails. Don't `console.warn` or throw, as this
    // won't work inside `oneOfType`.
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
    }
  }
} */

export default Header;
