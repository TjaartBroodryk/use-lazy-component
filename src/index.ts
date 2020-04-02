import { useEffect, useState } from 'react'

interface LazyComponent<T> {
  loading: boolean;
  component?: T;
  error?: Error;
}

/**
 * Lazily load a component
 * @param fn an import function that returns a default exported component
 * @param inputs 
 */
const useLazyComponent = <T>(fn: () => Promise<{default: T}>, inputs = []): LazyComponent<T> => {
  const [ data, setData ] = useState<{default: T}>();
  const [ error, setError ] = useState<Error>();
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const result = await fn();
        console.log("HERE");
        console.log(result)
        setData(result);
      }
      catch (error) {
        setError(error);
      }

      setLoading(false)
    }

    fetchData();
  }, inputs)

  return { loading, component: data?.default, error }
}

export default useLazyComponent;