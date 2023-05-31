import { Props } from "./types";

export const Card = ({ children }: Props) => {
  return (
    <div className="bg-white w-full border rounded-lg shadow border-gray-300 dark:bg-gray-800 dark:border-gray-700 p-8">
      {children}
    </div>
  );
};
