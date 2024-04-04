import { useSelector } from "react-redux";

type Props = {}

export default function ProductList({ }: Props) {

  const products = useSelector((state: any) => state.products.products)

  return (
    <div>
      {products.map((item: any) => (
        <div key={item.id} className="">
          {item.title}
        </div>
      ))}
    </div>
  )
}