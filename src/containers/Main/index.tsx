import React, { memo, useState, useCallback, useEffect } from 'react';
import api, { CountryData } from '../../config/api';
import Panel from './components/Panel';
import { MainContainer } from './styled';

const Main = () => {
  const [data, setData] = useState<CountryData>({});
  const [country, setCountry] = useState('brazil');
  const updateAt = new Date().toLocaleString();

  const getCovidData = useCallback((country) => {
    api.getCountry(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => {
    const country = event.target.value as string;
    setCountry(country);
  };

  return (
    <MainContainer>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
    </MainContainer>
  );
};

export default memo(Main);
