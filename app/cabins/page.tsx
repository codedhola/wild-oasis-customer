import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";


export const revalidate = 3600;
// export const revalidate = 15;

export const metadata = {
  title: 'Cabins',
}   

export default function Page() {

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      <Suspense fallback={
        <div className="grid items-center justify-center">
          <Spinner />
          <p className="text-xl text-primary-200">Loading cabin data...</p>
        </div>
        }>
        <CabinList /> 
      </Suspense>

    </div>
  );
}