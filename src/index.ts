import Client from '@jsprismarine/prismarine/dist/src/Client';

const client = new Client();
client.connect('play.prismarine.dev', 19132).then((client) => {
    client.on('disconnect', () => process.exit(0));
});