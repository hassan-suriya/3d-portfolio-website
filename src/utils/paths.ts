// Helper function to prefix paths with the basePath from Next.js config
export function getBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
}
