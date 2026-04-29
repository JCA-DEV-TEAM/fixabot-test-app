'use client';

import { useState } from 'react';

interface ApiData {
  message: string;
  timestamp: string;
}

export default function DataLoader() {
  const [data, setData] = useState<ApiData | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    setError('');
    setData(null);
    try {
      const res = await fetch('/api/data');
      if (!res.ok) {
        throw new Error(`API returned ${res.status} ${res.statusText}`);
      }
      const json = (await res.json()) as ApiData;
      setData(json);
    } catch (err: any) {
      setError(err.message ?? String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>3. Data loader</h2>
      <p>Fetches a JSON message from <code>/api/data</code>. Currently returns 404.</p>
      <button onClick={loadData} disabled={loading}>
        {loading ? 'Loading…' : 'Load data'}
      </button>
      {data && <div className="value" style={{ marginTop: 12 }}>{data.message}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
}
