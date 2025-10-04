import { useArticles, useCategories } from "@/react-app/hooks/useApi";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import ArticleCard from "@/react-app/components/ArticleCard";
import NewsSection from "@/react-app/components/NewsSection";
import TrendingNewsSidebar from "@/react-app/components/TrendingNewsSidebar";
import { Loader2, TrendingUp } from "lucide-react";
export default function Home() {
  const {
    categories
  } = useCategories();
  const {
    articles: featuredArticles,
    loading: featuredLoading
  } = useArticles(undefined, true);
  const {
    articles: recentArticles,
    loading: recentLoading
  } = useArticles();
  if (featuredLoading || recentLoading) {
    return <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin">
          <Loader2 className="w-10 h-10 text-orange-600" />
        </div>
        <p className="mt-4 text-gray-600">వార్తలు లోడ్ అవుతున్నాయి...</p>
      </div>;
  }
  const nonFeaturedArticles = recentArticles.filter(article => !article.is_featured);
  return <div className="min-h-screen bg-gray-50">
      <Header categories={categories} />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://mocha-cdn.com/01983648-f9d4-7424-a96a-a776c1c5d5cc/generated_image-copy.png" 
                  alt="తెలుగు వార్తలు"
                  className="h-60 md:h-96 w-auto object-contain"
                />
              </div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                తాజా వార్తలు, వివరణాత్మక విశ్లేషణ మరియు ముఖ్యమైన సంఘటనల సమగ్ర కవరేజీ
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-6 h-6 text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">ముఖ్య వార్తలు</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map(article => {
                  // Special handling for P4 scheme article with image slider
                  if (article.slug === 'zero-poverty-p4-cm-chandrababu-bangaru-families-adoption') {
                    const p4Images = [
                      'https://mocha-cdn.com/01983648-f9d4-7424-a96a-a776c1c5d5cc/news-25.07-1.jpg',
                      'https://mocha-cdn.com/01983648-f9d4-7424-a96a-a776c1c5d5cc/news-25.07-2.jpg',
                      'https://mocha-cdn.com/01983648-f9d4-7424-a96a-a776c1c5d5cc/news-25.07-3i.jpg'
                    ];
                    return <ArticleCard key={article.id} article={article} featured images={p4Images} />;
                  }
                  return <ArticleCard key={article.id} article={article} featured />;
                })}
              </div>
            </div>
          </section>}

        {/* Breaking News Ticker */}
        <section className="bg-red-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <span className="bg-yellow-500 text-red-900 px-3 py-1 rounded font-bold text-sm mr-4">
                బ్రేకింగ్
              </span>
              <div className="flex-1 overflow-hidden">
                <div className="animate-pulse">
                  <span className="text-sm">
                    తెలంగాణలో కొత్త IT పాలసీ ప్రకటన • హైదరాబాద్ మెట్రో కొత్త రూట్ ప్రారంభం • పుష్ప 2 సినిమా బాక్సాఫీస్ రికార్డులు
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main News Sections */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">తాజా వార్తలు</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {nonFeaturedArticles.slice(0, 6).map(article => <ArticleCard key={article.id} article={article} />)}
                </div>

                <NewsSection title="వ్యాపార వార్తలు" articles={recentArticles.filter(article => article.category === 'వ్యాపారం').slice(0, 3)} categorySlug="business" colorScheme="green" />

                <NewsSection title="క్రీడా వార్తలు" articles={recentArticles.filter(article => article.category === 'క్రీડలు').slice(0, 3)} categorySlug="sports" colorScheme="blue" />

                <NewsSection title="సినిమా వార్తలు" articles={recentArticles.filter(article => article.category === 'సినిమా').slice(0, 3)} categorySlug="cinema" colorScheme="purple" />

                <NewsSection title="ఆరోగ్య వార్తలు" articles={recentArticles.filter(article => article.category === 'ఆరోగ్యం').slice(0, 3)} categorySlug="health" colorScheme="red" />

                <NewsSection title="సైన్స్ & టెక్నాలజీ" articles={recentArticles.filter(article => article.category === 'సైన్స్').slice(0, 3)} categorySlug="science" colorScheme="blue" />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <TrendingNewsSidebar featuredArticles={featuredArticles} categories={categories} recentArticles={recentArticles} />
              </div>
            </div>
            
            {nonFeaturedArticles.length === 0 && <div className="text-center py-12">
                <p className="text-gray-500 text-lg">ప్రస్తుతం వార్తలు అందుబాటులో లేవు.</p>
              </div>}
          </div>
        </section>

        {/* State News Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">రాష్ట్ర వార్తలు</h2>
              <a href="/category/state" className="text-blue-600 hover:text-blue-700 font-medium">
                మరిన్ని చూడండి →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentArticles.filter(article => article.category === 'రాష్ట్రం').slice(0, 4).map(article => <ArticleCard key={article.id} article={article} />)}
            </div>
          </div>
        </section>

        {/* National News Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">దేశ వార్తలు</h2>
              <a href="/category/national" className="text-blue-600 hover:text-blue-700 font-medium">
                మరిన్ని చూడండి →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentArticles.filter(article => article.category === 'దేశం').slice(0, 3).map(article => <ArticleCard key={article.id} article={article} />)}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">వర్గాల వారీగా చూడండి</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map(category => <a key={category.slug} href={`/category/${category.slug}`} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {category.name}
                  </h3>
                  {category.description && <p className="text-sm text-gray-600 mt-2">
                      {category.description}
                    </p>}
                </a>)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
}
