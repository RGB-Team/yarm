import dummyData from "@/data/dummy.json";

export type SortOption = 'relevance' | 'popularity' | 'stars' | 'updated';
export type Framework = 'React' | 'Vue' | 'Svelte' | 'Web Components';
export type ContentType = 'Components' | 'Collections' | 'Templates';

interface SearchParams {
  query?: string;
  sort?: SortOption;
  frameworks?: Framework[];
  types?: ContentType[];
  tags?: string[];
  page?: number;
  limit?: number;
}

export async function searchCollections(params: SearchParams): Promise<{
  items: typeof dummyData.collections;
  total: number;
}> {
  // TODO: Replace with actual DB query
  let results = [...dummyData.collections];

  if (params.query) {
    results = results.filter(item => 
      item.name.toLowerCase().includes(params.query!.toLowerCase()) ||
      item.description.toLowerCase().includes(params.query!.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(params.query!.toLowerCase()))
    );
  }

  if (params.frameworks?.length) {
    results = results.filter(item => 
      params.frameworks!.some(framework => 
        item.tags.includes(framework.toLowerCase())
      )
    );
  }

  if (params.types?.length) {
    results = results.filter(item => 
      params.types!.some(type => 
        item.tags.includes(type.toLowerCase())
      )
    );
  }

  if (params.tags?.length) {
    results = results.filter(item => 
      params.tags!.some(tag => item.tags.includes(tag))
    );
  }

  // Sort results
  switch (params.sort) {
    case 'stars':
      results.sort((a, b) => b.stars - a.stars);
      break;
    case 'updated':
      // TODO: Add updated_at field to collections
      break;
    case 'popularity':
      results.sort((a, b) => b.downloads - a.downloads);
      break;
  }

  const start = (params.page || 0) * (params.limit || 10);
  const end = start + (params.limit || 10);
  
  return {
    items: results.slice(start, end),
    total: results.length
  };
} 