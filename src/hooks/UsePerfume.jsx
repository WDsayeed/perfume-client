import { useQuery } from "@tanstack/react-query";


const UsePerfume = () => {
        const { data: allPerfume =  [], isLoading: loading, refetch} = useQuery({
                queryKey: ['allPerfume'],
                queryFn: async () => {
                        const res = await fetch("https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/allPerfume");
                        return res.json()
                }
        })
        return [allPerfume, loading, refetch]
};

export default UsePerfume;