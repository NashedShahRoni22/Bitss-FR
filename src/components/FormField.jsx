import { LuEye, LuEyeOff, LuInfo } from "react-icons/lu";

export default function FormField({
  label,
  type = "text",
  name,
  required = false,
  toolTip = false,
  togglePass,
  register,
  errors,
  validation = {},
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </label>

      <div className="relative w-full">
        <input
          className={`w-full rounded border px-4 py-2 pr-7 outline-none ${
            errors?.[name]
              ? "border-primary focus:border-primary"
              : "border border-gray-200 focus:border-gray-300"
          }`}
          type={type}
          id={name}
          {...register(name, {
            required: required ? `${label} is required` : false,
            ...validation,
          })}
        />

        {/* bobosoho email tooltip */}
        {toolTip && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <div className="group relative">
              <LuInfo className="h-5 w-5 cursor-help text-gray-400" />
              <div className="absolute bottom-full right-0 z-10 mb-2 hidden w-64 rounded bg-gray-800 p-2 text-xs text-white group-hover:block">
                This is the main email that will receive the products. This
                email will also be used for login to your account.
                <div className="absolute right-3 top-full -mt-1 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </div>
        )}

        {/* password toggle */}
        {togglePass && (
          <button
            type="button"
            onClick={() => togglePass((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {type === "password" ? (
              <LuEye className="h-5 w-5 text-gray-400" />
            ) : (
              <LuEyeOff className="h-5 w-5 text-gray-400" />
            )}
          </button>
        )}
      </div>

      {/* Error message display */}
      {errors?.[name] && (
        <p className="mt-1 text-xs text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
}
