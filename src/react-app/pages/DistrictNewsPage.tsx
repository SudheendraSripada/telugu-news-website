import { useParams, Link } from "react-router";
import { useArticles, useCategories } from "@/react-app/hooks/useApi";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import ArticleCard from "@/react-app/components/ArticleCard";
import { ArrowLeft, MapPin, Loader2 } from "lucide-react";

const districtNames: Record<string, Record<string, string>> = {
  "andhra-pradesh": {
    "visakhapatnam": "విశాఖపట్నం",
    "vijayawada": "విజయవాడ",
    "tirupati": "తిరుపతి",
    "rajahmundry": "రాజమహేంద్రవరం",
    "kurnool": "కర్నూలు",
    "nellore": "నెల్లూరు",
    "kadapa": "కడప",
    "anantapur": "అనంతపురం",
    "chittoor": "చిత్తూరు",
    "guntur": "గుంటూరు",
    "prakasam": "ప్రకాశం",
    "srikakulam": "శ్రీకాకుళం",
    "vizianagaram": "విజయనగరం"
  },
  "telangana": {
    "hyderabad": "హైదరాబాద్",
    "warangal": "వరంగల్",
    "nizamabad": "నిజామాబాద్",
    "karimnagar": "కరీంనగర్",
    "khammam": "ఖమ్మం",
    "mahabubnagar": "మహబూబనగర్",
    "rangareddy": "రంగారెడ్డి",
    "medak": "మెదక్",
    "nalgonda": "నల్గొండ",
    "adilabad": "ఆదిలాబాద్",
    "sangareddy": "సంగారెడ్డి",
    "siddipet": "సిద్దిపేట",
    "jayashankar": "జయశంకర్",
    "jangaon": "జంగావ్",
    "bhadradri": "భద్రాద్రి"
  }
};

const stateNames: Record<string, string> = {
  "andhra-pradesh": "ఆంధ్రప్రదేశ్",
  "telangana": "తెలంగాణ"
};

export default function DistrictNewsPage() {
  const { stateSlug, districtSlug } = useParams<{ stateSlug: string; districtSlug: string }>();
  const { categories } = useCategories();
  const { articles, loading, error } = useArticles("రాష్ట్రం");

  const stateName = stateSlug ? stateNames[stateSlug] : null;
  const districtName = stateSlug && districtSlug ? districtNames[stateSlug]?.[districtSlug] : null;

  // Filter articles that might be related to this district (in a real app, you'd have district-specific filtering)
  const districtArticles = articles.filter(article => {
    // General district matching
    const basicMatch = article.title.toLowerCase().includes(districtSlug?.replace('-', ' ') || '') ||
      article.content.toLowerCase().includes(districtSlug?.replace('-', ' ') || '') ||
      article.title.includes(districtName || '') ||
      article.content.includes(districtName || '');
    
    // Special case: Weather alerts affect multiple districts in AP
    const isWeatherAlert = article.category === 'వాతావరణం' && article.author === 'ఏపి విపత్తుల నిర్వహణ సంస్థ';
    const isAPDistrict = stateSlug === 'andhra-pradesh';
    
    // Include weather alerts for all AP districts since they affect the entire coastal region
    if (isWeatherAlert && isAPDistrict) {
      return true;
    }
    
    return basicMatch;
  });

  // If no district-specific articles, show some general state articles
  const displayArticles = districtArticles.length > 0 ? districtArticles : articles.slice(0, 6);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header categories={categories} />
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin">
            <Loader2 className="w-10 h-10 text-orange-600" />
          </div>
          <p className="mt-4 text-gray-600">జిల్లా వార్తలు లోడ్ అవుతున్నాయి...</p>
        </div>
      </div>
    );
  }

  if (!stateName || !districtName) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header categories={categories} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">జిల్లా కనుగొనబడలేదు</h1>
          <p className="text-gray-600 mb-8">మీరు వెతుకుతున్న జిల్లా ఉనికిలో లేదు.</p>
          <Link 
            to="/states" 
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            రాష్ట్రాలకు వెళ్లండి
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
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link 
            to="/states" 
            className="text-orange-600 hover:text-orange-700 transition-colors"
          >
            రాష్ట్రాలు
          </Link>
          <span className="text-gray-400">→</span>
          <Link 
            to={`/state/${stateSlug}`} 
            className="text-orange-600 hover:text-orange-700 transition-colors"
          >
            {stateName}
          </Link>
          <span className="text-gray-400">→</span>
          <span className="text-gray-600">{districtName}</span>
        </div>

        <Link 
          to={`/state/${stateSlug}`} 
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {stateName} జిల్లాలకు వెళ్లండి
        </Link>

        {/* Page Header */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-12">
          <div className="flex items-center mb-4">
            <MapPin className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {districtName} వార్తలు
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {stateName} రాష్ట్రం - {districtName} జిల్లా
              </p>
            </div>
          </div>
          <p className="text-gray-700 max-w-3xl">
            {districtName} జిల్లా నుండి తాజా వార్తలు, స్థానిక సంఘటనలు, పరిపాలన అప్‌డేట్‌లు మరియు ముఖ్యమైన సమాచారం.
          </p>
        </div>

        {/* News Categories for District */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-blue-600 text-xl">🏛️</span>
            </div>
            <h3 className="font-semibold text-gray-900">పరిపాలన</h3>
          </div>
          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-green-600 text-xl">🌾</span>
            </div>
            <h3 className="font-semibold text-gray-900">వ్యవసాయం</h3>
          </div>
          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-purple-600 text-xl">🏭</span>
            </div>
            <h3 className="font-semibold text-gray-900">పారిశ్రామికం</h3>
          </div>
          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-orange-600 text-xl">👥</span>
            </div>
            <h3 className="font-semibold text-gray-900">సామాజిక</h3>
          </div>
        </div>

        {/* District News Articles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
            {districtName} తాజా వార్తలు
          </h2>
          
          {displayArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {districtName} జిల్లా వార్తలు కనుగొనబడలేదు
              </h3>
              <p className="text-gray-500 mb-6">
                ప్రస్తుతం ఈ జిల్లాకు సంబంధించిన వార్తలు అందుబాటులో లేవు. తిరిగి తనిఖీ చేయండి.
              </p>
              <Link 
                to={`/state/${stateSlug}`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                ఇతర జిల్లాలను చూడండి
              </Link>
            </div>
          )}
        </div>

        {/* District Info */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {districtName} గురించి
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">ప్రాంతీయ సమాచారం</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• స్థానిక పరిపాలన అప్‌డేట్‌లు</li>
                <li>• వ్యవసాయ మరియు గ్రామీణ వార్తలు</li>
                <li>• విద్య మరియు ఆరోగ్య సేవలు</li>
                <li>• రవాణా మరియు అవస్థాపన</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">వార్తా వర్గాలు</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• రాజకీయ పరిణామాలు</li>
                <li>• సామాజిక సంఘటనలు</li>
                <li>• ఆర్థిక అభివృద్ధి</li>
                <li>• సాంస్కృతిక కార్యక్రమాలు</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
