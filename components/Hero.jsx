import { FaUsers, FaComments, FaTrending, FaTrophy, FaUserAlt, FaGraduationCap, FaCode, FaChartBar, FaBrain } from 'react-icons/fa';

const professionals = [
  { name: 'Sarah Johnson', role: 'Growth Strategist', icon: FaUserAlt },
  { name: 'Michael Chen', role: 'AI Researcher', icon: FaBrain },
  { name: 'Emma Davis', role: 'Product Lead', icon: FaChartBar },
  { name: 'James Wilson', role: 'Tech Innovator', icon: FaCode },
  { name: 'Sofia Rodriguez', role: 'Data Scientist', icon: FaGraduationCap }
];

const ProfessionalAvatar = ({ professional, delay }) => (
  <div className={`transition-all duration-1000 delay-${delay} opacity-100 translate-y-0`}>
    <div className="relative group cursor-pointer">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
        {professional.icon && <professional.icon className="w-12 h-12 text-indigo-600" />}
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <p className="text-sm font-semibold text-indigo-800">{professional.name}</p>
        <p className="text-xs text-indigo-600">{professional.role}</p>
      </div>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, title, gradient }) => {
  if (!Icon) return null; // Add a guard clause
  return (
    <div className="text-center">
      <div className={`bg-gradient-to-br ${gradient} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <p className="text-sm font-semibold text-indigo-800">{title}</p>
    </div>
  );
};

const InterfaceCard = ({ title, gradient, isMain }) => (
  <div className={`relative bg-white rounded-2xl ${isMain ? 'shadow-2xl p-8 mb-6' : 'shadow-xl p-6 ml-8'} transform hover:scale-105 transition-transform duration-300`}>
    <div className="flex items-center space-x-3 mb-6">
      <div className={`w-${isMain ? '8' : '6'} h-${isMain ? '8' : '6'} bg-gradient-to-br ${gradient} rounded${isMain ? '-lg' : ''}`}></div>
      <h3 className={`text-${isMain ? 'lg' : 'md'} font-semibold text-indigo-800`}>{title}</h3>
    </div>
    
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <div className="flex-1">
          <div className="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
          <div className="h-2 bg-gray-100 rounded w-1/2"></div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <div className="flex-1">
          <div className="h-2 bg-gray-200 rounded w-2/3 mb-1"></div>
          <div className="h-2 bg-gray-100 rounded w-1/3"></div>
        </div>
      </div>
    </div>

    <div className="mt-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4">
      <div className="h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded w-full mb-2"></div>
      <div className="h-2 bg-gray-100 rounded w-2/3"></div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative -z-10">
      <section className="relative overflow-hidden px-4 pt-8 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-60 blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-60 blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-40"></div>
          
          <div className="absolute top-32 right-1/3">
            <div className="relative">
              <div className="w-3 h-3 bg-pink-400 transform rotate-45"></div>
              <div className="absolute top-0 left-0 w-3 h-3 bg-pink-400 transform -rotate-45"></div>
            </div>
          </div>
          <div className="absolute bottom-40 right-16">
            <div className="relative">
              <div className="w-2 h-2 bg-purple-400 transform rotate-45"></div>
              <div className="absolute top-0 left-0 w-2 h-2 bg-purple-400 transform -rotate-45"></div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-100 translate-y-0 transition-all duration-1000">
              <span className="text-indigo-800">Connect with over </span>
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">50,000</span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                Growth Professionals
              </span>
            </h1>
          </div>

          {/* Professional Avatars Grid */}
          <div className="relative max-w-4xl mx-auto">
            {/* First Professional */}
            <div className="flex justify-center items-center mb-8">
              <ProfessionalAvatar professional={professionals[0]} delay="200" />
            </div>
            
            {/* Second Row - Two Professionals */}
            <div className="flex justify-between items-center mb-8 px-8 md:px-16">
              <ProfessionalAvatar professional={professionals[1]} delay="300" />
              <ProfessionalAvatar professional={professionals[2]} delay="400" />
            </div>
            
            {/* Third Row - Two Professionals */}
            <div className="flex justify-center items-center space-x-12 md:space-x-16">
              <ProfessionalAvatar professional={professionals[3]} delay="500" />
              <ProfessionalAvatar professional={professionals[4]} delay="600" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Discovery Section */}
      <section className="relative px-4 py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 opacity-100 translate-y-0 transition-all duration-1000">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-800 leading-tight">
                Discover Your<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Community
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-indigo-600 leading-relaxed max-w-lg">
                Join communities filled with passionate professionals eager to share insights and collaborate for success
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <StatCard
                  icon={FaUsers}
                  title="50,000+ Members"
                  gradient="from-pink-500 to-purple-600"
                />
                <StatCard
                  icon={FaComments}
                  title="Daily Discussions"
                  gradient="from-blue-500 to-indigo-600"
                />
                <StatCard
                  icon={FaTrending}
                  title="Growth Insights"
                  gradient="from-indigo-500 to-blue-600"
                />
                <StatCard
                  icon={FaTrophy}
                  title="Expert Network"
                  gradient="from-pink-500 to-red-500"
                />
              </div>
            </div>

            {/* Right - Interface Mockups */}
            <div className="relative opacity-100 translate-x-0 transition-all duration-1000">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-50 blur-lg"></div>
              
              <InterfaceCard
                title="Top Contributors"
                gradient="from-pink-500 to-purple-600"
                isMain={true}
              />
              
              <InterfaceCard
                title="Popular Content"
                gradient="from-blue-500 to-indigo-600"
                isMain={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;