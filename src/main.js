import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'header [role="progressbar"][aria-busy="true"]': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 8 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'backgroundColor': '#159756',
    'animation': 'preloader-background linear 3.5s infinite'
  },
  'header [role="progressbar"][aria-busy="true"]::before': {
    'display': 'block',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '2',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 8 }],
    'background': '#afa',
    'animation': 'preloader-front linear 3.5s infinite',
    'content': ''''
  },
  'header [role="progressbar"][aria-busy="true"]::after': {
    'display': 'block',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '2',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 8 }],
    'background': '#afa',
    'animation': 'preloader-front linear 3.5s infinite',
    'content': ''''
  },
  'header [role="progressbar"][aria-busy="true"]::before': {
    'right': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'header [role="progressbar"][aria-busy="true"]::after': {
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  '*': {
    'boxSizing': 'border-box'
  },
  'html': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'fontFamily': 'Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif',
    'backgroundColor': '#f5f5f5'
  },
  'header': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'backgroundColor': '#fff'
  },
  'main': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'center',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'flexGrow': '1',
    'textAlign': 'center'
  },
  ':root main > * + *': {
    'marginTop': [{ 'unit': 'em', 'value': 1 }]
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'em', 'value': 2.2 }],
    'fontWeight': '200'
  },
  'p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.875 }],
    'fontWeight': '400'
  }
});
