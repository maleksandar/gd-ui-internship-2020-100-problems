export function convertHTML(string) {
  return string
      .replace(/([&<>"'])/g, function(character) {
        switch (character) {
          case ('&'):
            return '&amp;';
          case ('<'):
            return '&lt;';
          case ('>'):
            return '&gt;';
          case ('"'):
            return '&quot;';
          case ('\''):
            return '&apos;';
        }
      });
}
