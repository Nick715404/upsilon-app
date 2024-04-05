import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../api/products';

type Props = {
  children: React.ReactNode
}

export default function InitAppEntities({ children }: Props) {

  const dispatch: any = useDispatch();
  const limiter = useSelector((state: any) => state.limiter.limit);

  useEffect(() => {
    dispatch(fetchProducts({ limit: limiter }))
  }, [dispatch, limiter])

  return (
    <>
      {children}
    </>
  )
}