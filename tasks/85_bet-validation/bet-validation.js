

// eslint-disable-next-line camelcase
export function validate_bet(game, sms) {
  let smsFormatted = sms.split(/ *, *|,| +/g);
  if (smsFormatted.length !== game[0]) return 'None';

  for (let i=0; i<smsFormatted.length; i++) {
    if (isNaN(smsFormatted[i])) return 'None';
    if (Number.parseInt(smsFormatted[i]) > game[1]) return 'None';
  }

  return smsFormatted.sort();
}
