const common = [
    '--require-module ts-node/register',
    '--require-module tsconfig-paths/register',
    '--format progress', // progress-bar, progress, summary
    '--require step-definitions/**/*.ts',
    '--require support/**/*.ts',
    '--publish-quiet',
    'features/**/*.feature',
].join(' ')

module.exports = { default: common }
