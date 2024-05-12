# Spark Snippets for Visual Studio Code

Welcome to **Spark Snippets for Visual Studio Code**, a high-efficiency toolkit designed to accelerate your development in React and SCSS. This extension provides a wide array of predefined code snippets that drastically reduce the time spent writing boilerplate code, enabling you to focus more on crafting innovative features and user experiences.

Developed by **Spark Studio**.

[Visit Spark Studio](https://sparkstudio.kz)

## Features

**Spark Snippets** enhances your workflow by offering quick access to commonly used React component patterns, hooks, SCSS styles, and other utilities.

### React Component Snippets

- **Spark React Input (`rinput`)**: Generates a React input component with props for margin, placeholder, type, and text alignment.
- **Spark React Button (`rbtn`)**: Creates a styled button component, supporting both 'filled' and 'outline' styles with customizable margins.
- **Spark Horizontal Rule (`rhr`)**: Inserts a styled `<hr>` component.
- **Spark React Link Button (`rlbtn`)**: Generates a React link button component using `react-scroll`.
- **Spark React Selector (`rselector`)**: A custom dropdown selector component, equipped with FontAwesome icons.

### Network Interaction Snippets

- **Spark Post Request (`rapost`)**: Template for creating a POST request using Axios.
- **Spark Get Request (`raget`)**: Snippet for fetching data using Axios.
- **Spark Delete Request (`radelete`)**: Setup for making DELETE requests via Axios.
- **Spark Patch Request (`rapatch`)**: Simplifies sending PATCH requests.

### SCSS Clamp Snippets

#### Clamps For 360px:

- **Clamp 4px @ 360px (`cl4-xxs`)**: `clamp(2px, 4px / 360 * 100vw, 8px);`
- **Clamp 8px @ 360px (`cl8-xxs`)**: `clamp(4px, 8px / 360 * 100vw, 16px);`
- **Clamp 16px @ 360px (`cl16-xxs`)**: `clamp(8px, 16px / 360 * 100vw, 32px);`
- **Clamp 18px @ 360px (`cl18-xxs`)**: `clamp(9px, 18px / 360 * 100vw, 36px);`
- **Clamp 20px @ 360px (`cl20-xxs`)**: `clamp(10px, 20px / 360 * 100vw, 40px);`
- **Clamp 24px @ 360px (`cl24-xxs`)**: `clamp(12px, 24px / 360 * 100vw, 48px);`
- **Clamp 32px @ 360px (`cl32-xxs`)**: `clamp(16px, 32px / 360 * 100vw, 64px);`
- **Clamp 64px @ 360px (`cl64-xxs`)**: `clamp(32px, 64px / 360 * 100vw, 128px);`
- **Clamp 128px @ 360px (`cl128-xxs`)**: `clamp(64px, 128px / 360 * 100vw, 256px);`
- **Clamp 256px @ 360px (`clamp256-xxs`)**: `clamp(128px, 256px / 360 * 100vw, 512px);`

#### Clamps For 480px:

- **Clamp 4px @ 480px (`cl4-xs`)**: `clamp(2px, 4px / 480 * 100vw, 8px);`
- **Clamp 8px @ 480px (`cl8-xs`)**: `clamp(4px, 8px / 480 * 100vw, 16px);`
- **Clamp 16px @ 480px (`cl16-xs`)**: `clamp(8px, 16px / 480 * 100vw, 32px);`
- **Clamp 18px @ 480px (`cl18-xs`)**: `clamp(9px, 18px / 480 * 100vw, 36px);`
- **Clamp 20px @ 480px (`cl20-xs`)**: `clamp(10px, 20px / 480 * 100vw, 40px);`
- **Clamp 24px @ 480px (`cl24-xs`)**: `clamp(12px, 24px / 480 * 100vw, 48px);`
- **Clamp 32px @ 480px (`cl32-xs`)**: `clamp(16px, 32px / 480 * 100vw, 64px);`
- **Clamp 64px @ 480px (`cl64-xs`)**: `clamp(32px, 64px / 480 * 100vw, 128px);`
- **Clamp 128px @ 480px (`cl128-xs`)**: `clamp(64px, 128px / 480 * 100vw, 256px);`
- **Clamp 256px @ 480px (`clamp256-xs`)**: `clamp(128px, 256px / 480 * 100vw, 512px);`

#### Clamps For 768px:

- **Clamp 4px @ 768px (`cl4-sm`)**: `clamp(2px, 4px / 768 * 100vw, 8px);`
- **Clamp 8px @ 768px (`cl8-sm`)**: `clamp(4px, 8px / 768 * 100vw, 16px);`
- **Clamp 16px @ 768px (`cl16-sm`)**: `clamp(8px, 16px / 768 * 100vw, 32px);`
- **Clamp 18px @ 768px (`cl18-sm`)**: `clamp(9px, 18px / 768 * 100vw, 36px);`
- **Clamp 20px @ 768px (`cl20-sm`)**: `clamp(10px, 20px / 768 * 100vw, 40px);`
- **Clamp 24px @ 768px (`cl24-sm`)**: `clamp(12px, 24px / 768 * 100vw, 48px);`
- **Clamp 32px @ 768px (`cl32-sm`)**: `clamp(16px, 32px / 768 * 100vw, 64px);`
- **Clamp 64px @ 768px (`cl64-sm`)**: `clamp(32px, 64px / 768 * 100vw, 128px);`
- **Clamp 128px @ 768px (`cl128-sm`)**: `clamp(64px, 128px / 768 * 100vw, 256px);`
- **Clamp 256px @ 768px (`clamp256-sm`)**: `clamp(128px, 256px / 768 * 100vw, 512px);`

#### Additional resolutions:

- **Additional clamps for resolutions 992px, 1200px, 1360px, and 1520px** are similarly defined, each with corresponding prefixes and bodies to match their specific viewport widths.

## Requirements

No specific prerequisites are required to use Spark Snippets other than having Visual Studio Code installed. However, ensuring your project environment includes React and an appropriate CSS processor (like SASS) will enhance the functionality of these snippets.

## Extension Settings

This extension does not require specific settings for operation but works directly through the inclusion of snippets in your working files.

## How to Use

After installation, simply type the snippet prefix (e.g., `rinput` for the React input component) in a JavaScript or TypeScript file within your React project or any of the SCSS snippet prefixes in your SCSS files to see the snippets in action. Press `Tab` or `Enter` to insert a snippet.

## Conclusion

**Spark Snippets** is crafted to streamline your development process, enhancing your productivity and helping you maintain a clean and organized codebase while building complex React applications or crafting detailed CSS designs.
