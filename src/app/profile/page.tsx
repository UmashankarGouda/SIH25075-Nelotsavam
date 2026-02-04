'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Sprout, 
  ArrowLeft,
  User,
  Phone,
  MapPin,
  Mail,
  Award,
  Calendar,
  TrendingUp,
  Edit2,
  Save,
  Camera,
  Leaf,
  Droplets,
  Star,
  Target,
  Settings
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useUser } from '@/contexts/UserContext';

interface Achievement {
  id: string;
  title: string;
  titleMl: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}

export default function ProfileDashboard() {
  const router = useRouter();
  const { language } = useLanguage();
  const { userData, setUserData } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: userData?.name || 'Farmer User',
    phone: userData?.phone || '+91 9876543210',
    email: userData?.email || 'farmer@example.com',
    district: userData?.district || 'alappuzha',
    farmSize: userData?.farmSize || 'small',
    experience: userData?.experience || 'beginner',
    bio: 'Passionate rice farmer committed to sustainable agriculture',
    profileImage: ''
  });

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Quick Learner',
      titleMl: 'വേഗത്തിലുള്ള പഠിതാവ്',
      description: 'Completed first course',
      icon: '🌱',
      earned: true,
      earnedDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Water Guardian',
      titleMl: 'ജല രക്ഷകൻ',
      description: 'Saved 1000L water',
      icon: '💧',
      earned: true,
      earnedDate: '2024-02-20'
    },
    {
      id: '3',
      title: 'Community Helper',
      titleMl: 'സമൂഹ സഹായി',
      description: 'Helped 10 farmers',
      icon: '🤝',
      earned: true,
      earnedDate: '2024-03-10'
    },
    {
      id: '4',
      title: 'Harvest Master',
      titleMl: 'വിളവെടുപ്പ് മാസ്റ്റർ',
      description: 'Complete harvest cycle',
      icon: '🌾',
      earned: false
    },
    {
      id: '5',
      title: 'Eco Warrior',
      titleMl: 'പരിസ്ഥിതി യോദ്ധാവ്',
      description: '100% organic farming',
      icon: '🌿',
      earned: false
    },
    {
      id: '6',
      title: 'Market Leader',
      titleMl: 'വിപണി നേതാവ്',
      description: 'Sell 50+ products',
      icon: '📈',
      earned: false
    }
  ];

  const farmingStats = {
    totalHarvest: '2,450 kg',
    landUtilization: '85%',
    waterSaved: '15,000 L',
    organicScore: '78%',
    communityHelps: 23,
    coursesCompleted: 5
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    
    // Save to user context
    setUserData({
      name: profileData.name,
      phone: profileData.phone,
      email: profileData.email,
      district: profileData.district,
      farmSize: profileData.farmSize,
      experience: profileData.experience
    });
    
    alert(
      `✅ Profile Updated Successfully!\n\n` +
      `Your changes have been saved.\n\n` +
      `Name: ${profileData.name}\n` +
      `District: ${profileData.district}\n` +
      `Farm Size: ${profileData.farmSize}\n` +
      `Experience: ${profileData.experience}`
    );
  };

  const handleImageUpload = () => {
    alert(
      `📸 Upload Profile Photo\n\n` +
      `Feature coming soon!\n\n` +
      `You'll be able to upload your profile picture.`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => router.push('/dashboard')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <div className="bg-green-600 rounded-full p-2">
                <User className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-green-800">My Profile</h1>
            </div>
          </div>
          <div className="flex gap-2">
            {!isEditing ? (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsEditing(true)}
              >
                <Edit2 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button 
                  size="sm"
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setIsEditing(false);
                    // Restore original data
                    setProfileData({
                      name: userData?.name || 'Farmer User',
                      phone: userData?.phone || '+91 9876543210',
                      email: userData?.email || 'farmer@example.com',
                      district: userData?.district || 'alappuzha',
                      farmSize: userData?.farmSize || 'small',
                      experience: userData?.experience || 'beginner',
                      bio: 'Passionate rice farmer committed to sustainable agriculture',
                      profileImage: ''
                    });
                  }}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                      <User className="h-16 w-16 text-gray-400" />
                    </div>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute bottom-0 right-0 rounded-full p-2"
                        onClick={handleImageUpload}
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  {isEditing ? (
                    <Input
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="text-center text-xl font-bold mb-2"
                    />
                  ) : (
                    <h2 className="text-xl font-bold mb-2">{profileData.name}</h2>
                  )}
                  <Badge className="bg-green-100 text-green-700">
                    Level 5 Farmer
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm text-gray-600">Bio</Label>
                  {isEditing ? (
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      className="w-full p-2 border rounded-lg resize-none text-sm"
                      rows={3}
                    />
                  ) : (
                    <p className="text-sm">{profileData.bio}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    {isEditing ? (
                      <Input
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="text-sm"
                      />
                    ) : (
                      <span className="text-sm">{profileData.phone}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    {isEditing ? (
                      <Input
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="text-sm"
                      />
                    ) : (
                      <span className="text-sm">{profileData.email || 'Not provided'}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    {isEditing ? (
                      <Select 
                        value={profileData.district}
                        onValueChange={(value) => handleInputChange('district', value)}
                      >
                        <SelectTrigger className="text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="thiruvananthapuram">Thiruvananthapuram</SelectItem>
                          <SelectItem value="kollam">Kollam</SelectItem>
                          <SelectItem value="pathanamthitta">Pathanamthitta</SelectItem>
                          <SelectItem value="alappuzha">Alappuzha</SelectItem>
                          <SelectItem value="kottayam">Kottayam</SelectItem>
                          <SelectItem value="idukki">Idukki</SelectItem>
                          <SelectItem value="ernakulam">Ernakulam</SelectItem>
                          <SelectItem value="thrissur">Thrissur</SelectItem>
                          <SelectItem value="palakkad">Palakkad</SelectItem>
                          <SelectItem value="malappuram">Malappuram</SelectItem>
                          <SelectItem value="kozhikode">Kozhikode</SelectItem>
                          <SelectItem value="wayanad">Wayanad</SelectItem>
                          <SelectItem value="kannur">Kannur</SelectItem>
                          <SelectItem value="kasargod">Kasargod</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <span className="text-sm capitalize">{profileData.district}</span>
                    )}
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Farm Size</span>
                    {isEditing ? (
                      <Select 
                        value={profileData.farmSize}
                        onValueChange={(value) => handleInputChange('farmSize', value)}
                      >
                        <SelectTrigger className="text-sm w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (&lt; 2 acres)</SelectItem>
                          <SelectItem value="medium">Medium (2-5 acres)</SelectItem>
                          <SelectItem value="large">Large (&gt; 5 acres)</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <span className="font-medium">
                        {profileData.farmSize === 'small' && 'Small (< 2 acres)'}
                        {profileData.farmSize === 'medium' && 'Medium (2-5 acres)'}
                        {profileData.farmSize === 'large' && 'Large (> 5 acres)'}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Experience</span>
                    {isEditing ? (
                      <Select 
                        value={profileData.experience}
                        onValueChange={(value) => handleInputChange('experience', value)}
                      >
                        <SelectTrigger className="text-sm w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (&lt; 2 years)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (2-10 years)</SelectItem>
                          <SelectItem value="experienced">Experienced (&gt; 10 years)</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <span className="font-medium">
                        {profileData.experience === 'beginner' && 'Beginner (< 2 years)'}
                        {profileData.experience === 'intermediate' && 'Intermediate (2-10 years)'}
                        {profileData.experience === 'experienced' && 'Experienced (> 10 years)'}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Member Since</span>
                    <span className="font-medium">{new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-sm">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  Language Preferences
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  Notification Settings
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm text-red-600">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Achievements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Farming Stats */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Farming Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Total Harvest</CardTitle>
                      <Sprout className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold">{farmingStats.totalHarvest}</p>
                  </CardHeader>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Water Saved</CardTitle>
                      <Droplets className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold">{farmingStats.waterSaved}</p>
                  </CardHeader>
                </Card>

                <Card className="border-amber-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Land Use</CardTitle>
                      <Target className="h-4 w-4 text-amber-600" />
                    </div>
                    <p className="text-2xl font-bold">{farmingStats.landUtilization}</p>
                  </CardHeader>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Organic Score</CardTitle>
                      <Leaf className="h-4 w-4 text-purple-600" />
                    </div>
                    <p className="text-2xl font-bold">{farmingStats.organicScore}</p>
                  </CardHeader>
                </Card>

                <Card className="border-indigo-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Community Helps</CardTitle>
                      <User className="h-4 w-4 text-indigo-600" />
                    </div>
                    <p className="text-2xl font-bold">{farmingStats.communityHelps}</p>
                  </CardHeader>
                </Card>

                <Card className="border-teal-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Courses Done</CardTitle>
                      <Award className="h-4 w-4 text-teal-600" />
                    </div>
                    <p className="text-2xl font-bold">{farmingStats.coursesCompleted}</p>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Achievements & Badges</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {achievements.map((achievement) => (
                      <div 
                        key={achievement.id}
                        className={`text-center ${!achievement.earned ? 'opacity-50' : ''}`}
                      >
                        <div className="text-4xl mb-2">{achievement.icon}</div>
                        <h4 className="font-medium text-sm">
                          {language === 'ml' ? achievement.titleMl : achievement.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
                        {achievement.earned ? (
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {achievement.earnedDate}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="mt-2 text-xs">
                            Locked
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activity Timeline */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Completed "Water Management" task</p>
                        <p className="text-xs text-gray-500">2 hours ago • +50 Dhanya points</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-2">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Posted in community forum</p>
                        <p className="text-xs text-gray-500">Yesterday • 12 likes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 rounded-full p-2">
                        <Award className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Earned "Water Guardian" badge</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 rounded-full p-2">
                        <ShoppingCart className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Purchased organic fertilizer</p>
                        <p className="text-xs text-gray-500">5 days ago • ₹450</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Overview */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>To Next Level (Level 6)</span>
                      <span className="font-medium">230/500 XP</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '46%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Monthly Seva Completion</span>
                      <span className="font-medium">18/25</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Community Contribution</span>
                      <span className="font-medium">High</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Import statements for icons
import { CheckCircle, MessageSquare, ShoppingCart } from 'lucide-react';