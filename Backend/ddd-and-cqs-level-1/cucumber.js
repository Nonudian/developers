const profile = [
    '--require-module ts-node/register',
    '--require-module tsconfig-paths/register',
    '--format progress',
    '--require Infra/step-definitions/**/*.ts',
    '--require Domain/**/*.ts',
    '--publish-quiet',
    'Infra/features/**/*.feature',
].join(' ')

module.exports = { default: profile }
