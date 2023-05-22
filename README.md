# ChatGPT JS Plugin Quickstart
__Brought to you by SitePoint__

Get a todo list ChatGPT plugin up and running in under 5 minutes using Node and Express. Tutorial located here: [Build your first JavaScript ChatGPT Plugin](https://www.sitepoint.com/javascript-chatgpt-plugin/).

## Setup

To install the required packages for this plugin, run the following command:

```bash
npm install
```

To run the plugin, enter the following command:

```bash
node index.js
```

Once the local server is running:

1. Navigate to https://chat.openai.com. 
2. In the Model drop down, select "Plugins" (note, if you don't see it there, you don't have access yet).
3. Select "Plugin store"
4. Select "Develop your own plugin"
5. Enter in `localhost:3000` since this is the URL the server is running on locally, then select "Find manifest file".

The plugin should now be installed and enabled! You can start with a question like "What is on my todo list" and then try adding something to it as well! 