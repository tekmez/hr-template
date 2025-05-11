import { useState, useEffect } from "react";
import type { Employee } from "../types/types";

interface UseGetEmployeeResult {
  data: Employee[] | null;
  loading: boolean;
  error: string | null;
}

function useGetEmployee(): UseGetEmployeeResult {
  const [data, setData] = useState<Employee[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await fetch("/employees.json");
      if (!response.ok) {
        throw new Error("Veri alınamadı");
      }
      const json = await response.json();
      setData(json);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Bilinmeyen bir hata oluştu");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return { data, loading, error };
}

export default useGetEmployee;
