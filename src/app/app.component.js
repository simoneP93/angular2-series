import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'selected': {
    'backgroundColor': '#CFD8DC !important',
    'color': 'white'
  },
  'heroes': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'em', 'value': 15 }]
  },
  'heroes li': {
    'cursor': 'pointer',
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#EEE',
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'em', 'value': 1.6 }],
    'borderRadius': '4px'
  },
  'heroes liselected:hover': {
    'backgroundColor': '#BBD8DC !important',
    'color': 'white'
  },
  'heroes li:hover': {
    'color': '#607D8B',
    'backgroundColor': '#DDD',
    'left': [{ 'unit': 'em', 'value': 0.1 }]
  },
  'heroes text': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -3 }]
  },
  'heroes badge': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'string', 'value': 'small' }],
    'color': 'white',
    'padding': [{ 'unit': 'em', 'value': 0.8 }, { 'unit': 'em', 'value': 0.7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.7 }],
    'backgroundColor': '#607D8B',
    'lineHeight': [{ 'unit': 'em', 'value': 1 }],
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': -1 }],
    'top': [{ 'unit': 'px', 'value': -4 }],
    'height': [{ 'unit': 'em', 'value': 1.8 }],
    'marginRight': [{ 'unit': 'em', 'value': 0.8 }],
    'borderRadius': '4px 0 0 4px'
  }
});
