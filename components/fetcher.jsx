import { useEffect, useState } from 'react';
import { ErrorIndicator } from './error-indicator';
import { Spinner } from './spinner';

export function Fetcher({
  url,
  SpinnerComponent = Spinner,
  ErrorComponent = ErrorIndicator,
  DataComponent
}) {
  const
    [data, setData] = useState(null),
    [error, setError] = useState(null);
  useEffect(() => {
    console.debug('useEffect');
    setError(null);
    f();
    async function f(params) {
      console.debug('useEffect f');
      try {
        const
          response = await fetch(url),
          obj = await response.json();
        if (!response.ok) throw new Error(response.status + response.statusText);
        setData(obj);
        console.debug('useEffect f +');
      } catch (err) {
        setError(err);
      }
    }
  }, [url]);
  console.debug('render Fetcher', { error, data });
  if (error) return <ErrorComponent error={error} />
  if (data) return <DataComponent data={data} />
  return <SpinnerComponent />
}