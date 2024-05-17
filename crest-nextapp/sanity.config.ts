import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { iconPicker } from 'sanity-plugin-icon-picker';
import {colorInput} from '@sanity/color-input'

const config = defineConfig({
  projectId: "7xkjaifb",

  dataset: "production",

  title: "Crest-website",

  apiVersion: "03-07-2024",

  basePath: "/sanityadmin",

  plugins: [
    structureTool(),
    visionTool(),

    simplerColorInput({
      defaultColorFormat: "rgba",
      defaultColorList: [{ label: "Custom", value: "custom" }],
      enableSearch: true
    }),

    iconPicker(),

    colorInput(),
  ],

  schema: { types: schemaTypes },
});

export default config;
