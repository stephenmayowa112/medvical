const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'pages', 'ClinicRegistrationPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Update standard Inputs
content = content.replace(/className="bg-gray-50\/50"/g, 'className="bg-white border-2 border-slate-200 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all rounded-lg text-slate-800 font-medium"');

// Update inputs with left padding
content = content.replace(/className="pl-9 bg-gray-50\/50"/g, 'className="pl-11 bg-white border-2 border-slate-200 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all rounded-lg text-slate-800 font-medium"');
content = content.replace(/left-3 top-1\/2/g, 'left-4 top-1/2');
content = content.replace(/w-4 h-4 text-gray-400/g, 'w-5 h-5 text-slate-400');

// Update labels
content = content.replace(/text-sm font-medium text-gray-700/g, 'text-sm font-semibold text-slate-700');
content = content.replace(/text-xs font-normal text-gray-400/g, 'text-xs font-medium text-slate-500');

// Update section headers
content = content.replace(/text-lg font-semibold text-gray-800/g, 'text-xl font-bold text-slate-800 tracking-tight');
content = content.replace(/bg-blue-100/g, 'bg-blue-50 border border-blue-100 shadow-sm');
content = content.replace(/text-blue-600/g, 'text-blue-600'); // No change, but maybe icon sizes
content = content.replace(/border-b border-gray-100/g, 'border-b-2 border-slate-100');

// Card styling
content = content.replace(
    'className="border border-white/20 bg-white shadow-xl rounded-xl overflow-hidden"',
    'className="border-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-900/5 rounded-2xl overflow-hidden"'
);

// Specific marital status layout
const oldMaritalStatus = `                                    <div className="space-y-2">
                                    {maritalStatuses.map((status) => (
                                        <label key={status} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="maritalStatus"
                                            value={status}
                                            checked={formData.maritalStatus === status}
                                            onChange={(e) => updateField('maritalStatus', e.target.value)}
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-700">{status}</span>
                                        </label>
                                    ))}
                                    </div>`;

const newMaritalStatus = `                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {maritalStatuses.map((status) => (
                                        <label key={status} className={\`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all \${formData.maritalStatus === status ? 'border-blue-500 bg-blue-50/50 shadow-sm ring-4 ring-blue-500/10' : 'border-slate-200 bg-white hover:border-blue-300 shadow-sm'}\`}>
                                        <input
                                            type="radio"
                                            name="maritalStatus"
                                            value={status}
                                            checked={formData.maritalStatus === status}
                                            onChange={(e) => updateField('maritalStatus', e.target.value)}
                                            className="w-4.5 h-4.5 text-blue-600 border-slate-300 focus:ring-blue-500"
                                        />
                                        <span className={\`ml-2 text-sm font-semibold \${formData.maritalStatus === status ? 'text-blue-700' : 'text-slate-700'}\`}>{status}</span>
                                        </label>
                                    ))}
                                    </div>`;

content = content.replace(oldMaritalStatus, newMaritalStatus);

// Submit button
content = content.replace(
    'className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2"',
    'className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl text-base font-semibold shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2"'
);


fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated ClinicRegistrationPage.tsx styles');
