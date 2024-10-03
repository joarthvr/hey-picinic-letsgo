import { useState, useMemo, ChangeEvent } from 'react';
import { css, useTheme } from '@emotion/react';
import { ThemeType } from '@/assets/styles/theme';
import data from '@/models/data.json';
import { getKeywordSearch } from '@/api/endpoints';
// import { SearchData } from '@/api/interfaces';
import { useNavigate } from 'react-router-dom';

interface homeInputProps {
  placeHolder: string;
  condition: number;
}
const InputForSearch = ({ placeHolder, condition }: homeInputProps) => {
  const navigate = useNavigate();
  const theme = useTheme() as ThemeType;
  const styles = useMemo(() => inputStyles(theme), [theme]);
  const [inputValue, setInputValue] = useState('');
  const [, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  const [selectedCity, setSelectedCity] = useState(
    data.citiesForSearch[0].city
  );
  //handler
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };
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
        const combinedKeyword = `${selectedCity}${inputValue}`.trim();
        const items = await getKeywordSearch({
          numOfRows: 10,
          pageNo: 1,
          listYN: 'Y',
          arrange: 'A',
          keyword: `${combinedKeyword}`,
          contentTypeId: condition,
          
        });
        console.log(combinedKeyword);
        console.log(items);
      } catch {
        setError('데이터를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };
    // 검색 결과 페이지로 이동
    navigate('/list', { 
      // state: { 
      //   items, 
      //   keyword: comb, 
      //   condition 
      // } 
    });
    fetchKeywordSearch();
  };
  return (
    <div css={styles.container}>
      <div css={styles.inputContainer}>
        <select
          css={styles.select}
          value={selectedCity}
          onChange={handleSelectChange}
        >
          {data.citiesForSearch.map((item) => {
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
export default InputForSearch;
