export const environment = {
  production: false,
  serverUrl: '/api',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/realms/curio',
    // Realm
    realm: 'curio',
    clientId: 'curio-ui',
  },
  cmsKey: '83ec82036ce4b506996a3f93b650678bc54d4e9ec60fba818e60e169269519019b5a65460de7a202d9943f64d90128f00c5f322f481bfd0689f83129926aae83f54e0c5255b5244f311b9eafbd47c2ffa48c7d12d4c211615ef15e1cf3998ba2631e0f0b4b83c8a1e47fedf763a2d1bfa728d48ac0fde0e20ff797a32f5a851f',
  cmsUrl: 'http://localhost:1337'
};
