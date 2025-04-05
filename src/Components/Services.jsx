import React from 'react';
import Image1 from '../IMG_7206.jpg';
import Image2 from '../Education.jpg';
import Image3 from '../oldagehome.jpg';
import { Link } from 'react-router-dom';

export default function Missions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
      {/* Mission Tatra */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
        <img src={Image1} alt="Mission Tatra" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Mission Tatra: A Hundred Years, One Well, and Now a New Beginning</h2>
          <p className="text-gray-600 mb-4">
            In a village where a single well served generations, water has now become a distant dream. Mission Tatra is about reviving that dream — restoring clean water, dignity, and hope to a community left behind.....
          </p>
          <Link
            to="/tatra"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Education */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
        <img src={Image2} alt="Education Mission" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">From Dreams to Reality: Chamundeswari’s Journey of Hope</h2>
          <p className="text-gray-600 mb-4">
            A young mind fueled by ambition, rising above circumstances with the power of education. A journey where hope becomes a path forward.....
          </p>
          <Link
            to="/education"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Old Age Home */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
        <img src={Image3} alt="Old Age Home" className="w-full h-56 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Where Love Lives: A Home for Our Forgotten Heroes</h2>
          <p className="text-gray-600 mb-4">
            A quiet space filled with warmth, memories, and gentle smiles. Where aging souls rediscover comfort, dignity, and belonging.....
          </p>
          <Link
            to="/oldagehome"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
