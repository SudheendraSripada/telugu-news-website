import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="https://mocha-cdn.com/01983648-f9d4-7424-a96a-a776c1c5d5cc/generated_image-copy.png" 
              alt="తెలుగు వార్తలు"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              విశ్వసనీయ తెలుగు వార్తలు మరియు లేటెస్ట్ అప్‌డేట్‌లు. తెలుగు రాష్ట్రాల వార్తలు, సినిమా, క్రీడలు మరియు వ్యాపార వార్తల కోసం మాతో ఉండండి.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                ట్విట్టర్
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                ఫేస్‌బుక్
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                యూట్యూబ్
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">వర్గాలు</h3>
            <ul className="space-y-2">
              <li><Link to="/category/state" className="text-gray-300 hover:text-white transition-colors">రాష్ట్రం</Link></li>
              <li><Link to="/category/national" className="text-gray-300 hover:text-white transition-colors">దేశం</Link></li>
              <li><Link to="/category/cinema" className="text-gray-300 hover:text-white transition-colors">సినిమా</Link></li>
              <li><Link to="/category/sports" className="text-gray-300 hover:text-white transition-colors">క్రీడలు</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">కంపెనీ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">మా గురించి</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">సంప్రదించండి</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">గోప్యతా విధానం</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">సేవా నిబంధనలు</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 తెలుగు వార్తలు. అన్ని హక్కులు రిజర్వ్‌డ్.</p>
        </div>
      </div>
    </footer>
  );
}
