import React, { memo } from 'react';
import RefreshIcon from '../../../../assets/images/refresh.svg';
import {
  Card,
  Typography,
  Select,
  MenuItem,
  Button,
} from '../../../../components';
import COUNTRIES, { Country } from '../../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled } from './styled';
import { CountryData } from '../../../../config/api';

interface PanelProps {
  updateAt: string;
  country: string;
  data: CountryData;
  onChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => void;
  getCovidData: (country: string) => void;
}

const navigatorHasShare = navigator.share;

function Panel({
  updateAt,
  country,
  data,
  onChange,
  getCovidData,
}: PanelProps) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const renderCountries = (country: Country, index: number) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  const textCovid19 = `País: ${country} - Dados atualizados em ${updateAt} - Hoje - Casos: ${todayCases}. Óbitos: ${todayDeaths}. Total - Casos: ${cases}. Óbitos: ${deaths}. Recuperados: ${recovered}`;

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://diocovid19pwa.netlify.app/',
    });
  };

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID19
          </Typography>
          <Typography variant="h6" component="p">
            Painel Coronavírus
          </Typography>
          <Typography variant="body2" component="span" color="secondary">
            Atualizado em: {updateAt}
          </Typography>
          <img
            src={RefreshIcon}
            alt="Atualizar"
            onClick={() => getCovidData(country)}
            className="cursor"
          />
          <div className="pt-2">
            <Select
              onChange={(
                event: React.ChangeEvent<{
                  name?: string | undefined;
                  value: unknown;
                }>,
              ) => onChange(event)}
              value={country}
            >
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare?.length ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
