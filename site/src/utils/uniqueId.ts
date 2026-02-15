```typescript
// src/utils/uniqueId.ts
let counter = 0;

export function getUniqueId(prefix: string = 'id'): string {
  counter++;
  return `${prefix}-${counter}`;
}
```
---