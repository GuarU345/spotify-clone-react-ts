import { useQueryClient } from "react-query";

export const useInvalidateQuery = () => {
  const queryClient = useQueryClient();

  const invalidate = async (...key: string[]) => {
    await queryClient.invalidateQueries({ queryKey: key });
  };

  return { invalidate };
};
