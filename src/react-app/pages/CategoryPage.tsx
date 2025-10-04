import { useParams } from "react-router";
import { useArticles, useCategories } from "@/react-app/hooks/useApi";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import ArticleCard from "@/react-app/components/ArticleCard";
import { Loader2, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { categories } = useCategories();
  const { articles, loading, error } = useArticles(categorySlug);

  const currentCategory = categories.find(cat => cat.slug === categorySlug);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header categories={categories} />
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin">
            <Loader2 className="w-10 h-10 text-orange-600" />
          </div>
          <p className="mt-4 text-gray-600">వార్తలు లోడ్ అవుతున్నాయి...</p>
        </div>
      </div>
    );
  }

  if (error || !currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header categories={categories} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">వర్గం కనుగొనబడలేదు</h1>
          <p className="text-gray-600 mb-8">మీరు వెతుకుతున్న వర్గం ఉనికిలో లేదు.</p>
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header categories={categories} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          మొదటి పేజీకి వెళ్లండి
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentCategory.name}
          </h1>
          {currentCategory.description && (
            <p className="text-xl text-gray-600">
              {currentCategory.description}
            </p>
          )}
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {currentCategory.name} వర్గంలో వార్తలు కనుగొనబడలేదు.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
