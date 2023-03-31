import { ChangeEvent } from 'react';
import './search-box.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
