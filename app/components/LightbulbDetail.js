import Avatar from 'material-ui/Avatar';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { grey300, yellow500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import LightbulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import React from 'react';
import PageHeader from './PageHeader';

const LightbulbDetail = ({
  refrig_pressure,
  isChangingBulbState,
  isOn,
  name,
  onSetLightbulbState,
  serialNumber,
  outside_temp,
}) => (
  <div>
    <PageHeader title={name} subtitle={serialNumber} />
    <div className="container container--small container--space">
      <Paper
        className={`card card--bulb card--small ${isChangingBulbState ? 'card--disabled' : ''}`}
        onTouchTap={onSetLightbulbState}
      >
        <Avatar size={124} backgroundColor={isOn ? yellow500 : grey300} style={{ position: 'relative' }}>
          <LightbulbIcon style={{ height: 84, width: 84 }} />
          {
            isChangingBulbState &&
            <CircularProgress
              size={2}
              style={{
                position: 'absolute',
                top: 21,
                left: -8,
                right: 0,
                bottom: 0,
                marginTop: 16,
              }}
            />
          }
        </Avatar>
        <p className="card__text--button">
          Turn { isOn ? 'OFF' : 'ON'}
        </p>
      </Paper>
      <Paper className="card card--small card--temp">
        <h3 className="card__text--value">
          {outside_temp ? `${outside_temp}°F` : '--'}
        </h3>
        <p className="card__text--label">Outside Temperature</p>
      </Paper>
      <Paper className="card card--small card--refrig_pressure">
        <h3 className="card__text--value">
          {refrig_pressure ? `${refrig_pressure} psi` : '--'}
        </h3>
        <p className="card__text--label">Pressure</p>
      </Paper>
    </div>
  </div>
);

LightbulbDetail.propTypes = {
  refrig_pressure: React.PropTypes.number.isRequired,
  isChangingBulbState: React.PropTypes.bool.isRequired,
  isOn: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  onSetLightbulbState: React.PropTypes.func.isRequired,
  serialNumber: React.PropTypes.string.isRequired,
  outside_temp: React.PropTypes.number.isRequired,
};

export default LightbulbDetail;
