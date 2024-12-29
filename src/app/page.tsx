import { client } from "@/sanity/lib/client";
import Image from "next/image";


export default async function Home() {
  // Fetching pets from Sanity
  const pets = await client.fetch(`*[_type == "pets"]`);
  return (
    <>
    <h1>
      {
        pets.map((petss : any) =>{
          <h1>
          petss.name
          </h1>
        })
      }
    </h1>
    </>
  );
}
