
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup } from "../../../components/ui/select";
import { useProductStore } from '../../store/store';


//this component is for the SortOrder Functionality
const SortOrder = () => {

      //get setSort function, and sort state from the useProductStore 
       const {setSort,sort} = useProductStore()

       //Sort order
      const sortData = [{ value: "default", name: "Default " },
        { value: "na-z", name: "Name (A > Z)" },
        { value: "nz-a", name: "Name (Z > A)" },
        { value: "ma-z", name: "Model (A > Z)" },
        { value: "mz-a", name: "Model (Z > A)" },
        { value: "pl-h", name: "Price (Low > High)" },
        { value: "ph-l", name: "Price (High > Low)" },
        { value: "rh-l", name: "Ratings (High > Low)" },
        { value: "rl-h", name: "Ratings (Low > High)" } ]


        const handleClick = (value:any) => {
          setSort(value);
        };


  return (
                      <div className="flex flex-col max-w-md ">
                  {/* the selected item form the selectitem array is displayed here */}

                    <Select value={sort} onValueChange={(value) => handleClick(value)} >
                    <SelectTrigger className="w-[200px]">
                      
                      <SelectValue placeholder="Sort by default" className="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel onClick={}>Fruits</SelectLabel> */}

                        {sortData.map((sort,index) => (
                           <SelectItem value={sort.value} key={index}>{sort.name}</SelectItem>
                        ))}
                       </SelectGroup>
                    </SelectContent>
                  </Select>
             
 </div>
  )
}

export default SortOrder