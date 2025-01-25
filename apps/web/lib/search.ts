interface SearchOptions {
  query: string;
  filters?: {
    tags?: string[];
    owner?: string;
  };
}

/**
 * Search for collections based on the provided options.
 * @param data - The array of collections to search.
 * @param options - The search options.
 * @returns The filtered array of collections.
 */
export function searchCollections(data: any[], options: SearchOptions) {
  const { query, filters } = options;
  
  return data.filter((item) => {
    const matchesQuery = 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.owner.toLowerCase().includes(query.toLowerCase());

    if (!matchesQuery) return false;

    if (filters?.tags?.length) {
      const hasMatchingTag = item.tags.some((tag: string) => 
        filters.tags?.includes(tag.toLowerCase())
      );
      if (!hasMatchingTag) return false;
    }

    if (filters?.owner) {
      if (item.owner.toLowerCase() !== filters.owner.toLowerCase()) return false;
    }

    return true;
  });
} 