import { useQuery } from "@tanstack/react-query";


const useWish=() =>{
  const {data,isLoading,isFetching,refetch}=useQuery({
    queryKey:['popular'],
    queryFn:async()=>{
        const popular =await fetch('http://localhost:5000/popular')
        return  popular.json()
    }
  })

  return {data,isLoading,isFetching,refetch}
};

export default useWish;