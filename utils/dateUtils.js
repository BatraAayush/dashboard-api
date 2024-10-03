import moment from 'moment-timezone';

const IST_TIMEZONE = 'Asia/Kolkata';

export function convertUnixToIST(start_time) {
  const istDate = moment.unix(start_time).tz(IST_TIMEZONE);
  return istDate.format('YYYY-MM-DD HH:mm:ss'); 
}
