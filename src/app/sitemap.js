export default async function sitemap() {
    const baseUrl = "https://dsquarecenter.com";
  
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/About`,
        lastModified: new Date(),
      },
    
      {
        url: `${baseUrl}/Gallery`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/Contact`,
        lastModified: new Date(),
      },
     
    ];
  }
  