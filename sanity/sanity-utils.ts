import { createClient, groq } from "next-sanity";
import { Mantra } from "../types/Mantra";
import clientConfig from "./config/client-config";

export async function getMantras(): Promise<Mantra[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "mantras"]{
            _id,
            _creaatedAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  );
}

export async function getMantra(slug: string): Promise<Mantra> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "mantras" && slug.current == $slug][0]{
                _id,
                _creaatedAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                url,
                content
            }`,
    { slug }
  );
}

export async function getUserMantra(slug: string): Promise<Mantra> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "mantras" && slug._id == $slug][0]{
                _id,
                _creaatedAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                url,
                content
            }`,
    { slug }
  );
}
