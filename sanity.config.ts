import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";

const config = defineConfig({
  projectId: "smrb8gui",
  dataset: "production",
  title: "Mantras",
  apiVersion: "2023-10-01",
  basePath: "/admin",
  plugins: [
    deskTool(),
    visionTool(),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: "sa", title: "Sanskrit" },
        { id: "en", title: "English" },
      ],
      schemaTypes: [schemas[0].name],
    }),
  ],
  schema: { types: schemas },
});

export default config;
