import { useLocation } from "react-router-dom";

export function useQuery() { // Hooks personalizado
    return new URLSearchParams(useLocation().search);
  }
  