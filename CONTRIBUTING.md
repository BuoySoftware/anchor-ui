Thanks for showing interest to contribute to Anchor UI!

Here's a few guidelines that should help you as you prepare your contribution.

## Setup the Project

The following steps will get you up and running to contribute to Anchor UI:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/BuoySoftware/anchor-ui))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/anchor-ui.git
cd anchor-ui
```

3. Setup all the dependencies and packages by running `yarn install`. This
   command will install dependencies.

## Development

To improve our development process, we've set up tooling and systems. Anchor UI
uses the monorepo structure and we treat each component as an independent package
that can be consumed in isolation.

### Tooling

- [Lerna](https://lerna.js.org/) to manage packages and dependencies
- [Storybook](https://storybook.js.org/) for rapid UI component development and
  testing
- [Testing Library](https://testing-library.com/) for testing components and
  hooks
  documentation, changelog generation, and release management.

### Commands

**`yarn install`**: installs all dependencies for all packages

**`yarn storybook`**: starts storybook server and loads stories in files that
end with `.stories.tsx`.

**`yarn build`**: run build for all component packages.

**`yarn test`**: run test for all component packages.

**`yarn publish-build`**: build and publish changed packages.

## Think you found a bug?

Please create an issue and provide a clear path to reproduction
with a code example. The best way to show a bug is by sending a CodeSandbox
link.

## Proposing new or changed API?

Please provide thoughtful comments and some sample API code. Proposals that
don't line up with our roadmap or don't have a thoughtful explanation will be
closed.

## Making a Pull Request?

Pull requests need only the :+1: of two or more collaborators to be merged; when
the PR author is a collaborator, that counts as one.

### Steps to PR

1. Fork of the anchor-ui repository and clone your fork

2. Create a new branch out of the `main` branch and prefix your branch with your initials (i.e. `drf-add-legacy-component`).

3. Make and commit your changes.

4. Make sure that your run `yarn build` and `yarn test` to make sure everything works as expected. If so, push up a PR and work with the reviewer to address any comments.

5. Once the PR is approved, you're free to merge.

### Publishing

To publish, you must have NPM access to the `@buoysoftware/anchor-ui` repository. Once you do have access you may publish by doing the following:

1. Checkout the `main` branch and pull down the latest changes.
2. Sign in to NPM by running `npm login`
3. Run `yarn publish-build`. Lerna will walk you through the publishing steps.

## License

By contributing your code to the anchor-ui GitHub repository, you agree to
license your contribution under the MIT license.
