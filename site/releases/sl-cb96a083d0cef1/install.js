// Stable across immutable releases and isolated from other installations on the same site.
export const installationURL = moduleURL => new URL('../../', moduleURL);
export const storageName = moduleURL => 'pagelove-racing:' + installationURL(moduleURL).pathname;
