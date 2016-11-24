export function getCurrentSlug() {
  const hash = window.location.hash;
  return hash.slice(hash.lastIndexOf('/')).substring(1);
}

export function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}