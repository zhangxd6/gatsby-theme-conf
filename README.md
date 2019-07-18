# Gatsby Theme Conf

This repo is a gatsby theme for a conference landing page

It includes:
- a theme (located in `theme/`) that includes basic setup
- a demo site (located in `demo/`) that installs the theme
- a Yarn workspaces configuration so the theme and demo can be worked on simultaneously

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme
    ```sh
    npm install --save gatsby-theme-conf
    ```

2.  Add the theme to your `gatsby-config.js`:
    ```js
    module.exports = {
      plugins: [
        'gatsby-theme-conf'
      ]
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```
