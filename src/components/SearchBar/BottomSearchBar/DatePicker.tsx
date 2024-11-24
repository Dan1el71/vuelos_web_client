type DatePickerProps = {
  label: string
  id: string
}

const DatePicker = ({ label, id }: DatePickerProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 px-2">
      <div className="w-full">
        <label
          htmlFor="check-in"
          className="mx-2 block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
        <input
          id={id}
          type="date"
          className="uppercase w-full py-2 px-2 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-500"
        />
      </div>
    </div>
  )
}

export default DatePicker
