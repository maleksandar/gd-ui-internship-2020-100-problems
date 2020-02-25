export function rot13Encoder(str) {
  return str
      .replace(/([A-Z])/g, function(c) {
        if (c >= 'A' && c <= 'M') {
          return String.fromCharCode(c.charCodeAt(0) + 13);
        } else {
          return String.fromCharCode(c.charCodeAt(0) - 13);
        }
      });
}
