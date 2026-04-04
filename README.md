# @gaf/ui

Shared **CSS tokens**, **base styles**, and **utility components** for GAF web apps. Visual values are derived from the server frontend (`server/frontend/my-app`); other apps should align to these tokens rather than inventing parallel palettes.

## Contents

| Entry | Purpose |
|-------|---------|
| `@gaf/ui/tokens.css` | `:root` CSS custom properties |
| `@gaf/ui/base.css` | Resets, typography, links, default `button` |
| `@gaf/ui/components.css` | `.btn`, `.btn-primary`, `.btn-secondary`, … |

Import **in this order** in your Vite entry (e.g. `main.jsx`):

```js
import '@gaf/ui/tokens.css'
import '@gaf/ui/base.css'
import '@gaf/ui/components.css'
```

## Consume from this monorepo (local)

In `server/frontend/my-app/package.json` and `tower/tower-app/package.json`:

```json
"@gaf/ui": "file:../../../styling"
```

Then run `npm install` in each app directory.

## Publish to a private registry

From `styling/`:

1. `npm login` (or use `NPM_TOKEN` in CI).
2. Bump `"version"` in `package.json`.
3. `npm publish --access restricted` (for scoped packages).

Consumers pin versions, e.g. `"@gaf/ui": "^1.0.0"`.

## Consume via Git tag (no registry)

After this package lives in its own repository (or a subtree split), depend on a tag:

```json
"@gaf/ui": "git+https://github.com/your-org/your-gaf-ui-repo.git#v1.0.0"
```

Use an exact tag or commit hash for reproducible builds.

## CI (GitHub Actions)

See [`.github/workflows/publish-gaf-ui.yml`](../.github/workflows/publish-gaf-ui.yml): manual `workflow_dispatch` to publish from `styling/`. Configure the `NPM_TOKEN` repository secret for your registry.

## Splitting to a third repository

1. Copy `styling/` to a new repo (or use `git subtree split`).
2. Set `repository.url` in `package.json` to the new remote.
3. Replace `file:` dependencies in apps with a registry version or `git+https` URL.
