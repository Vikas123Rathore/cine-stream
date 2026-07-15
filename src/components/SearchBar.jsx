import { FaSearch } from 'react-icons/fa'

const SearchBar = ({
  value,
  onChange,
  placeholder = 'Search movies...',
  wrapperClassName = '',
  inputClassName = '',
  iconClassName = '',
}) => {
  return (
    <div className={`relative ${wrapperClassName}`.trim()}>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        className={`bg-slate-900 border border-slate-800 text-sm rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all duration-300 ${inputClassName}`.trim()}
      />
      <FaSearch
        className={`absolute left-3.5 top-3 text-slate-500 text-xs ${iconClassName}`.trim()}
      />
    </div>
  )
}

export default SearchBar
