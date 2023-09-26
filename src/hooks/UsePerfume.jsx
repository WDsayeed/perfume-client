import { useQuery } from "@tanstack/react-query";


const UsePerfume = () => {
        const { data: allPerfume =  [], isLoading: loading, refetch} = useQuery({
                queryKey: ['allPerfume'],
                queryFn: async () => {
                        const res = await fetch("http://localhost:5000/allPerfume");
                        return res.json()
                }
        })
        return [allPerfume, loading, refetch]
};

export default UsePerfume;