import { css, useTheme } from '@emotion/react';
import { ThemeType } from '@/assets/styles/theme';
import { useMemo } from 'react';
interface ShowDetailBtnProps {
  title: string | '상세 정보';
}
const ShowDetailBtn = ({ title }: ShowDetailBtnProps) => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => ShowDetailBtnStyles(theme), [theme]);
  return <button css={styles.container}>{title}</button>;
};
const ShowDetailBtnStyles = (theme: ThemeType) => ({
  container: css({
    width: '7.5rem',
    height: '2.625rem',
    fontFamily: 'Pretendard',
    color: '#FFF',
    textAlign: 'center',
    fontSize: '0.8125rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    background: theme.colors.MAIN_BLUE,
    borderRadius: '0.4375rem',
  }),
});

export default ShowDetailBtn;
