// import components

import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';

const check1 = 'checkedA1';
const check2 = 'checkedA2';

export default class Checkboxes extends Component {
  
  state = { 
    [check1]: false,
    [check2]: false
  }

  onCheck = (event, value) => { 
    event.preventDefault(event);
    this.state[value] === false ? 
    this.setState({ [value]: true }, () => this.props.checkbox(value, this.state[value])) :
    this.setState({ [value]: false }, () => this.props.checkbox(value, this.state[value]));
  }

  render() {
    return (
      <div className="main">
        <Paper className="box-selectors" zDepth={2}> 
          <div className="wrapper">
            <Checkbox
              className="checkbox"
              label="A1"
              checked={this.state[check1]}
              onCheck={e => {this.onCheck(e, check1)}}
            />
            <Checkbox
              className="checkbox"
              label="A2"
              checked={this.state[check2]}
              onCheck={e => {this.onCheck(e, check2)}}
            />
          </div>
        </Paper>
      </div>
    )
  }
}
