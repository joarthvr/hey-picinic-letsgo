import { css } from '@emotion/react';
import CircleImgBox from '../common/CircleImgBox';
type HomeFestivalCardProps = {
  city: string;
};

const cardStyle = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    fontFamaily: 'Pretendard',
    width: '9.5rem',
    height: '12.75rem',
    flexShrink: 0,
    background: '#fff',
    fontFamily: 'Pretendard',
    borderRadius: '1.5625rem',
    boxShadow: '4px 4px 14.2px 0px rgba(0, 0, 0, 0.16)',
    padding: '1.62rem 1.75rem 0 1.75rem',

  }),
  text: css({
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    textAlign: 'center',
    marginTop: '2.75rem',
  }),
};

export default function HomeFestivalCard({ city }: HomeFestivalCardProps) {
  return (
    <div css={cardStyle.container}>
      <CircleImgBox subject={city} />
      <p css={cardStyle.text}>{city}</p>
    </div>
  );
}
