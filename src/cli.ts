import cac from 'cac';
import md2Png from '.';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name, version } = require('../package.json');

// Unified error handling
/* istanbul ignore next */
const onError = (err: Error): void => {
  console.error(err.message);
  process.exit(1);
};

process.on('uncaughtException', onError);
process.on('unhandledRejection', onError);

const cli = cac(name as string);

// TODO: Implement module cli

cli
  .command('<input>')
  .option('-o, --output <output>', 'output path of pic') // flag参数
  .option('-w, --width <width>', 'output width of pic')
  .action((input, { output, width }) => {
    console.log(md2Png(input, { output, width }));
  });

cli.help().version(version).parse();
