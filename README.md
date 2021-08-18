# Yarn workspaces + TypeScript type conflicts

Simulate Error:

```
node repro.js error
yarn
yarn workspace @x/chai-host type-check
yarn workspace @x/jest-host type-check
```

Simulate Success (with `nmHoistingLimits: workspaces`):

```
node repro.js success
yarn
yarn workspace @x/chai-host type-check
yarn workspace @x/jest-host type-check
```