export const convertHTML = (string) => {
  const HTML_ENTITIES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
  };

  return string.replace(/([&<>"'])/g, (match) => HTML_ENTITIES[match]);
};

// Alternative solution using switch statement
export const convertHTML2 = (string) => {
  let parts = string.split('');

  for (let i = 0; i < parts.length; i++) {
    switch (parts[i]) {
      case '&':
        parts[i] = '&amp;';
        break;
      case '<':
        parts[i] = '&lt;';
        break;
      case '>':
        parts[i] = '&gt;';
        break;
      case '"':
        parts[i] = '&quot;';
        break;
      case '\'':
        parts[i] = '&apos;';
        break;
    }
  }

  return parts.join('');
};
