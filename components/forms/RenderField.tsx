"use client";

import { Input } from "../ui/input";
import Image from "next/image";
import { CustomProps, FormFieldType } from "./types";
import { FormControl } from "../ui/form";

export const RenderField = ({
  field,
  props,
}: {
  field: any;
  props: CustomProps;
}) => {
  const { fieldType, iconSrc, iconAlt, placeholder } = props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

      break;
    default:
      break;
  }
};
