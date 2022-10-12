## 🚀 NFT PROJECT

In this project we use:<br />
- Gatsby for build and SSR.<br />
- Scss, BEM for css naming rule<br />
- Atomic design to make component.<br />
- Formik for form handle form.<br />
- Redux, rxjs, typescript-fsa to manage global state.<br />
- Storybook to create component example.


## Available Scripts

In the project directory, you can run:

### `yarn`

Download and install dependency

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn build`

Builds the app for production to the `public` folder.<br />

See the section about [deployment](https://www.netlify.com/products/build/) for more information.

### `yarn storybook`

Run this command to see the example usage of components.

### `yarn gen:components`

Run this command to generate component files for you.<br />
You can modify or create a new template in `_templates` folder at the root.

**Learn more**
    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## NOTE

### CREATE STORE
When you create new store, please add it into `src/store/index.ts`<br />
The Provider was globally added in `wrap-with-provider.js` at the root.

### CSS
The Color and Page variable are defined in `src/assets/scss/_variables`.<br />
We have defined some useful mixin in `src/assets/scss/_mixins`.<br />

For responsive website, please use **mixin** to replace **@media** rule.<br />
Example: <br />

```SCSS
@include sp{ 
 // Your SP style here.
}
@include tab{ 
 // Your Tablet style here.
}
```

### FORMIK
When you want to use Formik, please wrap your from inside <Formik> provider.<br />
We've defined `Fieldrow` component for each Input Row which including label, description text, caption, error message,...<br />
You will need to pass input name as Fieldrow props for Formik to check and show error.

Example:
```Typescript-JSX
<Formik initialValues validationSchema onSubmit>
  ({values}) => {
    return <Form>
      // Your form here
    </Form>
  }
</Formik>
```

### SEO, meta
You can modify `Pagemeta` component to add new meta tag.

### Call API
In some case, some functions need to check whether **wallet has been connected** and **browser has been installed BinanceChain** or not.<br />
Please use **commonStart** action of common store, this action will check the above conditions for you or show error modal if they are not sastify.

Example:
```Typescript
dispatch(commonStart({ nextAction: createTokenURI.started({ data: values }) }));
```


