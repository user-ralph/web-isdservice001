import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Ensure this path matches where your image is actually located


export default function Login() {
  const navigate = useNavigate(); // Hook to change pages

  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload

    // Logic: ID must be exactly 8 digits
    if (idNumber.length !== 8) {
      setError('Invalid ID: Must be exactly 8 digits.');
      return;
    }
    
    // Logic: Simple check to ensure password isn't empty
    if (!password) {
      setError('Password is required.');
      return;
    }

    // If validation passes, clear error and proceed
    setError('');
    console.log('Logging in with:', { idNumber, password, isAdmin });
    
    // TODO: Add your actual API login call here (e.g., axios.post...)
    
    // --- NAVIGATION LOGIC ---
    // If login is successful, redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      
      {/* Main Card Component */}
      <div className="card bg-base-100 w-96 shadow-sm">
        
        {/* Figure/Image Section */}
        <figure className="px-10 pt-10">
          <img
            src="../src/assets/images/minebeamitsumi_logo_1.png"
            alt="Login Illustration"
            className="rounded-xl"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-4">MyISD Service Login</h2>

          {/* ERROR ALERT: Only shows if 'error' state is not empty */}
          {error && (
            <div role="alert" className="alert alert-warning text-left text-sm mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form className="w-full text-left" onSubmit={handleLogin}>
            
            {/* ID Number Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">ID Number</span>
              </label>
              <input 
                type="text" 
                placeholder="8-digit ID" 
                className="input input-bordered w-full"
                value={idNumber}
                // Only allow numbers and max 8 chars
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, ''); // Remove non-digits
                  setIdNumber(val);
                  setError(''); // Clear error when user types
                }}
                maxLength={8}
              />
            </div>

            {/* Password Field */}
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="Password" 
                className="input input-bordered w-full" 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
              />
            </div>

            {/* Login Button */}
            <div className="card-actions mt-6">
              <button className="btn btn-neutral w-full">Login</button>
            </div>

            {/* Administrator Checkbox (Below Button) */}
            <div className="form-control mt-4">
              <label className="label cursor-pointer justify-start gap-3">
                <input 
                  type="checkbox" 
                  className="checkbox checkbox-sm" 
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
                <span className="label-text">Login as Administrator</span>
              </label>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}