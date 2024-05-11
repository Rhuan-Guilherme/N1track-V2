import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function request(url, options) {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(url, options);
      if (!response.ok)
        throw new Error(
          'E-mail ja cadastrado! Tente novamente com outro e-mail.',
        );
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, request };
};

export default useFetch;
