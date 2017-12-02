'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('apps', [
      {
        client_id: 'utopian.app',
        secret: 'secretkey-abc-123',
        owner: 'mooncryption',
        redirect_uris: JSON.stringify(['http://localhost:\/demo', 'http://localhost:3000/callback', 'https://utopian.io/callback', 'https://v2.steemconnect.com/demo', 'http://localhost:3000']),
        name: 'utopian.io',
        description: 'Rewarding open-source contributors for their work',
        icon: 'https://byteball.co/img/logo.jpg',
        website: 'https://utopian.io',
        beneficiaries: JSON.stringify([]),
        disabled: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        client_id: 'simple-app',
        secret: 'secretkey-abc-456',
        owner: 'val',
        redirect_uris: JSON.stringify(['http://localhost:3000/demo', 'http://localhost:3000', 'https://sc2-angular.herokuapp.com', 'https://v2.steemconnect.com/demo', 'https://busy.org/callback']),
        name: 'Simple App',
        description: 'This is a test app.',
        icon: 'https://byteball.co/img/logo.jpg',
        website: 'https://example.com',
        beneficiaries: JSON.stringify([]),
        disabled: false,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('apps', null, {});
  }
};
