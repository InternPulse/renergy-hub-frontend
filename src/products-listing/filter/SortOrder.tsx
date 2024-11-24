import {useState} from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel, SelectGroup } from "../../components/ui/select";
const SortOrder = () => {

      const [item, setItem]= useState<[]>([]);
       
      const sortData = [{ id: "default", name: "Default " },
        { value: "na-z", name: "Name (A > Z) " },
        { value: "nz-a", name: "Name (Z > A)" },
        { value: "ma-z", name: "Model (A > Z)" },
        { value: "mz-a", name: "Model (Z > A)" },
        { value: "pl-h", name: "Price (Low > High)" },
        { value: "ph-l", name: "Price (High > Low)" },
        { value: "rh-l", name: "Ratings (High > Low)" },
        { value: "rl-h", name: "Ratings (Low > High)" } ]


  return (
    <div>

<Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

        
    </div>
  )
}

export default SortOrder