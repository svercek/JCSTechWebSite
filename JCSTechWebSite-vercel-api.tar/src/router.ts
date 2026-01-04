import { Link as RouterLink, Navigate as RouterNavigate, useNavigate as useRouterNavigate, useParams as useRouterParams } from 'react-router-dom';
// Type-safe navigation types
export type Path = '/' | '/traditional-development' | '/ai-solutions' | '/blog' | '/contact';
export type Params = Record<string, string | undefined>;

// Export standard React Router components with type safety
export const Link = RouterLink;
export const Navigate = RouterNavigate;

// Export hooks with type safety
export const useNavigate = () => {
  const navigate = useRouterNavigate();
  return (to: Path | number, options?: { replace?: boolean; state?: any }) => {
    if (typeof to === 'number') {
      navigate(to);
    } else {
      navigate(to, options);
    }
  };
};

export const useParams = useRouterParams<Params>;
