const spinner = function() {
  spinnerArr = ['|', '\\', '-', '/', '|', '\\', '-', '/', '|', '\n']
  for (let i = 0; i < spinnerArr.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${spinnerArr[i]}   `);
    }, i * 200);
  }
};

spinner();