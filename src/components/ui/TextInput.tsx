import { cn } from "@/lib/utils";
import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import Icon from "../Icon";
import { IconName } from "../Icon/Icons";

type TextInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>,("name" & "placeholder")> & {
  label: string;
  error?: string;
  register?: UseFormRegisterReturn; // from register("field")
  iconName?: IconName;
  showRequired?: boolean;
};

const TextInput = ({ label, error, register, iconName, showRequired = false, ...rest }: TextInputProps) => {
  return (
    <div>
    <div className="relative w-full py-2">
      <input
          {...register} // name, ref, onChange, onBlur
          {...rest} // type, placeholder, className, etc.
          placeholder=" "
          className={cn("peer block w-full px-2 py-2 bg-transparent text-secondary-foreground rounded-lg border border-border focus:border-primary focus:ring-0 outline-0 transition", rest.className)}
      />
      {label && (
        <div className="flex items-center gap-1 absolute left-1 top-0 -translate-y-1 text-sm text-tertiary-foreground bg-card px-1 transition-all duration-300
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-secondary-foreground peer-placeholder-shown:text-base
          peer-focus:top-0 peer-focus:-translate-y-1 peer-focus:text-tertiary-foreground peer-focus:text-sm"
        >
          {iconName && (<Icon name={iconName} className="" />)}
          <label htmlFor={rest.id} className="">
            {label}{showRequired && <span className="text-red-500">*</span>}
          </label>
      </div>
      )}
    </div>
    {error && <p className="text-red-500 text-sm mb-1">{error}</p>}
    </div>
  );
};

export default TextInput;
