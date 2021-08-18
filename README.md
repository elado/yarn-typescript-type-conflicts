# Yarn workspaces + TypeScript type conflicts

Simulate Error:

```
node repro.js error
yarn
yarn workspace @x/app type-check
```

Simulate Success (with `nmHoistingLimits: workspaces`):

```
node repro.js error
yarn
yarn workspace @x/app type-check
```