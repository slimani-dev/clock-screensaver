# Clock Screensaver

This is a Nuxt.js project that provides a customizable clock screensaver.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# yarn
yarn preview
```

For more information on deployment, refer to the [Nuxt documentation](https://nuxt.com/docs/getting-started/deployment).

## Font Management

This project includes a script (`list-fonts.sh`) to help manage and identify fonts. It uses `fc-query` to extract the full font name from font files.

### Usage of `list-fonts.sh`

To use the font listing script:

1.  **Ensure `fontconfig` is installed:**
    ```bash
    sudo apt install fontconfig
    ```
2.  **Run the script:**
    ```bash
    ./list-fonts.sh
    ```

This will output a list of font names and their corresponding filenames for `.ttf` and `.otf` files in the current directory.
