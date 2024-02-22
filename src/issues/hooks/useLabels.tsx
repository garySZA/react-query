import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";
import { sleep } from "../../helpers/sleep";


const getLabels = async ():Promise<Label[]> => {
    await sleep(2);
    
    const { data } = await githubApi.get<Label[]>('/labels?per_page=100');
    return data;
}

export const useLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        // staleTime: 1000 * 60 * 60,
        // placeholderData: []
        // initialData: [],
        placeholderData: [
            {
                id: 791921801,
                node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
                url:"https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
                name:"❤️",
                color:"ffffff",
                default:false,
            },
            {
                id: 2281766624,
                node_id: "MDU6TGFiZWwyMjgxNzY2NjI0",
                url: "https://api.github.com/repos/facebook/react/labels/Component:%20Scheduling%20Profiler",
                name: "Component: Scheduling Profiler",
                color: "1dc3d6",
                default: false, 
                description:""}
        ]
    });
    
    return labelsQuery;
}
