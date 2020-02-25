

export function whatIsInAName(collection, source) {
  return collection.filter( (element) => {
    for (const key in source ) {
      if ( element[key] !== source[key] ) return false;
    }
    return true;
  } );
}
