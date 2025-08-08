"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Tag, Plus, Save, Thermometer, TrendingUp, Users } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";

const clientsAQualifier = [
  {
    id: 1,
    nom: "Jean Dupont",
    telephone: "+33123456789",
    email: "jean@example.com",
    qualification: null,
    score: 0,
    tags: [],
    notes: "",
    avatar: "JD"
  },
  {
    id: 2,
    nom: "Marie Martin",
    telephone: "+33987654321",
    email: "marie@example.com",
    qualification: "Tiède",
    score: 65,
    tags: ["Nouveau"],
    notes: "Intéressée par nos services premium",
    avatar: "MM"
  },
];

export default function QualificationPage() {
  const [selectedClient, setSelectedClient] = useState(clientsAQualifier[0]);
  const [score, setScore] = useState([selectedClient.score]);
  const [qualification, setQualification] = useState(selectedClient.qualification || "");
  const [notes, setNotes] = useState(selectedClient.notes);
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState(selectedClient.tags);

  const handleSave = () => {
    // Logique de sauvegarde
    console.log("Sauvegarde:", {
      clientId: selectedClient.id,
      score: score[0],
      qualification,
      notes,
      tags
    });
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const getQualificationColor = (qual: string) => {
    switch (qual) {
      case "Chaud": return "text-red-600";
      case "Tiède": return "text-orange-600";
      case "Froid": return "text-blue-600";
      default: return "text-gray-600";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-red-600";
    if (score >= 60) return "text-orange-600";
    if (score >= 40) return "text-blue-600";
    return "text-gray-600";
  };

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold">Qualification des clients</h1>
          <ModeToggle />
        </div>
      </header>
      
      <div className="flex-1 p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Liste des clients à qualifier */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Clients à qualifier
              </CardTitle>
              <CardDescription>
                Sélectionnez un client pour le qualifier
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {clientsAQualifier.map((client) => (
                  <div
                    key={client.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedClient.id === client.id 
                        ? "border-primary bg-primary/5" 
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => {
                      setSelectedClient(client);
                      setScore([client.score]);
                      setQualification(client.qualification || "");
                      setNotes(client.notes);
                      setTags(client.tags);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/generic-placeholder-graphic.png?height=40&width=40`} alt={client.nom} />
                        <AvatarFallback>{client.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{client.nom}</p>
                        <p className="text-sm text-muted-foreground truncate">
                          {client.telephone}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          {client.qualification && (
                            <Badge variant="outline" className={getQualificationColor(client.qualification)}>
                              {client.qualification}
                            </Badge>
                          )}
                          {client.score > 0 && (
                            <span className={`text-sm font-medium ${getScoreColor(client.score)}`}>
                              {client.score}/100
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Formulaire de qualification */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Qualifier {selectedClient.nom}
              </CardTitle>
              <CardDescription>
                Attribuez un score et une qualification à ce client
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Informations client */}
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`/placeholder_64px.png?height=64&width=64`} alt={selectedClient.nom} />
                  <AvatarFallback className="text-lg">{selectedClient.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{selectedClient.nom}</h3>
                  <p className="text-muted-foreground">{selectedClient.telephone}</p>
                  <p className="text-muted-foreground">{selectedClient.email}</p>
                </div>
              </div>

              {/* Score */}
              <div className="space-y-3">
                <Label className="text-base font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Score de qualification ({score[0]}/100)
                </Label>
                <Slider
                  value={score}
                  onValueChange={setScore}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Faible intérêt</span>
                  <span>Intérêt élevé</span>
                </div>
              </div>

              {/* Qualification */}
              <div className="space-y-2">
                <Label className="text-base font-medium flex items-center gap-2">
                  <Thermometer className="h-4 w-4" />
                  Qualification
                </Label>
                <Select value={qualification} onValueChange={setQualification}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Chaud">🔥 Chaud - Prêt à acheter</SelectItem>
                    <SelectItem value="Tiède">🟡 Tiède - Intéressé mais pas pressé</SelectItem>
                    <SelectItem value="Froid">❄️ Froid - Peu d'intérêt actuellement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tags */}
              <div className="space-y-3">
                <Label className="text-base font-medium flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Tags personnalisés
                </Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ajouter un tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  />
                  <Button onClick={addTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-base font-medium">
                  Notes et observations
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Ajoutez vos notes sur ce client..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button onClick={handleSave} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Sauvegarder
                </Button>
                <Button variant="outline">
                  Client suivant
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistiques de qualification */}
        <div className="grid gap-4 md:grid-cols-3 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clients Chauds</CardTitle>
              <div className="h-4 w-4 rounded-full bg-red-500"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">
                +12% ce mois-ci
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clients Tièdes</CardTitle>
              <div className="h-4 w-4 rounded-full bg-orange-500"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">
                +5% ce mois-ci
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clients Froids</CardTitle>
              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">43</div>
              <p className="text-xs text-muted-foreground">
                -8% ce mois-ci
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
