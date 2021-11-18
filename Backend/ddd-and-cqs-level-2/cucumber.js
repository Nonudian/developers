const baseUrl = 'src'
const profile = [
    '--require-module ts-node/register',
    '--require-module tsconfig-paths/register',
    '--format progress',
    `--require ${baseUrl}/Infra/step-definitions/**/*.ts`,
    `--require ${baseUrl}/Domain/**/*.ts`,
    '--publish-quiet',
    `${baseUrl}/Infra/features/**/*.feature`,
].join(' ')

module.exports = { default: profile }
