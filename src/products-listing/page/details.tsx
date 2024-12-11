import { useProductStore } from "../store/store"

const Detail = () => {
  const {detailProducts}=useProductStore()
  return (
    <div className="text-wrap text-[#808080] font-medium">
      {detailProducts.description}
    </div>
  )
}

export default Detail