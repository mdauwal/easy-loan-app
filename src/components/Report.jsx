<div className="p-6 bg-white rounded-md shadow-md">
      {/* Search and Filter Section */}
      <div className="flex justify-between mb-4">
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795]"
          />
        </div>
        <button
          onClick={handleFilter}
          className="bg-[#00C795] text-white px-4 py-2 rounded-md"
        >
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-[#F3F4F6]">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">S/N</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Customer Ref.</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Loan Amount</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Email Address</th>
              <th className="px-4 py-2 border border-gray-200 text-left">First Name</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Middle Name</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Last Name</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Application Date</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id}>
                <td className="px-4 py-2 border border-gray-200">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-200">{row.ref}</td>
                <td className="px-4 py-2 border border-gray-200">{row.amount}</td>
                <td className="px-4 py-2 border border-gray-200">{row.email}</td>
                <td className="px-4 py-2 border border-gray-200">{row.firstName}</td>
                <td className="px-4 py-2 border border-gray-200">{row.middleName}</td>
                <td className="px-4 py-2 border border-gray-200">{row.lastName}</td>
                <td className="px-4 py-2 border border-gray-200">{row.date}</td>
                <td className="px-4 py-2 border border-gray-200">
                  <button className="text-[#00C795] hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>