import store from '../store';
import service from './service';

function getLightbulbs() {
  const { email } = store;
  return service.get(`/user/${email}/lightbulbs`);
}

function addLightbulb(name, serialnumber) {
  const { email } = store;
  const body = {
    link: true,
    serialnumber,
    name
  };
  return service.post(`/user/${email}/lightbulbs`, body);
}

function setPressureWarn(serialNumber, underPressure, overPressure) {
  const body = {
    underPressure,
    overPressure
  };
  return service.post(`/lightbulb/${serialNumber}`, body);
}

export default {
  addLightbulb,
  getLightbulbs,
  setPressureWarn
};
