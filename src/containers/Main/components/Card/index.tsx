import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card as CardUI } from '../../../../components';
import { formatNumber } from '../../../../utils/formatNumber';
import { LabelStyled, ValueStyled, CardContentStyled } from './styled';

interface CardProps {
  label: string;
  color: string;
  value: number | JSX.Element;
}

function Card({ value, label, color }: CardProps) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>
          {typeof value !== 'object' ? formatNumber(value) : 0}
        </ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  );
}

Card.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.number.isRequired,
  ]),
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default memo(Card);
