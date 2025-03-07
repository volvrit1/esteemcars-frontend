const BASE_URL = "http://localhost:5000";

export interface ProductData {
  result: {
    _id: string;
    name: string;
    description: string;
    coverImage: string;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }[];
}
export interface SubContent {
  title: string;
  description: string;
  _id?: string;
}

export interface ISection {
  title: string;
  subtitle: string;
  description: string;
  subContents: SubContent[];
  deletedAt: null | string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  image1?: string;
  image2?: string;
}

export interface IPageResponse {
  title: string;
  subTitle: string;
  description: string;
  section1?: ISection;
  section2?: ISection;
  section3?: ISection;
  section4?: ISection;
  section5?: ISection;
  section6?: ISection;
  section7?: ISection;
  section8?: ISection;
  deletedAt: null | string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  videoUrl: string;
}

export interface Content {
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  icon: string;
  video: string;
  date?: string;
  _id: string;
}

export interface SectionData {
  title: string;
  subTitle: string;
  description: string;
  coverImage: string;
  videoUrl: string;
  link?: string;
  contents: Content[];
}

export const getData = async (url: string) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error("Failed to fetch section data");
    }
    const res = await response.json();
    return res.data.result;
  } catch (error) {
    console.error("Error fetching section data:", error);
    return null;
  }
};

// export const getHomeData = async () => {
//   const heroSection = await getData("/api/page");
//   const whoWeAreSection = await getData("/api/section");
//   const serviceSection = await getData("/api/section");
//   const videoSection = await getData("/api/section");
//   const weBestSection = await getData("/api/section");
//   const ourPartnerSection = await getData("/api/section");
//   const whySection = await getData("/api/section");
//   const newsSection = await getData("/api/news");

//   return {
//     heroSection,
//     whoWeAreSection,
//     serviceSection,
//     videoSection,
//     weBestSection,
//     ourPartnerSection,
//     whySection,
//     newsSection,
//   };
// };

export const getHomeData = async () => {
  const homePageData: IPageResponse[] = await getData("/api/home");
  if (homePageData.length === 0) return { loading: false };

  const {
    title,
    subTitle,
    description,
    videoUrl,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
  } = homePageData[0];

  const loading = title && subTitle && description && videoUrl ? true : false;
  return {
    title,
    subTitle,
    description,
    videoUrl,
    loading,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
  };
};

export const getAboutData = async () => {
  const aboutPageData: IPageResponse[] = await getData("/api/about");
  if (aboutPageData.length === 0) return { loading: false };

  const {
    title,
    subTitle,
    description,
    videoUrl,
    section1,
    section2,
    section3,
    section4,
  } = aboutPageData[0];
  const loading = title && subTitle && description && videoUrl ? true : false;
  return {
    title,
    subTitle,
    description,
    videoUrl,
    loading,
    section1,
    section2,
    section3,
    section4,
  };
};

export const getServiceData = async () => {
  const servicePageData: IPageResponse[] = await getData("/api/service");
  if (servicePageData.length === 0) return { loading: false };

  const {
    title,
    subTitle,
    description,
    videoUrl,
    section1,
    section2,
    section3,
    section4,
    section5,
  } = servicePageData[0];
  const loading = title && subTitle && description && videoUrl ? true : false;
  return {
    title,
    subTitle,
    description,
    videoUrl,
    loading,
    section1,
    section2,
    section3,
    section4,
    section5,
  };
};

export const getTechnologyData = async () => {
  const technologyPageData: IPageResponse[] = await getData("/api/technology");
  if (technologyPageData.length === 0) return { loading: false };

  const {
    title,
    subTitle,
    description,
    videoUrl,
    section1,
    section2,
    section3,
    section4,
  } = technologyPageData[0];
  const loading = title && subTitle && description && videoUrl ? true : false;
  return {
    title,
    subTitle,
    description,
    videoUrl,
    loading,
    section1,
    section2,
    section3,
    section4,
  };
};

export const getCareerData = async () => {
  const careerPageData: IPageResponse[] = await getData("/api/career");
  if (careerPageData.length === 0) return { loading: false };

  const {
    title,
    subTitle,
    description,
    videoUrl,
    section1,
    section2,
    section3,
  } = careerPageData[0];
  const loading = title && subTitle && description && videoUrl ? true : false;
  return {
    title,
    subTitle,
    description,
    videoUrl,
    loading,
    section1,
    section2,
    section3,
  };
};
export const getApplicationData = async () => {
  const applicationPageData: IPageResponse[] = await getData(
    "/api/application"
  );
  if (applicationPageData.length === 0) return { loading: false };
  const {
    title,
    subTitle,
    description,
    videoUrl,
    section1,
    section2,
    section3,
    section4,
  } = applicationPageData[0];
  const loading = title && subTitle && description && videoUrl ? true : false;
  return {
    loading,
    title,
    subTitle,
    description,
    videoUrl,
    section1,
    section2,
    section3,
    section4,
  };
};

export const getBlogData = async () => {
  const blogPageData: any[] = await getData("/api/blog");
  if (blogPageData.length === 0) return { loading: false };

  const loading = blogPageData.length === 0 ? false : true;
  return {
    loading,
    blogPageData,
  };
};

export const getBlogSlugData = async (slug: any) => {
  const blogPageSlugData: any[] = await getData(`/api/blog?slug=${slug}`);
  if (blogPageSlugData.length === 0) return { loading: false };

  const loading = blogPageSlugData.length === 0 ? false : true;
  return {
    loading,
    blogPageSlugData,
  };
};
