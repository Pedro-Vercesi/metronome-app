interface Props {
  timeSignature: string;
  onChange: (timeSignature: string) => void;
}

export const TimeSignature = ({ timeSignature, onChange }: Props) => {
  return (
    <div className="mb-6">
      <label className="block text-sm text-gray-600">Compás</label>
      <div className="flex gap-2">
        <button
          onClick={() => onChange("2/4")}
          className={`flex-1 py-3 rounded-lg font-semibold border-2 ${
            timeSignature === "2/4"
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-300 text-gray-600 hover:border-gray-400"
          }`}
        >
          2/4
        </button>
        <button
          onClick={() => onChange("3/4")}
          className={`flex-1 py-3 rounded-lg font-semibold border-2 ${
            timeSignature === "3/4"
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-300 text-gray-600 hover:border-gray-400"
          }`}
        >
          3/4
        </button>
        <button
          onClick={() => onChange("4/4")}
          className={`flex-1 py-3 rounded-lg font-semibold border-2 ${
            timeSignature === "4/4"
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-300 text-gray-600 hover:border-gray-400"
          }`}
        >
          4/4
        </button>
      </div>
    </div>
  );
};
