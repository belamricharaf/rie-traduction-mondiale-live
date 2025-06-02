
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Globe } from "lucide-react";

interface Translator {
  id: number;
  name: string;
  specialty: string;
  languages: string[];
  rating: number;
  price: number;
  avatar: string;
  available: boolean;
  experience: string;
}

interface TranslatorCardProps {
  translator: Translator;
  onBook: (translator: Translator) => void;
}

const TranslatorCard = ({ translator, onBook }: TranslatorCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <img
              src={translator.avatar}
              alt={translator.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
              translator.available ? 'bg-green-500' : 'bg-gray-400'
            }`}></div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900">{translator.name}</h3>
            <p className="text-emerald-600 font-medium">{translator.specialty}</p>
            <p className="text-sm text-gray-500">{translator.experience}</p>
          </div>
        </div>

        <div className="flex items-center space-x-1 mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{translator.rating}</span>
          <span className="text-gray-500 text-sm">(127 avis)</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {translator.languages.map((lang, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {lang}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1 text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">
              {translator.available ? "Disponible maintenant" : "Occupé"}
            </span>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg text-emerald-600">{translator.price}€</div>
            <div className="text-xs text-gray-500">par session</div>
          </div>
        </div>

        <Button 
          className={`w-full ${
            translator.available 
              ? 'bg-emerald-600 hover:bg-emerald-700' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!translator.available}
          onClick={() => onBook(translator)}
        >
          {translator.available ? 'Réserver Maintenant' : 'Indisponible'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TranslatorCard;
