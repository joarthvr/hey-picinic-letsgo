import { useState, useMemo, ChangeEvent, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';
import { ThemeType } from '../../assets/styles/theme';
import cities from '../../models/data.json';
import { getKeywordSearch } from '@/api/endpoints';
import { SearchData } from '@/api/interfaces';
const inputStyles = (theme: ThemeType) => ({
  container: css({
    color: '#fff',
    fontFamily: 'Pretendard',
    ...theme.interval.width,
    // paddingBottom: '10.75rem',
  }),
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

const InputForSearch = ({ placeHolder }: homeInputProps) => {
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => inputStyles(theme), [theme]);
  const [inputValue, setInputValue] = useState('');
  const [, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);
  const [searchItems, setSearchItems] = useState<SearchData[]>([]);

  //handler
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 폼 제출 방지
      handleSearch();
    }
  };
  const handleSearch = () => {
    const fetchKeywordSearch = async () => {
      try {
        setLoading(true);
        const items = await getKeywordSearch({
          numOfRows: 10,
          pageNo: 1,
          listYN: 'Y',
          arrange: 'A',
          keyword: '강원',
          contentTypeId: 12,
        });
        setSearchItems(items);
        console.log(searchItems);
      } catch {
        setError('데이터를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchKeywordSearch();
  };

  return (
    <div css={styles.container}>
      <div css={styles.inputContainer}>
        <select css={styles.select}>
          {cities.citiesForSearch.map((item) => {
            return <option key={item.id}>{item.city}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder={placeHolder}
          css={styles.input}
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default InputForSearch;
