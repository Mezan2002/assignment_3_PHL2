import { ZodError, ZodIssue } from "zod";
import { TErrorSources, TGenericErrorResponse } from "../interfaces/error";

const handleZodValidationError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err?.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path?.length - 1],
      message: issue?.message,
    };
  });

  return {
    statusCode: 400,
    message: "Validation error",
    errorSources,
  };
};

export default handleZodValidationError;
