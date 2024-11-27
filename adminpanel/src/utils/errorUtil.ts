import { AxiosError } from "axios";

export function handleError(err: unknown, defaultMessage: string) {
  const error = err as AxiosError;
  return {
    message:
      typeof error.response?.data === "string"
        ? error.response.data
        : defaultMessage,
    statusCode: error.response?.status || 500,
  };
}
