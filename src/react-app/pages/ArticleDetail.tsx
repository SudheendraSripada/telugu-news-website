import { useParams } from "react-router";
import { useArticle, useCategories } from "@/react-app/hooks/useApi";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { Loader2, Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { article, loading, error } = useArticle(slug!);
  const { categories } = useCategories();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header categories={categories} />
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin">
            <Loader2 className="w-10 h-10 text-orange-600" />
          </div>
          <p className="mt-4 text-gray-600">వార్త లోడ్ అవుతోంది...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header categories={categories} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">వార్త కనుగొనబడలేదు</h1>
          <p className="text-gray-600 mb-8">మీరు వెతుకుతున్న వార్త ఉనికిలో లేదు లేదా తొలగించబడింది.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            మొదటి పేజీకి వెళ్లండి
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('te-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header categories={categories} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          మొదటి పేజీకి వెళ్లండి
        </Link>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {article.image_url && (
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                {article.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(article.published_at)}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {article.summary && (
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {article.summary}
              </p>
            )}

            <div className="flex items-center gap-2 text-gray-600 mb-8 pb-6 border-b border-gray-200">
              <User className="w-5 h-5" />
              <span className="font-medium">{article.author}</span>
            </div>

            <div className="prose prose-lg prose-blue max-w-none">
              {article.content.split('\n').map((paragraph, index) => (
                paragraph.trim() ? (
                  <p key={index} className="mb-4 leading-relaxed text-gray-800">
                    {paragraph}
                  </p>
                ) : null
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
