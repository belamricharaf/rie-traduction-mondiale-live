import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Clock, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import TranslatorCard from "@/components/TranslatorCard";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [selectedTranslator, setSelectedTranslator] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const translators = [
    {
      id: 1,
      name: "Amina Benali",
      specialty: "Médical",
      languages: ["Français", "Arabe", "Anglais"],
      rating: 4.9,
      price: 25,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      available: true,
      experience: "8 ans d'expérience"
    },
    {
      id: 2,
      name: "Karim Mansouri",
      specialty: "Juridique",
      languages: ["Français", "Arabe", "Anglais"],
      rating: 4.8,
      price: 30,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      available: true,
      experience: "12 ans d'expérience"
    },
    {
      id: 3,
      name: "Yasmine Zidane",
      specialty: "Business",
      languages: ["Français", "Arabe", "Anglais", "Espagnol"],
      rating: 4.9,
      price: 28,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      available: false,
      experience: "6 ans d'expérience"
    }
  ];

  const handleBookTranslator = (translator) => {
    setSelectedTranslator(translator);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                Manar Traduction
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#traducteurs" className="text-gray-700 hover:text-emerald-600 transition-colors">Traducteurs</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Connexion
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-emerald-600" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Traduction Professionnelle
              <span className="block bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                en Temps Réel
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connectez-vous instantanément avec des traducteurs algériens qualifiés. 
              Services spécialisés en médical, juridique, business et plus encore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3"
                onClick={() => document.getElementById('traducteurs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Réserver Maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Voir la Démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-gray-600">Traducteurs Certifiés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-gray-600">Disponibilité</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-gray-600">Langues Supportées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Spécialités</h2>
            <p className="text-xl text-gray-600">Des experts dans chaque domaine</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-emerald-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Traduction Médicale</h3>
                <p className="text-gray-600">Dossiers médicaux, consultations, rapports spécialisés avec une précision technique absolue.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-emerald-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Traduction Juridique</h3>
                <p className="text-gray-600">Contrats, procédures légales, documents officiels avec expertise juridique certifiée.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-emerald-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Business & Commerce</h3>
                <p className="text-gray-600">Négociations, réunions d'affaires, présentations avec expertise commerciale internationale.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Translators Section */}
      <section id="traducteurs" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Traducteurs</h2>
            <p className="text-xl text-gray-600">Professionnels certifiés disponibles maintenant</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Badge variant="outline" className="border-emerald-600 text-emerald-600">Tous</Badge>
            <Badge variant="outline">Médical</Badge>
            <Badge variant="outline">Juridique</Badge>
            <Badge variant="outline">Business</Badge>
            <Badge variant="outline">Technique</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {translators.map((translator) => (
              <TranslatorCard 
                key={translator.id} 
                translator={translator} 
                onBook={handleBookTranslator}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à Commencer ?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui font confiance à notre plateforme pour leurs besoins de traduction.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-gray-50 text-lg px-8 py-3"
          >
            Commencer Maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">Manar Traduction</span>
              </div>
              <p className="text-gray-400">
                La plateforme de référence pour la traduction professionnelle en temps réel.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Traduction Médicale</li>
                <li>Traduction Juridique</li>
                <li>Business & Commerce</li>
                <li>Traduction Technique</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Centre d'aide</li>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Conditions d'utilisation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@manartraduction.com</li>
                <li>+213 123 456 789</li>
                <li>Alger, Algérie</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Manar Traduction. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        translator={selectedTranslator}
      />
    </div>
  );
};

export default Index;
