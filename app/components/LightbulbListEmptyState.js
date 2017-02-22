import RaisedButton from 'material-ui/RaisedButton';
import  React from 'react';

const LightbulbListEmptyState = ({ onAddLightbulb }) => (
  <div style={{ textAlign: 'center', marginTop: 24 }}>
    <h3>No devices assigned</h3>
    <RaisedButton
      label="+ Add device"
      onTouchTap={onAddLightbulb}
      primary
      style={{ marginTop: 16 }}
    />
  </div>
);

LightbulbListEmptyState.propTypes = {
  onAddLightbulb: React.PropTypes.func.isRequired,
};

export default LightbulbListEmptyState;
