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
                content,
                "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
                  title,
                  slug,
                  language
                },
            }`,
    { slug }
  );
}

export async function getUserMantra(ids: Array<string>): Promise<Mantra[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "mantras" && _id in $string_ids]{
                _id,
                _creaatedAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                url,
                content
            }`,
    {
      string_ids: ids,
    }
  );
}
