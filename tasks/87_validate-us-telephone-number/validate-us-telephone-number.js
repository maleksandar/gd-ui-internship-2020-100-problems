export function telephoneCheck(number) {
  // eslint-disable-next-line max-len
  const regex = /^(1 ?)?(\([0-9]{3}\)|[0-9]{3})( ?|-)([0-9]{3})( *|-)([0-9]{4})$/g;

  if (number.match(regex)) {
    return true;
  }
  return false;
}
