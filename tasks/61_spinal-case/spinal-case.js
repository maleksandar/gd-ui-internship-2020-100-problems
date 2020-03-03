export function spinalCase(str) {
  return str.replace(/(.+?)([A-Z]|_|\s)/g, (match, beforeDash, afterDash) => {
    // afterDash can be '_', ' ' or an uppercase letter
    if (afterDash === '_' || afterDash === ' ') {
      afterDash = '';
    }
    return beforeDash + '-' + afterDash;
  }).toLowerCase();
}

