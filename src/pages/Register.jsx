import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const [role, setRole] = useState('farmer');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" required className="w-full px-3 py-2 border rounded-md" />
          <input type="email" placeholder="Email" required className="w-full px-3 py-2 border rounded-md" />
          <input type="password" placeholder="Password" required className="w-full px-3 py-2 border rounded-md" />
          <select value={role} onChange={e => setRole(e.target.value)} className="w-full px-3 py-2 border rounded-md">
            <option value="farmer">Farmer</option>
            <option value="buyer">Buyer</option>
            <option value="fpo">FPO</option>
          </select>
          <button type="submit" className="w-full py-2 px-4 bg-primary text-white rounded-md font-medium hover:bg-dark">Register</button>
        </form>
        <div className="mt-4 text-center text-sm">
          <Link to="/login" className="text-primary hover:underline">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
