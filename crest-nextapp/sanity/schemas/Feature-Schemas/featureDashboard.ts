import { defineField, defineType } from "sanity";
import colorList from "@/app/utils/colors";
import dashboardList from '@/app/utils/dashboards';

export const featureDashboard = defineType({
  name: "Feature_Dashboard",
  type: "object",
  title: "Feature Dashboard",
  fields: [
    defineField({
      name: "Feature_Heading",
      type: "Feature_Heading",
      validation: (rule) => rule.required(), // Required
    }),

    defineField({
      name: "headingSubTextProp",
      title: "Heading SubText Property",
      type: "object",
      fields: [
        {
          name: "headingSubText",
          title: "Heading SubText",
          type: "string",
        },
        {
          name: "headingSubTextColor",
          title: "Heading Subtext color",
          type: "simplerColor",
          options: {
            colorList: colorList,
          },
        },
      ],
    }),
    defineField({
      name: "dashboardList",
      title: "Dashboard List",
      type: "string",
      options: {
        list: dashboardList
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
