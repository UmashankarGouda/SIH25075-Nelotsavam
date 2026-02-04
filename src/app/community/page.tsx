'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Sprout, 
  ArrowLeft,
  MessageSquare,
  ThumbsUp,
  Clock,
  TrendingUp,
  Search,
  Plus,
  Users,
  Flame,
  X,
  Send
} from 'lucide-react';
import { useUser } from '@/contexts/UserContext';

interface Reply {
  id: string;
  author: string;
  content: string;
  timeAgo: string;
}

interface Post {
  id: string;
  author: string;
  district: string;
  title: string;
  content: string;
  likes: number;
  replies: Reply[];
  timeAgo: string;
  tags: string[];
  isLiked: boolean;
}

export default function CommunityChat() {
  const router = useRouter();
  const { userData } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);
  const [showReplies, setShowReplies] = useState<string | null>(null);
  const [newPost, setNewPost] = useState({ title: '', content: '', tags: '' });
  const [newReply, setNewReply] = useState('');
  
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'Rajan Kumar',
      district: 'Thrissur',
      title: 'Best organic fertilizers for rice',
      content: 'I have been using neem cake and cow dung mixture for my rice fields. The results are amazing! The plants are healthier and pest problems have reduced significantly.',
      likes: 45,
      replies: [
        {
          id: '1-1',
          author: 'Priya Menon',
          content: 'Thanks for sharing! What ratio do you use for the mixture?',
          timeAgo: '1 hour ago'
        },
        {
          id: '1-2',
          author: 'Rajan Kumar',
          content: 'I use 1:3 ratio - 1 part neem cake to 3 parts cow dung. Works perfectly!',
          timeAgo: '30 mins ago'
        }
      ],
      timeAgo: '2 hours ago',
      tags: ['organic', 'fertilizer'],
      isLiked: false
    },
    {
      id: '2',
      author: 'Sreelatha Nair',
      district: 'Alappuzha',
      title: 'Managing pests during monsoon',
      content: 'Heavy rains are causing fungal infections in my rice crop. Has anyone tried natural remedies? I don\'t want to use chemical pesticides.',
      likes: 38,
      replies: [
        {
          id: '2-1',
          author: 'Dr. Krishnan',
          content: 'Try neem oil spray mixed with garlic extract. It\'s very effective against fungal infections.',
          timeAgo: '3 hours ago'
        }
      ],
      timeAgo: '5 hours ago',
      tags: ['pest-control', 'monsoon'],
      isLiked: false
    },
    {
      id: '3',
      author: 'Mohammed Ali',
      district: 'Palakkad',
      title: 'Water-saving techniques that work',
      content: 'Implemented alternate wetting and drying (AWD) method in my fields. Saved 30% water without affecting yield. Here\'s how I did it...',
      likes: 67,
      replies: [],
      timeAgo: '1 day ago',
      tags: ['water-management', 'sustainable'],
      isLiked: false
    }
  ]);

  const trendingTopics = [
    { name: 'Organic Farming', count: 234 },
    { name: 'Pest Management', count: 189 },
    { name: 'Water Conservation', count: 156 },
    { name: 'Harvest Tips', count: 142 },
    { name: 'Soil Health', count: 128 }
  ];

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
        : post
    ));
  };

  const handleSubmitPost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) {
      alert('Please fill in both title and content!');
      return;
    }

    const tags = newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    const post: Post = {
      id: Date.now().toString(),
      author: userData?.name || 'Anonymous Farmer',
      district: userData?.district || 'Unknown',
      title: newPost.title,
      content: newPost.content,
      likes: 0,
      replies: [],
      timeAgo: 'Just now',
      tags: tags,
      isLiked: false
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', tags: '' });
    setShowNewPost(false);
  };

  const handleSubmitReply = (postId: string) => {
    if (!newReply.trim()) return;

    const reply: Reply = {
      id: `${postId}-${Date.now()}`,
      author: userData?.name || 'Anonymous Farmer',
      content: newReply,
      timeAgo: 'Just now'
    };

    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, replies: [...post.replies, reply] }
        : post
    ));

    setNewReply('');
    // Don't close the replies section after posting
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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
              <h1 className="text-xl font-bold text-green-800">Community Forum</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <Users className="h-3 w-3 mr-1" />
              1,234 farmers online
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search and New Post */}
            <div className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  className="pl-10"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => setShowNewPost(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <span className="font-medium">{post.author}</span>
                          <span>•</span>
                          <span>{post.district}</span>
                          <span>•</span>
                          <span>{post.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{post.content}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={post.isLiked ? "text-green-600" : ""}
                          onClick={() => handleLike(post.id)}
                        >
                          <ThumbsUp className={`h-4 w-4 mr-1 ${post.isLiked ? "fill-current" : ""}`} />
                          {post.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowReplies(showReplies === post.id ? null : post.id)}
                        >
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {post.replies.length} replies
                        </Button>
                      </div>
                    </div>
                    
                    {/* Replies Section */}
                    {showReplies === post.id && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="space-y-3">
                          {post.replies.map((reply) => (
                            <div key={reply.id} className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex justify-between items-start mb-1">
                                <span className="font-medium text-sm">{reply.author}</span>
                                <span className="text-xs text-gray-500">{reply.timeAgo}</span>
                              </div>
                              <p className="text-sm text-gray-700">{reply.content}</p>
                            </div>
                          ))}
                          
                          {/* Reply Input */}
                          <div className="flex gap-2">
                            <Input
                              placeholder="Write a reply..."
                              value={newReply}
                              onChange={(e) => setNewReply(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                  e.preventDefault();
                                  handleSubmitReply(post.id);
                                }
                              }}
                              className="flex-1"
                            />
                            <Button
                              size="sm"
                              onClick={() => handleSubmitReply(post.id)}
                              disabled={!newReply.trim()}
                            >
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <Card>
                <CardContent className="text-center py-8">
                  <p className="text-gray-500">No posts found matching your search.</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-500" />
                Trending Topics
              </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trendingTopics.map((topic) => (
                    <div 
                      key={topic.name}
                      className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="text-sm">{topic.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {topic.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Members</span>
                  <span className="font-semibold">12,456</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Posts Today</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Districts</span>
                  <span className="font-semibold">14/14</span>
                </div>
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Be respectful to all farmers</li>
                  <li>• Share accurate information</li>
                  <li>• Use appropriate language</li>
                  <li>• Help fellow farmers</li>
                  <li>• Report inappropriate content</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Create New Post</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowNewPost(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <CardDescription>
                Share your farming experiences with the community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="post-title">Title</Label>
                <Input
                  id="post-title"
                  placeholder="What's your topic?"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="post-content">Content</Label>
                <Textarea
                  id="post-content"
                  placeholder="Share your story, ask questions, or give advice..."
                  rows={5}
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="post-tags">Tags (comma separated)</Label>
                <Input
                  id="post-tags"
                  placeholder="e.g., organic, pest-control, water-management"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                />
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={handleSubmitPost}
                  disabled={!newPost.title.trim() || !newPost.content.trim()}
                >
                  Post to Community
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowNewPost(false);
                    setNewPost({ title: '', content: '', tags: '' });
                  }}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
