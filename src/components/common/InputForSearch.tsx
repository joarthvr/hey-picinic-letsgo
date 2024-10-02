import { useState, useMemo, ChangeEvent } from 'react';
import { css, useTheme } from '@emotion/react';
import { ThemeType } from '../../assets/styles/theme';
import cities from '../../models/data.json';
import SearchConditionBtn from '../home/SearchConditionBtn';
// import { useLocation } from 'react-router-dom';

const inputStyles = (theme: ThemeType) => ({
  container: css({
    color: '#fff',
    fontFamily: 'Pretendard',
    ...theme.interval.width,
    marginTop: '5.69rem',
    paddingBottom: '10.75rem',
  }),
  conditionContainer: {
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
const pagemove = ()=>{
  return ;
}
const InputForSearch = ({ placeHolder }: homeInputProps) => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => inputStyles(theme), [theme]);
  const [inputValue, setInputValue] = useState('');
  // const [searchType, setSearchType] = useState();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  console.log(inputValue);
  return (
    <div css={styles.container}>
      <div css={styles.conditionContainer}>
        <SearchConditionBtn onClick = {pagemove}title={'행사 검색'}/>
        <SearchConditionBtn onClick = {pagemove}title={'행사 검색'}/>
        <SearchConditionBtn onClick = {pagemove}title={'행사 검색'}/>
      </div>
      <div css={styles.inputContainer}>
        <select css={styles.select}>
          {cities.citiesForSearch.map((item) => {
            return <option key={item.id}>{item.city}</option>;
          })}
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

export default InputForSearch;
