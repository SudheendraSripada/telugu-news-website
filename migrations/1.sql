
CREATE TABLE articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  summary TEXT,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT 0,
  is_published BOOLEAN DEFAULT 1,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories (name, slug, description) VALUES 
('World', 'world', 'International news and global affairs'),
('Politics', 'politics', 'Political news and government updates'),
('Technology', 'technology', 'Tech industry news and innovations'),
('Business', 'business', 'Financial markets and business news'),
('Sports', 'sports', 'Sports news and updates'),
('Entertainment', 'entertainment', 'Celebrity news and entertainment industry');

INSERT INTO articles (title, slug, summary, content, author, category, image_url, is_featured) VALUES 
('Breaking: Major Technology Breakthrough Announced', 'major-tech-breakthrough', 'Scientists reveal revolutionary advancement in quantum computing that could change everything.', 'In a groundbreaking announcement today, researchers at leading technology institutes have unveiled a significant breakthrough in quantum computing technology. This development promises to revolutionize how we approach complex computational problems, from drug discovery to climate modeling.

The new quantum processor demonstrates unprecedented stability and processing power, maintaining quantum coherence for extended periods previously thought impossible. This advancement brings practical quantum computing applications much closer to reality.

"This is a watershed moment for quantum technology," said Dr. Sarah Chen, lead researcher on the project. "We''ve overcome fundamental barriers that have limited quantum computing for decades."

The implications extend far beyond theoretical physics. Industries ranging from pharmaceuticals to financial services are already exploring how this technology could transform their operations. Early applications may include drug discovery, weather prediction, and cryptographic security.

The research team plans to publish their full findings in the next issue of Nature Quantum Computing, providing detailed technical specifications and potential applications for the broader scientific community.', 'Sarah Johnson', 'Technology', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', 1),

('Global Climate Summit Reaches Historic Agreement', 'climate-summit-agreement', 'World leaders unite on ambitious new climate targets with unprecedented international cooperation.', 'World leaders concluded the Global Climate Summit today with a historic agreement that sets ambitious new targets for carbon emissions reduction. The accord represents the most comprehensive international climate action plan to date.

The agreement includes binding commitments from major economies to achieve net-zero emissions by 2050, with interim targets every five years. Developing nations will receive increased financial support for clean energy transitions.

"Today marks a turning point in our fight against climate change," declared Summit President Maria Rodriguez. "For the first time, we have unanimous commitment from all participating nations."

Key provisions include a $500 billion climate fund, technology sharing agreements, and standardized carbon pricing mechanisms. The accord also establishes an international monitoring system to track progress and ensure accountability.

Environmental groups have cautiously welcomed the agreement while emphasizing the importance of implementation. "Words must become actions," said Greenpeace International Director James Thompson.

The agreement will be formally ratified by participating nations over the next six months, with the first review scheduled for 2026.', 'Michael Rodriguez', 'World', 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=800&q=80', 1),

('Economic Markets Show Strong Recovery Signs', 'markets-recovery-signs', 'Major stock indices post significant gains as investor confidence rebounds across sectors.', 'Financial markets demonstrated remarkable resilience today as major indices posted their strongest gains in months. The rally was driven by positive economic indicators and renewed investor confidence across multiple sectors.

The S&P 500 closed up 2.3%, while the NASDAQ gained 2.8% and the Dow Jones Industrial Average rose 1.9%. Technology and healthcare stocks led the advance, with several companies reaching new 52-week highs.

Economic analysts point to improving employment figures, strong corporate earnings, and easing inflation concerns as key drivers of the market recovery. Consumer spending data released this morning exceeded expectations, signaling robust economic fundamentals.

"We''re seeing a perfect storm of positive factors," said Market Strategist David Kim. "The combination of strong fundamentals and improved sentiment is creating sustainable momentum."

International markets also participated in the rally, with European and Asian indices posting solid gains. Currency markets remained stable, with the dollar maintaining strength against major trading partners.

Looking ahead, investors will focus on next week''s Federal Reserve meeting and quarterly earnings reports from major corporations.', 'Jennifer Walsh', 'Business', 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', 0);
