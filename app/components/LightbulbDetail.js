import Avatar from 'material-ui/Avatar';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { grey300, yellow500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import LightbulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import React from 'react';
import PageHeader from './PageHeader';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const LightbulbDetail = ({
  carrier,
  compressor_running,
  compressor_powered,
  tamper_1,
  conn_uptime,
  tamper_2,
  mains_power,
  outside_temp,
  location,
  imei,
  refrig_pressure,
  battery_lvl,
  registered,
  signal_strength,
  name,
  serialNumber
}) => (
  <div>
    <PageHeader title={name} subtitle={serialNumber} />
    <Table>
      <TableBody>
        <TableRow>
          <TableRowColumn>Communications</TableRowColumn>
          <TableRowColumn> </TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Carrier</TableRowColumn>
          <TableRowColumn>{carrier}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Registered</TableRowColumn>
          <TableRowColumn>{registered}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>IMEI</TableRowColumn>
          <TableRowColumn>{imei}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Signal Strength</TableRowColumn>
          <TableRowColumn>{signal_strength} dB</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Connection Uptime</TableRowColumn>
          <TableRowColumn>{conn_uptime} min</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Security</TableRowColumn>
          <TableRowColumn> </TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Tamper Switch 1</TableRowColumn>
          <TableRowColumn>{tamper_1}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Tamper Switch 2</TableRowColumn>
          <TableRowColumn>{tamper_2}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Location</TableRowColumn>
          <TableRowColumn>{location}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Environment</TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Outside Temperature</TableRowColumn>
          <TableRowColumn>{outside_temp} F</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Main Power</TableRowColumn>
          <TableRowColumn>{mains_power}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Battery Level</TableRowColumn>
          <TableRowColumn>{battery_lvl}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Compressor</TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Powered</TableRowColumn>
          <TableRowColumn>{compressor_powered}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Running</TableRowColumn>
          <TableRowColumn>{compressor_running}</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>Pressure</TableRowColumn>
          <TableRowColumn>{refrig_pressure} psi</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

LightbulbDetail.propTypes = {
  carrier: React.PropTypes.string.isRequired,
  state: React.PropTypes.bool.isRequired,
  compressor_running: React.PropTypes.bool.isRequired,
  compressor_powered: React.PropTypes.bool.isRequired,
  tamper_1: React.PropTypes.bool.isRequired,
  conn_uptime: React.PropTypes.number.isRequired,
  tamper_2: React.PropTypes.bool.isRequired,
  mains_power: React.PropTypes.bool.isRequired,
  outside_temp: React.PropTypes.number.isRequired,
  refrig_pressure: React.PropTypes.number.isRequired,
  battery_lvl: React.PropTypes.number.isRequired,
  registered: React.PropTypes.bool.isRequired,
  battery_lvl: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  onSetLightbulbState: React.PropTypes.func.isRequired,
  serialNumber: React.PropTypes.string.isRequired
};

export default LightbulbDetail;
