const chalk = require('chalk');

module.exports = {
  prompt: ({ prompter, args }) => {
    return prompter
      .prompt([
        {
          type: 'select',
          name: 'level',
          message: 'Select a component type',
          choices: ['atoms', 'molecules', 'organisms', 'templates'],
        },
        {
          type: 'input',
          name: 'name',
          message: 'Enter a component name.',
          validate: input => {
            return input === '' ? 'Component name is required' : true;
          },
        },
        {
          type: 'confirm',
          name: 'confirm',
          message: 'Generate a component?',
          initial: true,
        },
      ])
      .then(({ confirm, ...res }) => {
        if (!confirm) {
          console.log(chalk.keyword('orange')('generate has been stopped.'));
          process.exit();
        }
        console.log(res);
        return res;
      });
  },
};
