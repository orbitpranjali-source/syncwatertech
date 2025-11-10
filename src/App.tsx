import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import FAQPage from './pages/FAQPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import ClientsPage from './pages/ClientsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { useMemo } from 'react';
import { buildProductsData, flattenProducts, type ProductItem, type RawGroup } from './data/products';
import * as productAssets from './pages/ProductsPage';

type PageType =
  | 'home'
  | 'projects'
  | 'projects:all'
  | 'projects:completed'
  | 'projects:ongoing'
  | 'about'
  | 'services'
  | 'products'
  | 'faq'
  | 'team'
  | 'contact'
  | 'clients'
  | `product:${string}`;

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);

  // Build a product index (slug -> product) based on ProductsPage raw data export
  const productIndex = useMemo(() => {
    const getRawProducts = (productAssets as { getRawProducts?: () => RawGroup[] }).getRawProducts;
    if (!getRawProducts) return {} as Record<string, ProductItem>;
    const groups = buildProductsData(getRawProducts());
    const flat = flattenProducts(groups);
    return flat.reduce<Record<string, ProductItem>>((acc, p) => {
      acc[p.slug] = p;
      return acc;
    }, {});
  }, []);

  const handleNavigate = (page: string) => {
    let target = page as PageType;
    // Support anchors like "contact#contact-form"
    if (page.includes('#')) {
      const [base, anchor] = page.split('#');
      target = base as PageType;
      setPendingAnchor(anchor || null);
    } else {
      setPendingAnchor(null);
    }
    if (target === currentPage || isTransitioning) return;
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setCurrentPage(target);
      setIsTransitioning(false);
      if (pendingAnchor) {
        // Give React a tick to render the new page before scrolling
        setTimeout(() => {
          const el = document.getElementById(pendingAnchor!);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          setPendingAnchor(null);
        }, 50);
      }
    }, 800);
  };

  useEffect(() => {
    document.body.style.overflow = 'visible';
  }, []);

  const renderPage = () => {
    const isProjects = currentPage.startsWith('projects');
    const projectFilter = isProjects
      ? (currentPage.split(':')[1] as 'all' | 'completed' | 'ongoing' | undefined)
      : undefined;
    const isProduct = currentPage.startsWith('product:');
    if (isProduct) {
      const slug = currentPage.split(':')[1];
      const p = productIndex[slug];
      if (!p) return <ProductsPage />;
      return (
        <ProductDetailPage
          productName={p.name}
          productImage={p.image}
          productDescription={p.paragraphs}
          bullets={p.bullets}
          onBack={() => handleNavigate('products')}
        />
      );
    }
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'projects':
      case 'projects:all':
      case 'projects:completed':
      case 'projects:ongoing':
        return <ProjectsPage initialFilter={projectFilter ?? 'all'} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'clients':
        return <ClientsPage />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <div className="relative flex-grow">
        {isTransitioning && (
          <div className="absolute inset-0 z-40 bg-white animate-drop-reveal" />
        )}
        <main className={`flex-grow ${isTransitioning ? 'pointer-events-none select-none' : ''}`}>
          <div className="animate-fade-in animate-slide-up">
            {renderPage()}
          </div>
        </main>
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
