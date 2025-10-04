import { Link } from "react-router";
import { Calendar, User } from "lucide-react";
import type { Article } from "@/shared/types";
import ImageSlider from "@/react-app/components/ImageSlider";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  images?: string[];
}

export default function ArticleCard({ article, featured = false, images }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('te-IN', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (featured) {
    return (
      <Link to={`/article/${article.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
          {(images && images.length > 0) ? (
            <div className="aspect-[16/9] overflow-hidden">
              <ImageSlider 
                images={images}
                alt={article.title}
                autoSlide={true}
                slideInterval={5000}
              />
            </div>
          ) : article.image_url && (
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                {article.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(article.published_at)}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
              {article.title}
            </h2>
            {article.summary && (
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.summary}
              </p>
            )}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.slug}`} className="group block">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group-hover:-translate-y-0.5">
        {(images && images.length > 0) ? (
          <div className="aspect-[16/10] overflow-hidden">
            <ImageSlider 
              images={images}
              alt={article.title}
              autoSlide={true}
              slideInterval={5000}
            />
          </div>
        ) : article.image_url && (
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-4">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
              {article.category}
            </span>
            <span>{formatDate(article.published_at)}</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
          {article.summary && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {article.summary}
            </p>
          )}
          <div className="text-xs text-gray-500">
            {article.author}
          </div>
        </div>
      </div>
    </Link>
  );
}
