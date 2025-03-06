import { defineConfig } from "vite";

export default defineConfig({
    esbuild: {
        jsxFactory: "createElement", // Your custom JSX factory function
        jsxFragment: '"FRAGMENT"', // Your custom fragment syntax,
        jsxInject: `import { createElement } from "refract-js"`,
    },
});
