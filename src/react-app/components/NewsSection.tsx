import { Link } from "react-router";
import ArticleCard from "@/react-app/components/ArticleCard";
import type { Article } from "@/shared/types";

interface NewsSectionProps {
  title: string;
  articles: Article[];
  categorySlug?: string;
  colorScheme?: 'orange' | 'blue' | 'green' | 'purple' | 'red';
  layout?: 'grid' | 'list';
  showMore?: boolean;
}

export default function NewsSection({ 
  title, 
  articles, 
  categorySlug, 
  colorScheme = 'blue',
  layout = 'grid',
  showMore = true 
}: NewsSectionProps) {
  const colorClasses = {
    orange: {
      border: 'border-orange-600',
      text: 'text-orange-600 hover:text-orange-700',
      bg: 'bg-orange-50'
    },
    blue: {
      border: 'border-blue-600',
      text: 'text-blue-600 hover:text-blue-700',
      bg: 'bg-blue-50'
    },
    green: {
      border: 'border-green-600',
      text: 'text-green-600 hover:text-green-700',
      bg: 'bg-green-50'
    },
    purple: {
      border: 'border-purple-600',
      text: 'text-purple-600 hover:text-purple-700',
      bg: 'bg-purple-50'
    },
    red: {
      border: 'border-red-600',
      text: 'text-red-600 hover:text-red-700',
      bg: 'bg-red-50'
    }
  };

  const colors = colorClasses[colorScheme];

  if (articles.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-2xl font-bold text-gray-900 border-l-4 ${colors.border} pl-4`}>
          {title}
        </h3>
        {showMore && categorySlug && (
          <Link 
            to={`/category/${categorySlug}`} 
            className={`${colors.text} font-medium transition-colors`}
          >
            మరిన్ని చూడండి →
          </Link>
        )}
      </div>
      
      {layout === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className={`${colors.bg} rounded-lg p-4`}>
              <Link to={`/article/${article.slug}`} className="block">
                <div className="flex items-start gap-4">
                  {article.image_url && (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-24 h-16 object-cover rounded flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h4>
                    {article.summary && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                        {article.summary}
                      </p>
                    )}
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>
                        {new Date(article.published_at).toLocaleDateString('te-IN', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
