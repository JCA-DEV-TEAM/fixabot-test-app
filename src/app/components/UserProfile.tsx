'use client';

import { useState } from 'react';

interface User {
  id: number;
  profile?: { name: string; email: string };
}

// BUG: This sample user has no `profile` field, but renderProfileName assumes it does.
const SAMPLE_USER: User = { id: 42 };

function renderProfileName(user: User): string {
  // Bug: non-null assertion lies to the compiler — at runtime profile is undefined.
  return `Hello, ${user.profile!.name}!`;
}

export default function UserProfile() {
  const [greeting, setGreeting] = useState<string>('');

  const handleClick = () => {
    // This will throw at runtime: TypeError: Cannot read properties of undefined (reading 'name')
    setGreeting(renderProfileName(SAMPLE_USER));
  };

  return (
    <div className="card">
      <h2>1. User profile</h2>
      <p>Should print a greeting from the sample user. Currently throws a null pointer error.</p>
      <button onClick={handleClick}>Show greeting</button>
      {greeting && <div className="value" style={{ marginTop: 12 }}>{greeting}</div>}
    </div>
  );
}
