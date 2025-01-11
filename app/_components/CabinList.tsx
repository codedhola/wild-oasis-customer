import { getCabins } from "../_lib/data-service";
import { Cabin } from "../_types/cabins";
import CabinCard from "./CabinCard";

interface CabinListProps {
    filter: string;     
}

export default async function CabinList({ filter }: CabinListProps) {

    const cabins: Cabin[] = await getCabins();

    if(!cabins.length) return null;

    let displayedCabins: Cabin[];
    if (filter === "all") displayedCabins = cabins;
    if (filter === "small")
      displayedCabins = cabins.filter((cabin) => cabin.max_capacity <= 3);
    if (filter === "medium")
      displayedCabins = cabins.filter(
        (cabin) => cabin.max_capacity >= 4 && cabin.max_capacity <= 7
      );
    if (filter === "large")
      displayedCabins = cabins.filter((cabin) => cabin.max_capacity >= 8);

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {displayedCabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    )
}
