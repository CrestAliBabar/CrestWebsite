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
    const slug = "service";
    const pageId = "c18529bce2f2";
    const result = await getNavigationTitle(slug, pageId);
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item) => typeof item === "object")).toBe(true);
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
