const path = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers: RequestInit = {
  method: 'get',
  mode: 'cors',
  cache: 'default',
};

export interface CountryData {
  country?: string;
  cases?: number;
  todayCases?: number;
  deaths?: number;
  todayDeaths?: number;
  recovered?: number;
  active?: number;
  critical?: number;
  casesPerOneMillion?: number;
  deathsPerOneMillion?: number;
  totalTests?: number;
  testsPerOneMillion?: number;
}

function getCountry(country: string) {
  return fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
    .catch(function (err) {
      console.error('Failed retrieving information', err);
    });
}

export default {
  getCountry,
};
