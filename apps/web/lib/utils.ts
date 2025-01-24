interface Registry {
    owner: string;
    name: string;
    description: string;
    tags: string[];
    stars: number;
    downloads: number;
  }
  
  /**
   * Sorts registry items by popularity using a weighted score of stars and downloads
   * @param registries Array of registry items to sort
   * @param starWeight Weight given to star count (default: 0.6)
   * @param downloadWeight Weight given to download count (default: 0.4)
   * @returns Sorted array of registry items
   */
  export function sortByPopularity(
    registries: Registry[],
    starWeight = 0.6,
    downloadWeight = 0.4
  ): Registry[] {
    // Calculate max values for normalization
    const maxStars = Math.max(...registries.map(r => r.stars));
    const maxDownloads = Math.max(...registries.map(r => r.downloads));
  
    return [...registries].sort((a, b) => {
      // Normalize values between 0 and 1
      const aStarScore = a.stars / maxStars;
      const bStarScore = b.stars / maxStars;
      const aDownloadScore = a.downloads / maxDownloads;
      const bDownloadScore = b.downloads / maxDownloads;
  
      // Calculate weighted scores
      const aScore = (aStarScore * starWeight) + (aDownloadScore * downloadWeight);
      const bScore = (bStarScore * starWeight) + (bDownloadScore * downloadWeight);
  
      // Sort in descending order
      return bScore - aScore;
    });
  }