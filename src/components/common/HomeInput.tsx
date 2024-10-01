import { useState, useMemo, ChangeEvent } from 'react';

import { css, useTheme } from '@emotion/react';
import { ThemeType } from '../../assets/styles/theme';
const homeInputStyles = (theme: ThemeType) => ({
  container: css({
    color: '#fff',
    fontFamily: 'Pretendard',
    ...theme.interval.width,
    marginTop: '5.69rem',
    paddingBottom: '10.75rem',
  }),
  ul: {
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    display: 'flex',
    gap: '1.5rem',
    width: '240px',
    textAlign: 'center' as const,
    margin: 'auto',
    marginBottom: '2.37rem',
  },
  li: {
    margin: 0,
    whiteSpace: 'nowrap',
    width: 'auto',
  },
  input: css({
    ...theme.input.homeInput,
    width: '99.546%',
  }),
  select: css({
    width: '14.85%',
    ...theme.select.homeSelect,
  }),
  inputContainer: css({
    display: 'flex',
    margin: 'auto',
    width: '100%',
    padding: '0 3rem 0 1.5rem',
    gap: '0.3rem',
  }),
});
interface homeInputProps {
  placeHolder: string;
}
const HomeInput = ({ placeHolder }: homeInputProps) => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => homeInputStyles(theme), [theme]);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  console.log(inputValue);
  return (
    <div css={styles.container}>
      <ul css={styles.ul}>
        <li css={styles.li}>행사 검색</li>
        <li css={styles.li}>숙소 검색</li>
        <li css={styles.li}>관광지 검색</li>
      </ul>
      <div css={styles.inputContainer}>
        <select css={styles.select}>
          <option>서울</option>
        </select>
        <input
          placeholder={placeHolder}
          css={styles.input}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default HomeInput;
