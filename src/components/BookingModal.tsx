
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Globe, CreditCard } from "lucide-react";
import { useState } from "react";

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

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  translator: Translator | null;
}

const BookingModal = ({ isOpen, onClose, translator }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("30");
  const [description, setDescription] = useState("");

  if (!translator) return null;

  const totalPrice = translator.price * (parseInt(duration) / 30);

  const handleBooking = () => {
    console.log("Réservation pour:", {
      translator: translator.name,
      date: selectedDate,
      time: selectedTime,
      duration: duration,
      description: description,
      totalPrice: totalPrice
    });
    // Ici vous ajouteriez la logique de réservation
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <img
              src={translator.avatar}
              alt={translator.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-lg">Réserver avec {translator.name}</div>
              <div className="text-sm text-gray-500">{translator.specialty}</div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Date et Heure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date" className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Date</span>
              </Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="time" className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Heure</span>
              </Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir l'heure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">09:00</SelectItem>
                  <SelectItem value="10:00">10:00</SelectItem>
                  <SelectItem value="11:00">11:00</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="15:00">15:00</SelectItem>
                  <SelectItem value="16:00">16:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Durée */}
          <div>
            <Label htmlFor="duration">Durée de la session</Label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">1 heure</SelectItem>
                <SelectItem value="90">1 heure 30</SelectItem>
                <SelectItem value="120">2 heures</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Langues */}
          <div>
            <Label className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span>Langues disponibles</span>
            </Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {translator.languages.map((lang, index) => (
                <div key={index} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                  {lang}
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description du projet (optionnel)</Label>
            <Textarea
              id="description"
              placeholder="Décrivez votre projet de traduction, le contexte, ou toute information utile..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Résumé de la réservation */}
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <h3 className="font-semibold text-emerald-800 mb-2">Résumé de la réservation</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Traducteur:</span>
                <span className="font-medium">{translator.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Spécialité:</span>
                <span>{translator.specialty}</span>
              </div>
              <div className="flex justify-between">
                <span>Durée:</span>
                <span>{duration} minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Prix unitaire:</span>
                <span>{translator.price}€ / 30 min</span>
              </div>
              <div className="border-t border-emerald-200 pt-2 flex justify-between font-semibold">
                <span>Total:</span>
                <span className="text-emerald-600">{totalPrice}€</span>
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Annuler
            </Button>
            <Button 
              onClick={handleBooking} 
              className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              disabled={!selectedDate || !selectedTime}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Confirmer et Payer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
