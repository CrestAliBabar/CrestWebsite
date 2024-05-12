import {
  getHomePageContent,
  getLayoutSettings,
  getNavigationTitle,
  getPageInfo,
} from "./sanity-utils";

describe("When executing getPageInfo()", () => {
  it("should return an array of PageInfoType objects", async () => {
    const selectedTabName = "exampleTab";
    const result = await getPageInfo(selectedTabName);
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item) => typeof item === "object")).toBe(true);
  });
});

describe("When executing getLayoutSettings()", () => {
  it("should return an array of LayoutType objects", async () => {
    const result = await getLayoutSettings();
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item) => typeof item === "object")).toBe(true);
  });
});

describe("When executing getNavigationTitle()", () => {
  it("should return page contents when slug and pageId are provided", async () => {
    const mockSlug = "tools";
    const mockPageId = "ddd1ac88074f";
    const result = await getNavigationTitle(mockSlug, mockPageId);
    const mockPageBuilder = [
      {
        _key: "533f168a8ef7",
        image: {
          _type: "image",
          asset: {
            _ref: "image-e2e42c7281e99b3027192eafb32ffd43741f8300-1974x1352-jpg",
            _type: "reference",
          },
        },
        _type: "Hero_without_Button",
        Hero_Heading: {
          _type: "Hero_Heading",
          subHeadingProp: {
            subHeading: "(DLT)",
            subHeadingColor: {
              label: "white",
              value: "#ffffff",
            },
          },
          headingProp: {
            heading: "DLT System Engineer Automation",
            headingColor: {
              label: "white",
              value: "#ffffff",
            },
          },
        },
      },
      {
        text: "DLT System Engineer Automation",
        _key: "7a3476424204",
        _type: "pageTitle",
      },
      {
        _type: "paragraph",
        text: "Our research focuses on providing automated solutions for the design, development, and prototyping of DLT networks. From rapid prototyping platforms to model-driven approaches and data-driven recommendation mechanisms, our goal is to empower organizations to quickly iterate on network designs, validate ideas efficiently, and make informed decisions based on data insights. By automating key aspects of DLT system engineering, we aim to accelerate the adoption of DLT technologies and fuel innovation across industries",
        _key: "afa8679cd0b6",
      },
      {
        _type: "pageHeading",
        text: "Design and Development of Platforms for Rapid Prototyping of DLT Networks",
        _key: "59a881fcf7e1",
      },
      {
        _type: "paragraph",
        text: "Our research focuses on accelerating the development and deployment of Distributed Ledger Technology (DLT) networks through the design and development of platforms for rapid prototyping. These platforms enable organisations to experiment with different DLT configurations quickly, test new ideas, and iterate on network designs without requiring extensive manual coding. By providing tools and frameworks for rapid prototyping, we empower businesses to explore the potential of DLT cost-effectively and efficiently.",
        _key: "c9df75a05f92",
      },
      {
        _type: "pageHeading",
        text: "Development of Model-Driven Approaches to DLT System Engineering",
        _key: "1af6c75fb236",
      },
      {
        _type: "paragraph",
        text: "We are pioneering model-driven approaches to DLT system engineering, leveraging advanced modelling techniques to streamline the development process. By creating high-level models that capture the essential aspects of DLT systems, we enable developers to design, analyse, and validate their systems before implementation. This approach reduces development time, minimises errors, and facilitates stakeholder collaboration. We aim to provide developers with the tools they need to build robust, scalable, and interoperable DLT systems.",
        _key: "fe4d2a239a5e",
      },
      {
        _type: "pageHeading",
        text: "Development of Data-Driven Recommendation Mechanisms for DLT System Design",
        _key: "f6f08cac2669",
      },
      {
        text: "In addition to model-driven approaches, we are developing data-driven recommendation mechanisms to assist in DLT system design. By analysing data from existing DLT deployments and real-world use cases, we can identify patterns, trends, and best practices that inform system design decisions. These recommendation mechanisms provide valuable insights into optimal configuration settings, consensus algorithms, and network architectures, helping organisations design DLT systems that meet their specific needs and objectives.",
        _key: "49dbcd749f05",
        _type: "paragraph",
      },
    ];

    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item) => typeof item === "object")).toBe(true);
    expect(result[0].pages[0].pageBuilder).toEqual(mockPageBuilder);
  });

  it("should return all navigation titles with pages when slug and pageId are not provided", async () => {
    const result = await getNavigationTitle();
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item) => typeof item === "object")).toBe(true);
  });
});

describe("When executing getHomePageContent()", () => {
  it("should return an array of objects representing the home page content", async () => {
    const result = await getHomePageContent();
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item) => typeof item === "object")).toBe(true);
  });
});
