import { useArticles, useCategories } from "@/react-app/hooks/useApi";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import ArticleCard from "@/react-app/components/ArticleCard";
import { Loader2, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const statesList = [
  { name: "తెలంగాణ", slug: "telangana", color: "bg-blue-500", clickable: true },
  { name: "ఆంధ్రప్రదేశ్", slug: "andhra-pradesh", color: "bg-green-500", clickable: true },
  { name: "కర్ణాటక", slug: "karnataka", color: "bg-red-500", clickable: false },
  { name: "తమిళనాడు", slug: "tamil-nadu", color: "bg-purple-500", clickable: false },
  { name: "కేరళ", slug: "kerala", color: "bg-orange-500", clickable: false },
  { name: "మహారాష్ట్ర", slug: "maharashtra", color: "bg-indigo-500", clickable: false },
  { name: "గుజరాత్", slug: "gujarat", color: "bg-pink-500", clickable: false },
  { name: "రాజస్థాన్", slug: "rajasthan", color: "bg-yellow-500", clickable: false },
  { name: "మధ్యప్రదేశ్", slug: "madhya-pradesh", color: "bg-teal-500", clickable: false },
  { name: "ఉత్తర్ప్రదేశ్", slug: "uttar-pradesh", color: "bg-cyan-500", clickable: false },
  { name: "బీహార్", slug: "bihar", color: "bg-emerald-500", clickable: false },
  { name: "పశ్చిమ బెంగాల్", slug: "west-bengal", color: "bg-rose-500", clickable: false }
];

export default function StatesPage() {
  const { categories } = useCategories();
  const { articles: stateArticles, loading } = useArticles("రాష్ట్రం");

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header categories={categories} />
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin">
            <Loader2 className="w-10 h-10 text-orange-600" />
          </div>
          <p className="mt-4 text-gray-600">రాష్ట్రాల వార్తలు లోడ్ అవుతున్నాయి...</p>
        </div>
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

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MapPin className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            రాష్ట్రాల వార్తలు
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            భారతదేశంలోని వివిధ రాష్ట్రాల నుండి తాజా వార్తలు మరియు అప్‌డేట్‌లు. మీ రాష్ట్రం ఎంచుకుని సంబంధిత వార్తలను చూడండి.
          </p>
        </div>

        {/* States Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">రాష్ట్రాలను ఎంచుకోండి</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {statesList.map((state) => (
              state.clickable ? (
                <Link
                  key={state.slug}
                  to={`/state/${state.slug}`}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group cursor-pointer border-2 border-transparent hover:border-blue-200"
                >
                  <div className={`w-12 h-12 ${state.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {state.name}
                  </h3>
                  <p className="text-xs text-green-600 mt-1 font-medium">జిల్లాలు చూడండి</p>
                </Link>
              ) : (
                <div
                  key={state.slug}
                  className="bg-white rounded-lg p-6 text-center opacity-60 cursor-not-allowed border-2 border-gray-200"
                >
                  <div className={`w-12 h-12 ${state.color} rounded-full mx-auto mb-3 flex items-center justify-center opacity-60`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {state.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">త్వరలో వస్తుంది</p>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Featured State News */}
        {stateArticles.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
              రాష్ట్ర వార్తలు
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* Popular States Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">ప్రముఖ రాష్ట్రాలు</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/state/telangana"
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">తెలంగాణ</h3>
              </div>
              <p className="text-gray-700 mb-4">
                హైదరాబాద్, సైబరాబాద్, IT హబ్, పాలిసీలు మరియు రాజకీయ పరిణామాలు
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">IT</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">రాజకీయాలు</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">వ్యాపారం</span>
              </div>
              <p className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                జిల్లాలు చూడండి →
              </p>
            </Link>

            <Link
              to="/state/andhra-pradesh"
              className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">ఆంధ్రప్రదేశ్</h3>
              </div>
              <p className="text-gray-700 mb-4">
                విజయవాడ, విశాఖపట్నం, వ్యవసాయం, పారిశ్రామిక అభివృద్ధి మరియు రాజకీయాలు
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">వ్యవసాయం</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">పోర్టు</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">పారిశ్రామికం</span>
              </div>
              <p className="text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors">
                జిల్లాలు చూడండి →
              </p>
            </Link>
          </div>
        </div>

        {stateArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              ప్రస్తుతం రాష్ట్ర వార్తలు అందుబాటులో లేవు.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
