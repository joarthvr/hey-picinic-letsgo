import { css, useTheme } from '@emotion/react';
import { ThemeType } from '@/assets/styles/theme';
import { useMemo } from 'react';
import Heart from '@/assets/images/heart.svg?react';
const HeartBtn = () => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => HeartBtnStyles(theme), [theme]);
  return <button css={styles.container}>
    <Heart css={styles.img}/>
  </button>;
};
const HeartBtnStyles = (theme: ThemeType) => ({
  container: css({
    width: '2.375rem',
    height: '2.375rem',
    background: '#fff',
    border: `1px solid rgba(0,0,0,0.2)`,
    borderRadius: '2rem',
    position: 'relative',
  }),
  img: css({
    position: 'absolute',
    ...theme.position.center,
    objectFit: 'cover',
    fill: 'red',
    border: 'none',
    
  })
});
export default HeartBtn;
