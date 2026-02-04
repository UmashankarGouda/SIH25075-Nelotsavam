'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sprout, 
  Users, 
  Award, 
  Droplets, 
  MessageSquare, 
  BookOpen,
  Smartphone,
  MapPin,
  TrendingUp,
  Calendar,
  Sun,
  CloudRain,
  CheckCircle,
  Clock,
  ChevronRight,
  Leaf,
  Store,
  HelpCircle,
  User,
  LogOut,
  Bell,
  Target,
  Heart
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useUser } from '@/contexts/UserContext';

interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  icon: any;
  iconColor: string;
  bgColor: string;
  completed: boolean;
}

export default function Dashboard() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const { userData } = useUser();
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Check Water Levels',
      description: 'Monitor irrigation in paddy fields',
      points: 50,
      icon: Droplets,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      completed: false
    },
    {
      id: '2',
      title: 'Learn: Organic Pest Control',
      description: 'Study natural pest management techniques',
      points: 30,
      icon: BookOpen,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
      completed: false
    },
    {
      id: '3',
      title: 'Community Discussion',
      description: 'Share your harvest photos and tips',
      points: 20,
      icon: MessageSquare,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      completed: false
    }
  ]);

  const [dhanyaPoints, setDhanyaPoints] = useState(1247);
  const [showNotification, setShowNotification] = useState(false);

  const handleTaskComplete = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task && !task.completed) {
      setTasks(tasks.map(t => 
        t.id === taskId ? { ...t, completed: true } : t
      ));
      setDhanyaPoints(dhanyaPoints + task.points);
      setShowNotification(true);
      
      alert(
        `🎉 Task Completed!\n\n` +
        `✅ ${task.title}\n` +
        `🌾 +${task.points} Dhanya Points earned!\n` +
        `💰 Total Points: ${dhanyaPoints + task.points}`
      );
      
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const handleProfile = () => {
    router.push('/profile');
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      router.push('/');
    }
  };

  const handleAskExpert = () => {
    router.push('/expert');
  };

  const handleCommunityChat = () => {
    router.push('/community');
  };

  const handleMarketplace = () => {
    router.push('/marketplace');
  };

  const handleLearningCenter = () => {
    router.push('/learning');
  };

  const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage = (completedTasks / totalTasks) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 rounded-full p-2">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">
                {language === 'ml' ? 'നെല്ലുത്സവം' : 'നെല്ലുത്സവം'}
              </h1>
              <p className="text-sm text-green-600">Farming Dashboard</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {showNotification && (
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
              )}
            </Button>
            <Button variant="outline" size="sm" onClick={handleProfile}>
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, {userData?.name || 'Farmer'}! 🌾</h2>
          <p className="text-gray-600">Your farm is thriving! Keep up the great work.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Daily Progress</span>
            <span className="text-sm font-medium text-gray-700">{completedTasks}/{totalTasks} Tasks</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card 
            className="border-green-200 hover:shadow-lg transition-all cursor-pointer"
            onClick={() => router.push('/profile')}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-green-600">Dhanya Points</CardTitle>
                <Award className="h-4 w-4 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-800">{dhanyaPoints.toLocaleString()}</div>
              <p className="text-xs text-gray-500 mt-1">+{tasks.filter(t => t.completed).reduce((sum, t) => sum + t.points, 0)} today</p>
            </CardHeader>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-all cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-blue-600">Sevas Completed</CardTitle>
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-800">23</div>
              <p className="text-xs text-gray-500 mt-1">+{completedTasks} today</p>
            </CardHeader>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition-all cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-amber-600">Community Rank</CardTitle>
                <Users className="h-4 w-4 text-amber-600" />
              </div>
              <div className="text-2xl font-bold text-amber-800">#15</div>
              <p className="text-xs text-gray-500 mt-1">Top 5% farmers</p>
            </CardHeader>
          </Card>

          <Card 
            className="border-purple-200 hover:shadow-lg transition-all cursor-pointer"
            onClick={() => router.push('/profile')}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-purple-600">Farm Level</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-800">Level 5</div>
              <p className="text-xs text-gray-500 mt-1">230 XP to Level 6</p>
            </CardHeader>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Tasks */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Today's Sevas (Tasks)
                    </CardTitle>
                    <CardDescription>Complete farming activities to earn Dhanya points</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {completedTasks}/{totalTasks} Done
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className={`p-4 ${task.bgColor} rounded-lg transition-all ${task.completed ? 'opacity-75' : ''}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <task.icon className={`h-5 w-5 ${task.iconColor}`} />
                          {task.completed && (
                            <CheckCircle className="h-3 w-3 text-green-600 absolute -bottom-1 -right-1 bg-white rounded-full" />
                          )}
                        </div>
                        <div>
                          <h4 className={`font-medium ${task.completed ? 'line-through' : ''}`}>
                            {task.title}
                          </h4>
                          <p className="text-sm text-gray-600">{task.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{task.points} pts</Badge>
                        {!task.completed && (
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => handleTaskComplete(task.id)}
                            className="hover:bg-white/50"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Complete
                          </Button>
                        )}
                      </div>
                    </div>
                    {task.completed && (
                      <p className="text-xs text-green-600 mt-2 font-medium">
                        ✓ Completed! Points added to your account.
                      </p>
                    )}
                  </div>
                ))}

                {/* Add New Task Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-dashed"
                  onClick={() => alert('📝 New tasks will be available tomorrow at 6 AM!')}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  More tasks coming tomorrow
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Weather & Quick Actions */}
          <div className="space-y-6">
            {/* Weather */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-yellow-500" />
                  Weather Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">28°C</div>
                  <p className="text-sm text-gray-600 mb-4">Partly cloudy, good for fieldwork</p>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex items-center justify-center gap-1">
                      <CloudRain className="h-4 w-4 text-blue-500" />
                      <span>Rain: 10%</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span>Humidity: 65%</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs text-blue-700 font-medium">
                      💡 Tip: Perfect day for applying organic fertilizers!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start hover:bg-green-50" 
                  variant="outline"
                  onClick={handleAskExpert}
                >
                  <HelpCircle className="mr-2 h-4 w-4 text-green-600" />
                  Ask Expert
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Button>
                <Button 
                  className="w-full justify-start hover:bg-blue-50" 
                  variant="outline"
                  onClick={handleCommunityChat}
                >
                  <Users className="mr-2 h-4 w-4 text-blue-600" />
                  Community Chat
                  <Badge variant="secondary" className="ml-auto mr-2 bg-red-100 text-red-700">
                    47 new
                  </Badge>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button 
                  className="w-full justify-start hover:bg-amber-50" 
                  variant="outline"
                  onClick={handleMarketplace}
                >
                  <Store className="mr-2 h-4 w-4 text-amber-600" />
                  Local Marketplace
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Button>
                <Button 
                  className="w-full justify-start hover:bg-purple-50" 
                  variant="outline"
                  onClick={handleLearningCenter}
                >
                  <BookOpen className="mr-2 h-4 w-4 text-purple-600" />
                  Learning Center
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Achievement Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Next Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-full p-2">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Organic Champion</h4>
                      <p className="text-xs text-gray-500">Complete 10 organic farming tasks</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }} />
                  </div>
                  <p className="text-xs text-center text-gray-600">7/10 tasks completed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}