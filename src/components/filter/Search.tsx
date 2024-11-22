import { Input } from "../ui/input"


const Search = () => {
  return (
    <div className='p-4 flex justify-center'>
      {/* Use 'query' for the default value and onChange for live updates */}
      <Input
        type="text"
        placeholder="Search..."
        defaultValue={''} // Retrieve current 'query' param
        // onChange={(e) => handleSearch(e.target.value)} // Call handleSearch when the input changes
      className='min-w-[331px] lg:max-w-[651px] p-4  text-white rounded-2xl bg-[#3A3F47]'/>
    </div>
  )
}

export default Search