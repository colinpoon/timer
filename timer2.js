const args = process.argv.slice(2);

const alarm = function () {
  if (args <= 0 || typeof args !== 'string') {
    return undefined;
  }
  args.forEach(element => {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, element * 1000);
  });
};
alarm(); 
// console.log(args);
// process.stdout.write('\x07'); 

