import { Link } from "react-router";
import { TrendingUp, Clock, Eye } from "lucide-react";
import type { Article, Category } from "@/shared/types";

interface TrendingNewsSidebarProps {
  featuredArticles: Article[];
  categories: Category[];
  recentArticles: Article[];
}

export default function TrendingNewsSidebar({ 
  featuredArticles, 
  categories, 
  recentArticles 
}: TrendingNewsSidebarProps) {
  return (
    <div className="space-y-8">
      {/* Trending News */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-red-600" />
          ట్రెండింగ్ వార్తలు
        </h3>
        <div className="space-y-4">
          {featuredArticles.slice(0, 5).map((article, index) => (
            <div key={article.id} className="flex items-start gap-3 pb-3 border-b border-orange-200 last:border-b-0">
              <span className="bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {index + 1}
              </span>
              <div className="flex-1">
                <Link 
                  to={`/article/${article.slug}`} 
                  className="font-medium text-gray-900 hover:text-red-600 transition-colors line-clamp-2 text-sm leading-snug"
                >
                  {article.title}
                </Link>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(article.published_at).toLocaleDateString('te-IN', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Categories */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">వర్గాల వారీగా</h3>
        <div className="grid grid-cols-1 gap-2">
          {categories.slice(0, 8).map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors group"
            >
              <span className="font-medium text-gray-700 group-hover:text-orange-700">
                {category.name}
              </span>
              <span className="text-gray-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Updates */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5 text-blue-600" />
          తాజా అప్డేట్స్
        </h3>
        <div className="space-y-4">
          {recentArticles.slice(0, 6).map((article) => (
            <div key={article.id} className="pb-3 border-b border-blue-200 last:border-b-0">
              <Link to={`/article/${article.slug}`} className="block group">
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm mb-2 leading-snug">
                  {article.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <span>
                    {new Date(article.published_at).toLocaleDateString('te-IN', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Widget */}
      <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">వాతావరణం</h3>
        <div className="text-center">
          <div className="text-3xl mb-2">🌤️</div>
          <div className="text-2xl font-bold text-gray-900">28°C</div>
          <div className="text-sm text-gray-600 mb-3">హైదరాబాద్</div>
          <div className="text-xs text-gray-500">
            తేలికపాటి మేఘాలు • తేమశాతం: 65%
          </div>
        </div>
      </div>
    </div>
  );
}
