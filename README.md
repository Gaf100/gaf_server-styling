# @gaf/ui

Shared **CSS tokens**, **base styles**, **utility components**, and **React components** for GAF web apps. Visual values are derived from the server frontend (`server/frontend/my-app`); other apps should align to these tokens rather than inventing parallel palettes.

## Contents

| Entry | Purpose |
|-------|---------|
| `@gaf/ui/tokens.css` | `:root` CSS custom properties |
| `@gaf/ui/base.css` | Resets, typography, links, default `button` |
| `@gaf/ui/components.css` | `.btn`, `.btn-primary`, `.btn-secondary`, `.table`, `.card`, `.alert`, etc. |
| `@gaf/ui` | React components: `Button`, `Table`, `Card`, `Alert`, `Badge`, `Input`, `FormGroup` |

## Setup

Import **CSS in this order** in your Vite entry (e.g. `main.jsx`):

```js
import '@gaf/ui/tokens.css'
import '@gaf/ui/base.css'
import '@gaf/ui/components.css'
```

Then import **React components** in your app:

```jsx
import { Button, Table, Card, Alert, Badge, Input } from '@gaf/ui'
```

## Components

### Button
```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Delete</Button>
<Button variant="success">Save</Button>
<Button variant="ghost">Ghost</Button>
<Button size="small">Small</Button>
<Button size="large">Large</Button>
<Button disabled>Disabled</Button>
```

### Table
```jsx
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  {
    key: 'status',
    label: 'Status',
    render: (value) => <Badge variant={value === 'active' ? 'success' : 'warning'}>{value}</Badge>,
    className: (value) => `status-${value}`
  }
]

<Table data={users} columns={columns} rowKey="id" />
```

### Card
```jsx
<Card header="User Profile" footer={<Button>Save</Button>}>
  <p>Card content here</p>
</Card>
```

### Alert
```jsx
<Alert type="success">Operation successful!</Alert>
<Alert type="error" onClose={() => setError(null)}>An error occurred.</Alert>
<Alert type="warning">This action cannot be undone.</Alert>
<Alert type="info">For your information...</Alert>
```

### Badge
```jsx
<Badge variant="default">Default</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="danger">Failed</Badge>
<Badge variant="warning">Pending</Badge>
```

### Input
```jsx
<Input label="Email" type="email" placeholder="user@example.com" required />
<Input label="Password" type="password" error="Password is too short" />
```

### FormGroup
```jsx
<FormGroup label="Username" required>
  <input type="text" placeholder="Enter username" />
</FormGroup>
```

## Consume from local workspace

In `server/frontend/my-app/package.json`:

```json
"@gaf/ui": "file:../../../styling"
```

Then run:
```bash
npm install
```

## Publish to npm (production)

From `styling/`:

1. `npm login` (or use `NPM_TOKEN` in CI).
2. Bump `"version"` in `package.json`.
3. `npm publish --access restricted` (for scoped packages).

Consumers pin versions, e.g. `"@gaf/ui": "^1.0.0"`.

## Consume via Git tag

After publishing to a repository:

```json
"@gaf/ui": "git+https://github.com/your-org/gaf-ui.git#v1.0.0"
```

## CI (GitHub Actions)

See [`.github/workflows/publish-gaf-ui.yml`](../.github/workflows/publish-gaf-ui.yml): manual `workflow_dispatch` to publish from `styling/`. Configure the `NPM_TOKEN` repository secret.

## Splitting to a third repository

1. Copy `styling/` to a new repo (or use `git subtree split`).
2. Set `repository.url` in `package.json` to the new remote.
3. Replace `file:` dependencies in apps with a registry version or `git+https` URL.
