# React Native Header Bar

Header bar with a hamburger menu for react-native apps.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

Download and Install: [Node](https://nodejs.org/en/)

Once Node is installed, run

```
npm install react-native
```

Have an up and running react-native project. See https://facebook.github.io/react-native/docs/getting-started for more information.

### Installing

To install component, navigate to project root directory and run

```
npm install react-native-simple-headerbar
```

## Documentation

### Props

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `hideHamburgerMenu` | `PropTypes.boolean` | No |  | Boolean to hide hamburger menu. |
| `onMenuPress` | `PropTypes.func` | No |  | Function to handle on hambruger menu press. |
| `hamburgerMenuColor` | `PropTypes.string` | No |  | String to hold hamburger menu color. |
| `text` | `PropTypes.string` | No |  | Title for the header. |
| `textStyle` | `PropTypes.object` | No |  | CSS object to style text. |
| `showBackButton` | `PropTypes.boolean` | No |  | Boolean to control if back button should be shown. (hideHamburgerMenu takes precedence) |
| `onBackButtonPress` | `PropTypes.func` | No |  | Function to handle on back button press. |
| `style` | `PropTypes.object` | No |  | CSS object to style bar. |

### Usage

#### Within react-native js file

```
import Header from 'react-native-headerbar';

<Header
    hideHamburgerMenu={false}
    hamburgerMenuColor="white"
    onMenuPress={...}
    text="Example"
    textStyle={...}
/>
```

## Built With

* [Node](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [React Native](https://facebook.github.io/react-native/)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Hamza Varvani** - *Initial work* - [HamzaKV](https://github.com/HamzaKV)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration - https://github.com/fattahmuhyiddeen/react-native-arrow
