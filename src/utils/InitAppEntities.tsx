import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../api/products';

type Props = {
  children: React.ReactNode
}

export default function InitAppEntities({ children }: Props) {

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      {children}
    </>
  )
}