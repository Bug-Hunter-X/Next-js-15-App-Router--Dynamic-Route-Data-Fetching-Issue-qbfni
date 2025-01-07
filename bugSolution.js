```javascript
// app/users/[id]/page.js

import { Suspense } from 'react';

export default async function UserPage({params}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

```