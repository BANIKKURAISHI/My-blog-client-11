import { useQuery } from "@tanstack/react-query";


const useWish=() =>{
  const {data,isLoading,isFetching,refetch}=useQuery({
    queryKey:['popular'],
    queryFn:async()=>{
        const popular =await fetch('https://my-blog-server-side.vercel.app/popular')
        return  popular.json()
    }
  })

  return {data,isLoading,isFetching,refetch}
};

export default useWish;