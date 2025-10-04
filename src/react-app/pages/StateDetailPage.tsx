import { useParams, Link } from "react-router";
import { useCategories } from "@/react-app/hooks/useApi";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { ArrowLeft, MapPin } from "lucide-react";

interface District {
  name: string;
  slug: string;
  color: string;
}

const stateDistrictsData: Record<string, { name: string; districts: District[] }> = {
  "andhra-pradesh": {
    name: "ఆంధ్రప్రదేశ్",
    districts: [
      { name: "విశాఖపట్నం", slug: "visakhapatnam", color: "bg-blue-500" },
      { name: "విజయవాడ", slug: "vijayawada", color: "bg-green-500" },
      { name: "తిరుపతి", slug: "tirupati", color: "bg-red-500" },
      { name: "రాజమహేంద్రవరం", slug: "rajahmundry", color: "bg-purple-500" },
      { name: "కర్నూలు", slug: "kurnool", color: "bg-orange-500" },
      { name: "నెల్లూరు", slug: "nellore", color: "bg-indigo-500" },
      { name: "కడప", slug: "kadapa", color: "bg-pink-500" },
      { name: "అనంతపురం", slug: "anantapur", color: "bg-yellow-500" },
      { name: "చిత్తూరు", slug: "chittoor", color: "bg-teal-500" },
      { name: "గుంటూరు", slug: "guntur", color: "bg-cyan-500" },
      { name: "ప్రకాశం", slug: "prakasam", color: "bg-emerald-500" },
      { name: "శ్రీకాకుళం", slug: "srikakulam", color: "bg-rose-500" },
      { name: "విజయనగరం", slug: "vizianagaram", color: "bg-slate-500" }
    ]
  },
  "telangana": {
    name: "తెలంగాణ",
    districts: [
      { name: "హైదరాబాద్", slug: "hyderabad", color: "bg-blue-500" },
      { name: "వరంగల్", slug: "warangal", color: "bg-green-500" },
      { name: "నిజామాబాద్", slug: "nizamabad", color: "bg-red-500" },
      { name: "కరీంనగర్", slug: "karimnagar", color: "bg-purple-500" },
      { name: "ఖమ్మం", slug: "khammam", color: "bg-orange-500" },
      { name: "మహబూబనగర్", slug: "mahabubnagar", color: "bg-indigo-500" },
      { name: "రంగారెడ్డి", slug: "rangareddy", color: "bg-pink-500" },
      { name: "మెదక్", slug: "medak", color: "bg-yellow-500" },
      { name: "నల్గొండ", slug: "nalgonda", color: "bg-teal-500" },
      { name: "ఆదిలాబాద్", slug: "adilabad", color: "bg-cyan-500" },
      { name: "సంగారెడ్డి", slug: "sangareddy", color: "bg-emerald-500" },
      { name: "సిద్దిపేట", slug: "siddipet", color: "bg-rose-500" },
      { name: "జయశంకర్", slug: "jayashankar", color: "bg-slate-500" },
      { name: "జంగావ్", slug: "jangaon", color: "bg-amber-500" },
      { name: "భద్రాద్రి", slug: "bhadradri", color: "bg-lime-500" }
    ]
  }
};

export default function StateDetailPage() {
  const { stateSlug } = useParams<{ stateSlug: string }>();
  const { categories } = useCategories();

  const stateData = stateSlug ? stateDistrictsData[stateSlug] : null;

  if (!stateData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header categories={categories} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">రాష్ట్రం కనుగొనబడలేదు</h1>
          <p className="text-gray-600 mb-8">మీరు వెతుకుతున్న రాష్ట్రం ఉనికిలో లేదు.</p>
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
        <Link 
          to="/states" 
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          రాష్ట్రాలకు వెళ్లండి
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MapPin className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {stateData.name} జిల్లాలు
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {stateData.name} రాష్ట్రంలోని వివిధ జిల్లాల నుండి తాజా వార్తలు మరియు అప్‌డేట్‌లు. మీ జిల్లాను ఎంచుకుని సంబంధిత వార్తలను చూడండి.
          </p>
        </div>

        {/* Districts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">జిల్లాలను ఎంచుకోండి</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {stateData.districts.map((district) => (
              <Link
                key={district.slug}
                to={`/district/${stateSlug}/${district.slug}`}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group cursor-pointer border-2 border-transparent hover:border-blue-200"
              >
                <div className={`w-12 h-12 ${district.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                  {district.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* State Info Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {stateData.name} గురించి
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ముఖ్య సమాచారం</h3>
              <p className="text-gray-700">
                {stateData.name} రాష్ట్రంలో {stateData.districts.length} జిల్లాలు ఉన్నాయి. వివిధ జిల్లాల వార్తలు, పరిపాలన అప్‌డేట్‌లు మరియు స్థానిక సంఘటనలను ఇక్కడ చూడవచ్చు.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ప్రాంతీయ వార్తలు</h3>
              <p className="text-gray-700">
                రాజకీయాలు, వ్యవసాయం, పారిశ్రామికం, విద్య, ఆరోగ్యం మరియు క్రీడలకు సంబంధించిన తాజా వార్తలను పొందండి.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Districts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ప్రముఖ జిల్లాలు</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateData.districts.slice(0, 6).map((district) => (
              <Link
                key={district.slug}
                to={`/district/${stateSlug}/${district.slug}`}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="flex items-center mb-3">
                  <div className={`w-8 h-8 ${district.color} rounded-full flex items-center justify-center mr-3`}>
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {district.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {district.name} జిల్లా వార్తలు మరియు అప్‌డేట్‌లను చూడండి
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
