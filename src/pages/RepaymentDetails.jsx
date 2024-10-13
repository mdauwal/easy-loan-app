import React from 'react';

export default function RepaymentDetails() {
  const repaymentData = [
    {
      date: 'Sep 30th, 2023',
      principal: '₦50,000',
      interest: '₦10,000',
      total: '₦60,000',
    },
  ];

  return (
    
      <div className="overflow-x-auto text-sm">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="py-3 px-6 text-gray-600 font-medium">Repayment Date</th>
              <th className="py-3 px-6 text-gray-600 font-medium">Principal</th>
              <th className="py-3 px-6 text-gray-600 font-medium">Interest</th>
              <th className="py-3 px-6 text-gray-600 font-medium">Total Payment</th>
            </tr>
          </thead>
          <tbody>
            {repaymentData.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-4 px-6">{item.date}</td>
                <td className="py-4 px-6">{item.principal}</td>
                <td className="py-4 px-6">{item.interest}</td>
                <td className="py-4 px-6">{item.total}</td>
              </tr>
            ))}
            <tr className="font-bold">
              <td className="py-4 px-6">Total</td>
              <td className="py-4 px-6">₦50,000</td>
              <td className="py-4 px-6">₦10,000</td>
              <td className="py-4 px-6">₦60,000</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}
