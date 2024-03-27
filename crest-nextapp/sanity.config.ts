import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './sanity/schemas';



const config = defineConfig({

    projectId :"7xkjaifb",

    dataset : "production",

    title : "Crest-website",

    apiVersion : "03-07-2024",

    basePath : "/sanityadmin",
    
    plugins: [structureTool(),visionTool()],

    schema: {types: schemaTypes },
})

export default config; 