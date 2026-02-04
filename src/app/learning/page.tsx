'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sprout, 
  ArrowLeft,
  BookOpen,
  PlayCircle,
  Download,
  Clock,
  Trophy,
  Star,
  Lock,
  CheckCircle2,
  Video
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  titleMl: string;
  description: string;
  modules: number;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  isLocked: boolean;
  instructor: string;
  rating: number;
  students: number;
  badge: string;
  category: string;
}

export default function LearningCenter() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Sustainable Rice Farming',
      titleMl: 'സുസ്ഥിര നെൽകൃഷി',
      description: 'Learn eco-friendly rice cultivation techniques for better yields',
      modules: 5,
      duration: '2 hours',
      difficulty: 'Beginner',
      progress: 60,
      isLocked: false,
      instructor: 'Dr. Krishnan Nair',
      rating: 4.8,
      students: 1247,
      badge: '🌾',
      category: 'cultivation'
    },
    {
      id: '2',
      title: 'Water Management Basics',
      titleMl: 'ജലസംരക്ഷണ അടിസ്ഥാനങ്ങൾ',
      description: 'Efficient irrigation and water conservation methods',
      modules: 3,
      duration: '1.5 hours',
      difficulty: 'Beginner',
      progress: 30,
      isLocked: false,
      instructor: 'Prof. Lakshmi Menon',
      rating: 4.9,
      students: 892,
      badge: '💧',
      category: 'water'
    },
    {
      id: '3',
      title: 'Organic Farming Certification',
      titleMl: 'ജൈവകൃഷി സർട്ടിഫിക്കേഷൻ',
      description: 'Complete guide to get organic certification for your farm',
      modules: 7,
      duration: '3 hours',
      difficulty: 'Intermediate',
      progress: 0,
      isLocked: false,
      instructor: 'Er. Suresh Kumar',
      rating: 4.7,
      students: 567,
      badge: '🌿',
      category: 'certification'
    },
    {
      id: '4',
      title: 'Advanced Pest Management',
      titleMl: 'വിപുലമായ കീട നിയന്ത്രണം',
      description: 'Natural and integrated pest management strategies',
      modules: 4,
      duration: '2.5 hours',
      difficulty: 'Advanced',
      progress: 0,
      isLocked: true,
      instructor: 'Dr. Rajan Pillai',
      rating: 4.6,
      students: 423,
      badge: '🦟',
      category: 'pest'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'cultivation', label: 'Cultivation' },
    { value: 'water', label: 'Water Management' },
    { value: 'pest', label: 'Pest Control' },
    { value: 'certification', label: 'Certification' },
    { value: 'harvest', label: 'Harvest' }
  ];

  const handleStartCourse = (course: Course) => {
    if (course.isLocked) {
      alert(
        `🔐 Course Locked\n\n` +
        `Complete beginner courses to unlock:\n` +
        `"${course.title}"\n\n` +
        `Required: Complete any 2 beginner courses`
      );
      return;
    }

    alert(
      `📚 Starting Course: ${course.title}\n\n` +
      `Instructor: ${course.instructor}\n` +
      `Duration: ${course.duration}\n` +
      `Modules: ${course.modules}\n\n` +
      `Your progress: ${course.progress}%\n\n` +
      `Feature coming soon!`
    );
  };

  const handleDownload = (course: Course) => {
    alert(
      `📥 Download for Offline Learning\n\n` +
      `Course: ${course.title}\n` +
      `Size: ~50MB\n\n` +
      `Download course materials to learn without internet!\n\n` +
      `Feature coming soon!`
    );
  };

  const filteredCourses = courses.filter(course => 
    selectedCategory === 'all' || course.category === selectedCategory
  );

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
                <Sprout className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-green-800">Learning Center</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-green-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">Courses Enrolled</CardTitle>
                <BookOpen className="h-4 w-4 text-green-600" />
              </div>
              <p className="text-2xl font-bold">3</p>
            </CardHeader>
          </Card>
          <Card className="border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">Completed</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-2xl font-bold">1</p>
            </CardHeader>
          </Card>
          <Card className="border-purple-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">Certificates</CardTitle>
                <Trophy className="h-4 w-4 text-purple-600" />
              </div>
              <p className="text-2xl font-bold">1</p>
            </CardHeader>
          </Card>
          <Card className="border-amber-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">Hours Learned</CardTitle>
                <Clock className="h-4 w-4 text-amber-600" />
              </div>
              <p className="text-2xl font-bold">4.5</p>
            </CardHeader>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className={`hover:shadow-lg transition-all ${course.isLocked ? 'opacity-75' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{course.badge}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {course.title}
                        {course.isLocked && <Lock className="h-4 w-4 text-gray-400" />}
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-1">{course.titleMl}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary"
                    className={
                      course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      course.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }
                  >
                    {course.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Video className="h-4 w-4" />
                    <span>{course.modules} modules</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>{course.rating} ({course.students})</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.instructor}</span>
                  </div>
                </div>

                {course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button 
                    className={`flex-1 ${course.isLocked ? 'opacity-50' : 'bg-green-600 hover:bg-green-700'}`}
                    onClick={() => handleStartCourse(course)}
                    disabled={course.isLocked}
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    {course.progress > 0 ? 'Continue' : 'Start Course'}
                  </Button>
                  <Button 
                    variant="outline"
                    size="icon"
                    onClick={() => handleDownload(course)}
                    disabled={course.isLocked}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🏆 Your Learning Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">🌱</div>
                <p className="text-sm font-medium">Quick Learner</p>
                <p className="text-xs text-gray-500">Complete 1 course</p>
                <Badge variant="secondary" className="mt-1">Earned</Badge>
              </div>
              <div className="text-center opacity-50">
                <div className="text-3xl mb-2">📚</div>
                <p className="text-sm font-medium">Knowledge Seeker</p>
                <p className="text-xs text-gray-500">Complete 5 courses</p>
                <Badge variant="outline" className="mt-1">2/5</Badge>
              </div>
              <div className="text-center opacity-50">
                <div className="text-3xl mb-2">🎓</div>
                <p className="text-sm font-medium">Expert Farmer</p>
                <p className="text-xs text-gray-500">Complete all courses</p>
                <Badge variant="outline" className="mt-1">Locked</Badge>
              </div>
              <div className="text-center opacity-50">
                <div className="text-3xl mb-2">🌟</div>
                <p className="text-sm font-medium">Certified Pro</p>
                <p className="text-xs text-gray-500">Earn 3 certificates</p>
                <Badge variant="outline" className="mt-1">1/3</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}