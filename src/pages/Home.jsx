import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogOut, User, Youtube } from 'lucide-react'

export default function Home() {
  const { user, profile, signOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Youtube className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold">YouTube Clone</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700">
              Hola, {profile?.nombre || 'Usuario'}
            </span>
            <button
              onClick={() => navigate('/profile')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Inicio</h1>
        <p className="text-gray-600">
          ¡Bienvenido a tu réplica de YouTube! 🎥
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Email: {user?.email}
        </p>
      </div>
    </div>
  )
}