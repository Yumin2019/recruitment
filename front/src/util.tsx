import { toaster } from "./components/ui/toaster";

const successToast = (text: string) => {
  toaster.create({
    description: text,
    type: "success",
  });
};

const errorToast = (text: string) => {
  toaster.create({
    description: text,
    type: "error",
  });
};

const warningToast = (text: string) => {
  toaster.create({
    description: text,
    type: "warning",
  });
};

const infoToast = (text: string) => {
  toaster.create({
    description: text,
    type: "info",
  });
};

export { successToast, errorToast, infoToast, warningToast };
