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
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error("Failed to fetch section data");
    }
    const res = await response.json();
    return res.data.result;
  } catch (error) {
    console.log("Error fetching section data:", error);
    return null;
  }
};

export const getTestimonials = async () => {
  const testimonialsData: any = await getData("/api/testimonial");
  if (testimonialsData.length === 0) return { loading: false };
  const loading = testimonialsData.length === 0 ? true : false;
  return { loading, data: testimonialsData };
};

export const getFaqs = async () => {
  const faqData: any = await getData("/api/faq");

  return { data: faqData };
};

export const getBanners = async (slug: any) => {
  const bannerData: any = await getData(`/api/banner?slug=${slug}`);
  return { data: bannerData };
};

export const getBlogData = async () => {
  const blogPageData: any[] = await getData("/api/blog");
  console.log(blogPageData);
  return {
    data: blogPageData,
  };
};

export const getBlogSlugData = async (slug: any) => {
  const blogPageSlugData: any[] = await getData(`/api/blog?slug=${slug}`);
  return {
    blogPageSlugData,
  };
};
