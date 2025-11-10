import React, { useState } from "react";
import { mockData } from "../../MockData/MockData"; // adjust your import path

const statusColors = {
  new: "bg-blue-400",
  contacted: "bg-orange-400",
  converted: "bg-green-500",
};

const dealStatusColors = {
  active: "bg-yellow-400",
  close: "bg-gray-400",
};

export default function Leads() {
  const [leads, setLeads] = useState(mockData);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [currentLead, setCurrentLead] = useState({
    name: "",
    company: "",
    status: "",
    source: "",
    conversionDate: "",
    dealStatus: "",
    receivedAmount: "",
  });

  // Filter by name or company and id(search Bar)
  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.company.toLowerCase().includes(search.toLowerCase()) 
      // lead.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpen = (lead = {
    name: "",
    company: "",
    status: "",
    source: "",
    conversionDate: "",
    dealStatus: "",
    receivedAmount: "",
  }) => {
    setCurrentLead(lead);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    if (currentLead.id) {
      setLeads(leads.map((l) => (l.id === currentLead.id ? currentLead : l)));
    } else {
      const newId = Math.max(...leads.map((l) => l.id), 0) + 1;
      setLeads([...leads, { ...currentLead, id: newId }]);
    }
    handleClose();
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads</h1>
          <p className="text-sm text-gray-500">Manage your sales leads</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search by name or company..."
            className="border text-green-200 border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => handleOpen()}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-500 transition"
          >
            + Add Lead
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="bg-gray-100 border-b text-gray-800">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Company</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Source</th>
              <th className="py-2 px-4">Conversion Date</th>
              <th className="py-2 px-4">Deal Status</th>
              <th className="py-2 px-4">Received Amount</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>



          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className="border-b hover:bg-gray-600">
                <td className="py-2 px-4">{lead.id}</td>
                <td className="py-2 px-4 font-medium">{lead.name}</td>
                <td className="py-2 px-4">{lead.company}</td>
                <td className="py-2 px-4">
                  <span
                    className={`text-white text-xs px-3 py-1 rounded-full capitalize ${statusColors[lead.status] || "bg-gray-300"
                      }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="py-2 px-4">{lead.source}</td>
                <td className="py-2 px-4">{lead.conversionDate}</td>
                <td className="py-2 px-4">
                  <span
                    className={`text-white text-xs px-3 py-1 rounded-full capitalize ${dealStatusColors[lead.dealStatus] || "bg-gray-300"
                      }`}
                  >
                    {lead.dealStatus}
                  </span>
                </td>
                <td className="py-2 px-4 font-semibold text-green-600">

                  {/* If receivedAmount exists → it formats properly, if not--> safe rendering.... */}
                  ${lead.receivedAmount ?  `${lead.receivedAmount.toLocaleString()}`
                    : "-"}
                </td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleOpen(lead)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
            {filteredLeads.length === 0 && (
              <tr>
                <td colSpan="9" className="py-4 text-center text-gray-400">
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>




      {/* .............Edit Section./......... */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white w-96 p-6 rounded-xl shadow-lg space-y-4">
            <h2 className="text-lg font-semibold">
              {currentLead.id ? "Edit Lead" : "Add New Lead"}
            </h2>

            <div className="flex flex-col gap-2">
              <input
                placeholder="Name"
                value={currentLead.name}
                onChange={(e) =>
                  setCurrentLead({ ...currentLead, name: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
              <input
                placeholder="Company"
                value={currentLead.company}
                onChange={(e) =>
                  setCurrentLead({ ...currentLead, company: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
              <select
                value={currentLead.status}
                onChange={(e) =>
                  setCurrentLead({ ...currentLead, status: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="">Select Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="converted">Converted</option>
              </select>
              <input
                placeholder="Source"
                value={currentLead.source}
                onChange={(e) =>
                  setCurrentLead({ ...currentLead, source: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
              <input
                type="date"
                value={currentLead.conversionDate}
                onChange={(e) =>
                  setCurrentLead({ ...currentLead, conversionDate: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
              <select
                value={currentLead.dealStatus}
                onChange={(e) =>
                  setCurrentLead({ ...currentLead, dealStatus: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="">Select Deal Status</option>
                <option value="active">Active</option>
                <option value="close">Close</option>
              </select>
              <input
                type="number"
                placeholder="Received Amount"
                value={currentLead.receivedAmount}
                onChange={(e) =>
                  setCurrentLead({
                    ...currentLead,
                    receivedAmount: Number(e.target.value),
                  })
                }
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded-lg text-gray-600 border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
