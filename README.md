# hyper-night-and-day
hyper-night-and-day is a plugin for the hyper-terminal which allows switching
between light and dark theme based on macOS light / dark mode settings.


# How do I configure this thing?
```javascript
module.exports = {
    // configure what themes to use for light / dark mode
    nightAndDay: {
      night: 'hyper-iceberg',
      day:   'hyper-one-light',
    },
    // ... 
    plugins: [
      // list themes to be installed
      'hyper-iceberg',
      'hyper-one-light',
      // put it after your themes
      'hyper-night-and-day',
    ],
    // ...
};
```

# Meh
Currently the plugin is not yet capable to toggle while the terminal
is running. The theme will only be set on the application launch.
