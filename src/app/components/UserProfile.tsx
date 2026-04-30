'use client';

import { useState } from 'react';

interface User {
  id: number;
  profile?: { name: string; email: string };
}

// BUG: This sample user has no `profile` field, but renderProfileName assumes it does.
const SAMPLE_USER: User = { id: 42 };

function renderProfileName(user: User): string {
  // Fixed: Check if profile exists before accessing name
  if (!user.profile) {
    return `Hello, Guest (User #${user.id})!`;
  }
  return `Hello, ${user.profile.name}!`;
}

export default function UserProfile() {
  const [greeting, setGreeting] = useState<string>('');

  const handleClick = () => {
    // This will now handle the case where profile is undefined
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
